<?php
  /**
   * Robot Fossil functions and definitions
   *
   * @package RobotFossil
   * @subpackage Robot_Fossil
   * @since Robot Fossil 1.0
   */

  add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
  function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
  }
