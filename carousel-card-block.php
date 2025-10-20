<?php

if (!class_exists('CCDBlock')) {
  class CCDBlock
  {

    public function __construct()
    {
      add_action('init', [$this, 'onInit']);
      add_action('enqueue_block_editor_assets', [$this, "ccdEnqueueEditorAssets"]);
      add_action('init', [$this, 'register_shortcode']); // ✅ shortcode properly register
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

    // ✅ Shortcode registration function
    public function register_shortcode()
    {
      add_shortcode('carousel_card_view', [$this, 'render_shortcode']);
    }

    // ✅ Shortcode render function
    public function render_shortcode()
    {
      $data = get_option('carousel_data');
      if (empty($data['card_group'])) {
        return '<p style="text-align:center;color:#888;">No cards found!</p>';
      }

      ob_start();
      echo '<div style="display:flex;flex-wrap:wrap;gap:15px;justify-content:center;">';

      foreach ($data['card_group'] as $card) {
        $title = esc_html($card['title'] ?? '');
        $desc = esc_html($card['description'] ?? '');
        $img = esc_url($card['img']['url'] ?? '');

        echo "<div style='border:1px solid #ddd;border-radius:10px;padding:10px;width:260px;text-align:center;box-shadow:0 1px 4px rgba(0,0,0,0.1);background:#fff;'>
                " . ($img ? "<img src='{$img}' style='width:100%;height:120px;object-fit:cover;border-radius:8px;'>" : "<div style='width:100%;height:120px;background:#eee;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#999;'>No Image</div>") . "
                <h4 style='margin:6px 0 4px;font-size:16px;color:#333;'>{$title}</h4>
                <p style='font-size:13px;color:#555;'>{$desc}</p>
              </div>";
      }

      echo '</div>';
      return ob_get_clean();
    }
  }

  new CCDBlock();
}


if (class_exists('CSF')) {


  $prefix = 'carousel_data';
  $prefixSetting = 'carousel_setting';

  // Card Page
  CSF::createOptions($prefix, array(
    'framework_title' => 'BPlugins Table <small>by bPlugins</small>',
    'menu_title' => 'Carousel Card',
    'menu_slug' => 'carousel-cards',
    'menu_type' => 'submenu',
    'menu_parent' => 'edit.php?post_type=carousel_card',
    'menu_position' => 2,
  ));

  CSF::createSection($prefix, array(
    'title' => 'Carousel Card',
    'fields' => array(
      array(
        'type' => 'content',
        'content' => ccd_preview_cards_html(),
      ),
      array(
        'id' => 'card_group',
        'type' => 'group',
        'title' => 'Card Items',
        'fields' => array(
          array(
            'id' => 'title',
            'type' => 'text',
            'title' => 'Title',
          ),
          array(
            'id' => 'description',
            'type' => 'textarea',
            'title' => 'Description',
          ),
          array(
            'id' => 'img',
            'type' => 'media',
            'title' => 'Image',
          ),
        ),
        'default' => array(
          array('title' => 'Card One', 'description' => 'This is first card.'),
          array('title' => 'Card Two', 'description' => 'This is second card.'),
          array('title' => 'Card Three', 'description' => 'This is third card.'),
        ),
      ),
    ),
  ));

  // Setting Page
  CSF::createOptions($prefixSetting, array(
    'framework_title' => 'BPlugins Setting <small>by bPlugins</small>',
    'menu_title' => 'Setting',
    'menu_slug' => 'carousel-settings',
    'menu_type' => 'submenu',
    'menu_parent' => 'edit.php?post_type=carousel_card',
    'menu_position' => 3,
  ));

  CSF::createSection($prefixSetting, array(
    'title' => 'Advance',
    'fields' => array(
      array(
        'id' => 'optimization',
        'type' => 'switcher',
        'title' => 'Optimization Card',
      ),
      array(
        'id' => 'opt-checkbox',
        'type' => 'checkbox',
        'title' => 'Checkbox',
        'label' => 'Yes, Please your access data and privet your data our Towards.',
        'default' => false,
      ),
      array(
        'id' => 'optimization_css',
        'type' => 'switcher',
        'title' => 'CSS or JS Optimization',
      ),
    ),
  ));
}

// ==================== Backend Preview Function ====================

function ccd_preview_cards_html()
{
  $data = get_option('carousel_data');

  $html = '<div style="margin-top:20px;">';
  $html .= '<h3 style="margin-bottom:10px; font-size: 18px;">Live Card Preview <span style="float:right;font-size:18px;color:#0073aa;">Shortcode: <code>[carousel_card_view]</code></span></h3>';

  if (empty($data['card_group'])) {
    $html .= '<p style="color:#888;">No card data found yet. Add some cards below.</p></div>';
    return $html;
  }

  $html .= '<div style="display:flex;flex-wrap:wrap;gap:15px;">';
  foreach ($data['card_group'] as $card) {
    $title = esc_html($card['title'] ?? '');
    $desc = esc_html($card['description'] ?? '');
    $img = esc_url($card['img']['url'] ?? '');

    $html .= '<div style="border:1px solid #ddd;border-radius:10px;padding:10px;width:300px;box-shadow:0 1px 5px rgba(0,0,0,0.1);text-align:center;">';
    if ($img) {
      $html .= '<img src="' . $img . '" style="width:100%;height:120px;object-fit:cover;border-radius:8px;">';
    }
    $html .= '<h4 style="margin:8px 0 4px;font-size:16px;">' . $title . '</h4>';
    $html .= '<p style="font-size:13px;color:#555;">' . $desc . '</p>';
    $html .= '</div>';
  }
  $html .= '</div></div>';

  return $html;
}
