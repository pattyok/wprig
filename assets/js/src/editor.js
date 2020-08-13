/** Register custom styles for the button, remove the outline style */

wp.domReady( function() {
	wp.blocks.registerBlockStyle( 'core/button', {
		name: 'arrow-cta',
		label: 'Arrow Link',
	} );

	wp.blocks.unregisterBlockStyle( 'core/button', 'outline' );

	// Remove Core HR Style.
	wp.blocks.unregisterBlockStyle( 'core/separator', 'dots' );

	wp.blocks.unregisterBlockStyle( 'core/separator', 'wide' );

	// Add Column Styles
	wp.blocks.registerBlockStyle( 'core/separator', {
		name: 'with-margin',
		label: 'With Margin',
	} );

	wp.blocks.registerBlockVariation( 'core/group', {
		name: 'page-intro',
		title: 'Page Intro',
		icon: 'editor-aligncenter',
		innerBlocks: [
			[ 'core/paragraph', { align: 'center', fontSize: 'medium' } ],
		],
		attributes: { align: 'full', className: 'is-page-intro' },
		scope: [ 'inserter' ],
		keywords: [ 'intro', 'page' ],
	} );

	wp.blocks.registerBlockVariation( 'core/cover', {
		name: 'page-header-cover',
		title: 'Page Header',
		icon: 'format-image',
		innerBlocks: [
			[ 'core/heading', { align: 'center', level: 1, placeholder: 'Page Title' } ],
		],
		attributes: { align: 'full', className: 'is-page-header', dimRatio: 0 },
		scope: [ 'inserter' ],
		keywords: [ 'cover', 'page', 'header' ],
	} );
} );

//Set the default dimratio on the cover block to 0.
function setBlockDefaults( settings, name ) {
	if ( name === 'core/separator' ) {
		if ( settings.supports ) {
			settings.supports.align = [ 'wide', 'full' ];
		} else {
			settings.supports = {
				align: [ 'wide', 'full' ],
			};
		}
	}
	return settings;
}

wp.hooks.addFilter(
	'blocks.registerBlockType',
	'wprig-theme',
	setBlockDefaults
);
