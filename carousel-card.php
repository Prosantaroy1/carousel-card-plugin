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
 * @fs_free_only /freemius-lite
 * @fs_premium_only /freemius
 * 
 */

// ABS PATH
if (!defined('ABSPATH')) {
	exit;
}


if (function_exists('ccd_fs')) {
	ccd_fs()->set_basename(true, __FILE__);
} else {
	// Constant
	define('CCD_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
	define('CCD_DIR_URL', plugin_dir_url(__FILE__));
	define('CCD_DIR_PATH', plugin_dir_path(__FILE__));

	define('CCD_HAS_PRO', (plugin_basename(__FILE__) === 'carousel-card-pro/carousel-card.php'));


	if (!function_exists('ccd_fs')) {
		// Create a helper function for easy SDK access.
		function ccd_fs()
		{
			global $ccd_fs;

			if (!isset($ccd_fs)) {
				$fsLitePath = CCD_DIR_PATH . '/freemius-lite/start.php';
				$fsPath = CCD_DIR_PATH . '/freemius/start.php';

				// Include Freemius SDK.
				if (CCD_HAS_PRO && (file_exists(filename: $fsPath))) {
					require_once $fsPath;
				} else {
					require_once $fsLitePath;
				}

				$ccdFsConfig = [
					'id' => '21086',
					'slug' => 'carousel-card',
					'premium_slug' => 'carousel-card-pro',
					'type' => 'plugin',
					'public_key' => 'pk_7409dca5099207c685fdf146edf18',
					'is_premium' => true,
					'premium_suffix' => 'pro',
					// If your plugin is a serviceware, set this option to false.
					'has_premium_version' => true,
					'has_addons' => false,
					'has_paid_plans' => true,
					'trial' => array(
						'days' => 3,
						'is_require_payment' => false,
					),
					'menu' => CCD_HAS_PRO ? array(
						'slug' => 'edit.php?post_type=carousel_card',
						'first-path' => 'edit.php?post_type=carousel_card&page=carousel_card_Dashboard#/welcome',
					) : array(
						'slug' => 'carousel_card_Dashboard',
						'first-path' => 'tools.php?page=carousel_card_Dashboard#/welcome',
						'parent' => array(
							'slug' => 'tools.php',
						),
					),
				];


				$ccd_fs = CCD_HAS_PRO && file_exists($fsPath) ? fs_dynamic_init($ccdFsConfig) : fs_lite_dynamic_init($ccdFsConfig);
			}

			return $ccd_fs;
		}

		// Init Freemius.
		ccd_fs();
		// Signal that SDK was initiated.
		do_action('ccd_fs_loaded');
	}


	// ... Your plugin's main file logic ...
	require_once CCD_DIR_PATH . "includes/class-ccdPlugin.php";
	new CCDPlugin();
}















