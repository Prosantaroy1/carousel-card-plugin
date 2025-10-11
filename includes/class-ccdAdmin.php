<?php

if (!class_exists('CCDAdmin')) {
    class CCDAdmin {
        public function __construct() {
			if(ccdIsPremium()) {
				add_action('init', [$this, 'ccdRegisterPostType']);
			}
            add_action('admin_menu', [$this, "ccdAdminSubmenu"]);
            add_filter('manage_carousel_card_posts_columns', [$this, 'ccd_setCustomColumn_edit']);
			add_action('manage_carousel_card_posts_custom_column', [$this, 'ccd_manageCustomColumn'], 10, 2);
        }
        public function  ccdRegisterPostType() {
            register_post_type('carousel_card', [
				'label' => 'carousel_card',
				'description' => 'this is carousel_card and seo friendly card',
				'labels' => [
					'name' => __('carousel_card', 'service-card'),
					'singular_name' => __('carousel_card', 'service-card'),
					'add_new' => __('Add New', 'carousel_card'),
					'add_new_item' => __('Add New carousel_card', 'service-card'),
					'edit_item' => __('Edit carousel_card', 'service-card'),
					'new_item' => __('New carousel_card', 'service-card'),
					'view_item' => __('View carousel_card', 'service-card'),
					'view_items' => __('View carousel_card', 'service-card'),
					'search_items' => __('Search carousel_card', 'service-card'),
					'not_found' => __('No carousel_card found.', 'service-card'),
					'not_found_in_trash' => __('No carousel_card found in Trash.', 'service-card'),
					'parent_item_colon' => __('Parent carousel_card:', 'service-card'),
					'all_items' => __('All carousel_card', 'service-card'),
					'archives' => __('carousel_card Archives', 'service-card'),
					'attributes' => __('carousel_card Attributes', 'service-card'),
					'insert_into_item' => __('Insert into carousel_card', 'service-card'),
					'uploaded_to_this_item' => __('Uploaded to this carousel_card', 'service-card'),
					'featured_image' => __('Featured Image', 'service-card'),
					'set_featured_image' => __('Set featured image', 'service-card'),
					'remove_featured_image' => __('Remove featured image', 'service-card'),
					'use_featured_image' => __('Use as featured image', 'service-card'),
					'menu_name' => __('Carousel Card', 'service-card'),
					'filter_items_list' => __('Filter carousel_card list', 'service-card'),
					'filter_by_date' => __('Filter by date', 'service-card'),
					'items_list_navigation' => __('carousel_card list navigation', 'service-card'),
					'items_list' => __('carousel_card list', 'service-card'),
					'item_published' => __('carousel_card published.', 'service-card'),
					'item_published_privately' => __('carousel_card published privately.', 'service-card'),
					'item_reverted_to_draft' => __('carousel_card reverted to draft.', 'service-card'),
					'item_scheduled' => __('carousel_card scheduled.', 'service-card'),
					'item_updated' => __('carousel_card updated.', 'service-card'),
					'item_link' => __('carousel_card Link', 'service-card'),
					'item_link_description' => __('A link to an carousel_card.', 'service-card'),
				],
				'public' => true,
				"publicly_queryable" => false,
				'show_ui' => true,
				'show_in_menu' => true,
				'show_in_rest' => true,
				'menu_position' => 79,
				'menu_icon' => 'dashicons-index-card',
				'supports' => array('title', 'editor', 'revisions'),
				'template' => [['ccd/carousel-card']],
				// 'template_lock' => 'all', //lock
			]);
        }

        public function ccdAdminSubmenu() {
			$parent_slug = 'tools.php';
			
            add_submenu_page(
				ccdIsPremium() ? 'edit.php?post_type=carousel_card' : 'tools.php',
				'Get Helper',
				'Get Helper',
				'manage_options',
				'carousel_card_Dashboard',
				[$this, 'cc_carousel_card_Dashboard_page']
			);
        }

        public function cc_carousel_card_Dashboard_page() {
			?>
			<div id='vgbDashboard' data-info='<?php echo esc_attr(wp_json_encode([
				'version' => CCD_VERSION,
				'isPremium' => ccdIsPremium()
			])); ?>'></div>
			<?php
		}

        public function ccd_setCustomColumn_edit($column) {
            unset($column['date']);
			$column['shortcode'] = 'ShortCode';
			$column['date'] = 'Date';
			$column['publisher'] = 'Publisher';
			return $column;
        }

        public function ccd_manageCustomColumn($column_name, $post_id) {
            if ($column_name == 'shortcode') {
				echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr($post_id) . '">
						<input value="[carousel_card id=' . esc_attr($post_id) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($post_id) . '\')" readonly>
						<span class="tooltip">Copy To Clipboard</span>
					  </div>';
			}
			if ($column_name == 'publisher') {
				echo 'Prosanta Roy';
			}
        }
    }

    new CCDAdmin();
}




