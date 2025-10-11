<?php

if (!class_exists('CCDBlock')) {
    class CCDBlock
    {
        public function __construct()
        {
            add_action('init', [$this, 'onInit']);
            add_action('enqueue_block_editor_assets', [$this, "ccdEnqueueEditorAssets"]);
        }

        public function onInit()
        {
            register_block_type(__DIR__ . '/build');
            wp_set_script_translations('ccd-translator', 'carousel-card', CCD_DIR_URL . 'languages');
        }

        public function ccdEnqueueEditorAssets() {
            wp_add_inline_script(
                'ccd-carousel-card-editor-script',
                'const ccdIsPipeChecker = ' . wp_json_encode(ccdIsPremium()) . ';',
                'before'
            );

        }
    }

    new CCDBlock();
}