/** Register custom styles for the button, remove the outline style */

wp.domReady( function() {
	wp.blocks.registerBlockStyle( 'core/button', {
		name: 'arrow-cta',
		label: 'Arrow Link',
	} );

	wp.blocks.unregisterBlockStyle( 'core/button', 'outline' );
} );
