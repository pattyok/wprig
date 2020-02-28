<?php
/**
 * Template part for displaying a post
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'entry page-content' ); ?>>

	<?php the_content(); ?>

</article><!-- #post-<?php the_ID(); ?> -->
