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

// Constant
define('CCD_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('CCD_DIR_URL', plugin_dir_url(__FILE__));
define('CCD_DIR_PATH', plugin_dir_path(__FILE__));


if (!class_exists('PREFIXPlugin')) {
	class PREFIXPlugin
	{
		function __construct()
		{
			add_action('init', [$this, 'onInit']);
			add_action('enqueue_block_assets', [$this, 'my_block_enqueue_scripts']);
		}

		function onInit()
		{
			register_block_type(__DIR__ . '/build');

		}

		function my_block_enqueue_scripts()
		{
			wp_enqueue_script(
				'react-multi-carousel',
				'https://cdn.jsdelivr.net/npm/react-multi-carousel@2.9.6/dist/react-multi-carousel.min.js',
				['wp-element'],
				'2.9.6',
				true
			);

			wp_enqueue_style(
				'react-multi-carousel-css',
				'https://cdn.jsdelivr.net/npm/react-multi-carousel@2.9.6/lib/styles.css',
				[],
				'2.9.6'
			);
		}

	}
	new PREFIXPlugin();
}