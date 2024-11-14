<?php
// Enqueue styles
function my_custom_theme_styles()
{
    wp_enqueue_style('main-styles', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'my_custom_theme_styles');

// Add theme support
function my_custom_theme_setup()
{
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'my_custom_theme_setup');
