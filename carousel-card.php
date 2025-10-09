<?php
/**
 * Plugin Name: Carousel Card
 * Description: Short description of the plugin bPlugins
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: carousel-card
 */

// ABS PATH
if (!defined('ABSPATH')) {
	exit;
}
if (function_exists('cc_fs')) {
	cc_fs()->set_basename(true, __FILE__);
} else {
	// Constant
	define('CCD_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
	define('CCD_DIR_URL', plugin_dir_url(__FILE__));
	define('CCD_DIR_PATH', plugin_dir_path(__FILE__));
	//feemius
	if (!function_exists('cc_fs')) {
		function cc_fs()
		{
			global $cc_fs;

			if (!isset($cc_fs)) {
				require_once dirname(__FILE__) . '/vendor/freemius/start.php';
				$cc_fs = fs_dynamic_init(array(
					'id' => '21086',
					'slug' => 'carousel-card',
					'type' => 'plugin',
					'public_key' => 'pk_7409dca5099207c685fdf146edf18',
					'is_premium' => true,
					'premium_suffix' => 'pro',
					'has_premium_version' => true,
					'has_addons' => false,
					'has_paid_plans' => true,
					'wp_org_gatekeeper' => 'OA7#BoRiBNqdf52FvzEf!!074aRLPs8fspif$7K1#4u4Csys1fQlCecVcUTOs2mcpeVHi#C2j9d09fOTvbC0HloPT7fFee5WdS3G',
					'trial' => array(
						'days' => 3,
						'is_require_payment' => false,
					),
					'menu' => array(
						'slug' => 'edit.php?post_type=carousel-card',
						'first-path' => 'post-new.php?post_type=carousel_card',
					),
				));
			}

			return $cc_fs;
		}

		cc_fs();
		do_action('cc_fs_loaded');
	}

	// ... Your plugin's main file logic ...
	if (!class_exists('PREFIXPlugin')) {
		class PREFIXPlugin
		{
			function __construct()
			{
				add_action('init', [$this, 'onInit']);
				//add_action('enqueue_block_assets', [$this, 'my_block_enqueue_scripts']);
				//shortCode or CPT
				add_shortcode('carousel_card', [$this, 'carousel_card_shortcode']);
				add_filter('manage_carousel_card_posts_columns', [$this, 'cc_setCustomColumn_edit']);
				add_action('manage_carousel_card_posts_custom_column', [$this, 'cc_manageCustomColumn'], 10, 2);
				add_action('admin_enqueue_scripts', [$this, 'cc_admin_enqueue_script']);
				//Dashboard
				add_action('admin_menu', [$this, 'add_carousel_card_submenu']);
				add_action('admin_enqueue_scripts', [$this, 'adminEnqueueScripts']);

			}

			function onInit()
			{
				register_block_type(__DIR__ . '/build');
				//--CPT add (1)--
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

			//---Dashboard (4)
			function add_carousel_card_submenu()
			{
				add_submenu_page(
					'edit.php?post_type=carousel_card',
					'Get Helper',
					'Get Helper',
					'manage_options',
					'carousel_card_Dashboard',
					[$this, 'cc_carousel_card_Dashboard_page']
				);
			}
			function cc_carousel_card_Dashboard_page()
			{
				?>
				<div id='vgbDashboard' data-info='<?php echo esc_attr(wp_json_encode([
					'version' => CCD_VERSION,
					'isPremium' => false,
					'hasPro' => false
				])); ?>'></div>
				<?php
			}
			function adminEnqueueScripts($hook)
			{

				if ('carousel_card_page_carousel_card_Dashboard' === $hook) {
					wp_enqueue_style('vgb-admin-style', CCD_DIR_URL . './build/admin-dashboard.css', false, CCD_VERSION);
					wp_enqueue_script('vgb-admin-script', CCD_DIR_URL . './build/admin-dashboard.js', ['react', 'react-dom', 'wp-data', "wp-api", "wp-util", "wp-i18n", "lodash"], CCD_VERSION, true);
					wp_set_script_translations('vgb-admin-dashboard', 'service-card', CCD_DIR_PATH . 'languages');

				}
			}

			//---column add or manage (2)---
			function cc_setCustomColumn_edit($column)
			{
				unset($column['date']);
				$column['shortcode'] = 'ShortCode';
				$column['date'] = 'Date';
				$column['publisher'] = 'Publisher';
				return $column;
			}
			function cc_manageCustomColumn($column_name, $post_id)
			{

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

			//--shortcode or copy content and enqueue (3)--
			function carousel_card_shortcode($atts)
			{
				$post_id = $atts['id'];
				$post = get_post($post_id);

				if (!$post) {
					return '';
				}

				if (post_password_required($post)) {
					return get_the_password_form($post);
				}

				switch ($post->post_status) {
					case 'publish':
						return $this->displayContent($post);

					case 'private':
						if (current_user_can('read_private_posts')) {
							return $this->displayContent($post);
						}
						return '';

					case 'draft':
					case 'pending':
					case 'future':
						if (current_user_can('edit_post', $post_id)) {
							return $this->displayContent($post);
						}
						return '';

					default:
						return '';
				}
			}
			function displayContent($post)
			{
				$blocks = parse_blocks($post->post_content);
				return render_block($blocks[0]);
			}
			function cc_admin_enqueue_script()
			{
				global $typenow;

				if ('carousel_card' === $typenow) {
					wp_enqueue_script('shortcode-js', CCD_DIR_URL . './build/shortcode.js', [], CCD_VERSION, true);
					wp_enqueue_style(
						'shortcode-css',
						CCD_DIR_URL . './build/shortcode.css',
						[],
						CCD_VERSION
					);
				}
			}



			// function my_block_enqueue_scripts()
			// {
			// 	wp_enqueue_script(
			// 		'react-multi-carousel',
			// 		'https://cdn.jsdelivr.net/npm/react-multi-carousel@2.9.6/dist/react-multi-carousel.min.js',
			// 		['wp-element'],
			// 		'2.9.6',
			// 		true
			// 	);

			// 	wp_enqueue_style(
			// 		'react-multi-carousel-css',
			// 		'https://cdn.jsdelivr.net/npm/react-multi-carousel@2.9.6/lib/styles.css',
			// 		[],
			// 		'2.9.6'
			// 	);
			// }

		}
		new PREFIXPlugin();
	}
}







