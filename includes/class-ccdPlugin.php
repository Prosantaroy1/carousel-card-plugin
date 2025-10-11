<?php

if (!class_exists('CCDPlugin')) {
    class CCDPlugin {
        public function __construct(){
           add_action('plugins_loaded', [$this, 'load_dependencies']);
           add_action('admin_enqueue_scripts', [$this, 'ccdAdminScripts']);
           if(CCD_HAS_PRO ? ccd_fs()->can_use_premium_code() : false) {
               add_shortcode('carousel_card', [$this, 'ccd_carousel_card_shortcode']);
           }
        } 

        public function load_dependencies() {
           require_once CCD_DIR_PATH . 'includes/functions.php';
           require_once CCD_DIR_PATH . 'carousel-card-block.php';
           require_once CCD_DIR_PATH . 'includes/class-ccdAdmin.php';
        }

        public function ccdAdminScripts($screen) {
            global $typenow;
            
			if ('carousel_card' === $typenow && $screen === "edit.php") {
				wp_enqueue_script('shortcode-js', CCD_DIR_URL . '/build/shortcode.js', [], CCD_VERSION, true);
				wp_enqueue_style(
					'shortcode-css',
					CCD_DIR_URL . '/build/shortcode.css',
					[],
					CCD_VERSION
				);
			}
            
            if ('carousel_card_page_carousel_card_Dashboard' === $screen || 'tools_page_carousel_card_Dashboard' === $screen) {
				wp_enqueue_style('vgb-admin-style', CCD_DIR_URL . '/build/admin-dashboard.css', false, CCD_VERSION);
				wp_enqueue_script('vgb-admin-script', CCD_DIR_URL . '/build/admin-dashboard.js', ['react', 'react-dom', 'wp-data', "wp-api", "wp-util", "wp-i18n", "lodash"], CCD_VERSION, true);
				wp_set_script_translations('vgb-admin-dashboard', 'carousel-card', CCD_DIR_PATH . 'languages');
		    }
        }

        public function ccd_carousel_card_shortcode($atts) {
            if (isset($atts['id'])) {
            $post = get_post($atts['id']);

            
            if ($post) {
                $blocks = parse_blocks($post->post_content);

                foreach ($blocks as $block) {
                    if ($block['blockName'] === 'ccd/carousel-card') {
                        return render_block($block);
                    }
                }
            } else {
                return 'Post not found or invalid post type.';
            }
        }
		}



    }
    
}
