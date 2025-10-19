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

    public function ccdEnqueueEditorAssets()
    {
      wp_add_inline_script(
        'ccd-carousel-card-editor-script',
        'const ccdIsPipeChecker = ' . wp_json_encode(ccdIsPremium()) . ';',
        'before'
      );

    }




  }

  new CCDBlock();
}

// Control core classes for avoid errors
if (class_exists('CSF')) {

  //
  // Set a unique slug-like ID
  $prefix = 'my_framework';

  //
  // Create options
  CSF::createOptions($prefix, array(
    "framework_title" => "BPlugins Table",
    'menu_title' => 'Carousel Card Setting',
    'menu_slug' => 'carousel-card-setting',
  ));

  CSF::createSection($prefix, array(
    'title' => 'carousel card',
    'fields' => array(
      array(
        'id' => 'title',
        'type' => 'text',
        'title' => 'Title',
        'default' => 'Hello world.'
      ),
      array(
        'id' => 'description',
        'type' => 'textarea',
        'title' => 'Description',
        'default' => 'Enter your description !'
      ),
      array(
        'id' => 'image',
        'type' => 'gallery',
        'title' => 'Your image select',
      ),
      array(
        'id' => 'opt-repeater-1',
        'type' => 'repeater',
        'title' => 'Repeater',
        'fields' => array(

          array(
            'id' => 'opt-text',
            'type' => 'text',
            'title' => 'Text'
          ),

        ),
      ),

      array(
        'id' => 'opt-sportable-1',
        'type' => 'sortable',
        'title' => 'Sortable',
        'fields' => array(

          array(
            'id' => 'text-1',
            'type' => 'text',
            'title' => 'Text 1'
          ),

          array(
            'id' => 'text-2',
            'type' => 'text',
            'title' => 'Text 2'
          ),

        ),
      ),
      array(
        'id' => 'opt-upload-1',
        'type' => 'upload',
        'title' => 'Upload',
      ),
      array(
        'id' => 'opt-tabbed-1',
        'type' => 'tabbed',
        'title' => 'Tabbed',
        'tabs' => array(
          array(
            'title' => 'Tab 1',
            'icon' => 'fa fa-heart',
            'fields' => array(
              array(
                'id' => 'opt-text-1',
                'type' => 'text',
                'title' => 'Text',
              ),
            )
          ),
          array(
            'title' => 'Tab 2',
            'icon' => 'fa fa-gear',
            'fields' => array(
              array(
                'id' => 'opt-color-1',
                'type' => 'color',
                'title' => 'Color',
              ),
            )
          ),
        )
      ),

      array(
        'id' => 'opt-select-1',
        'type' => 'select',
        'title' => 'Select',
        'placeholder' => 'Select an option',
        'options' => array(
          'option-1' => 'Option 1',
          'option-2' => 'Option 2',
          'option-3' => 'Option 3',
        ),
        'default' => 'option-2'
      ),





    )
  ));

}