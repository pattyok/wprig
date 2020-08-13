<?php
/**
 * Template part for displaying a post's header
 *
 * @package wp_rig
 */

namespace WP_Rig\WP_Rig;

?>

<header class="page-header">
	<?php
	get_template_part( 'template-parts/content/entry_title', get_post_type() );
	if ( get_post_type() === 'post' ) {
		get_template_part( 'template-parts/content/entry_meta', get_post_type() );
	}

	?>
</header><!-- .entry-header -->
