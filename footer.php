<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package RobotFossil
 * @subpackage Robot_Fossil
 * @since Robot Fossil 1.0
 */
?>

    </div><!-- #main -->

    <footer id="colophon" class="site-footer" role="contentinfo">

      <?php get_sidebar( 'footer' ); ?>

      <div class="site-info">
        <?php do_action( 'robotfossil_credits' ); ?>
        <a href="<?php echo esc_url( __( 'http://wordpress.org/', 'robotfossil' ) ); ?>"><?php printf( __( 'Proudly powered by %s', 'robotfossil' ), 'WordPress' ); ?></a>
      </div><!-- .site-info -->
    </footer><!-- #colophon -->
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/robotfossil.min.js"></script>
  </div><!-- #page -->

  <?php wp_footer(); ?>
</body>
</html>