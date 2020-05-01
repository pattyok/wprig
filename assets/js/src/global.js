( function( $ ) {
	const portfolioBlockSize = function() {
		const w = $( document ).width();

		$( '.wp-block-ck-custom_posttype__list.is-grid .wp-block-ck-custom_posttype__content-wrap' ).each( function() {
			const height = $( this ).outerHeight();
			if ( w > 1080 ) {
				$( this ).css( 'bottom', -height );
			} else {
				$( this ).css( 'bottom', 0 );
			}
			$( this ).show();
		} );

		$( '.wp-block-ck-custom_posttype__list.is-grid .wp-block-ck-custom_posttype__image-link > img' ).each( function() {
			const myW = $( this ).outerWidth();
			$( this ).height( myW * 0.6666666 );
		} );
	};
	$( window ).resize( function() {
		portfolioBlockSize();
	} );

	$( document ).ready( function() {
		portfolioBlockSize();
	} );
}( jQuery ) );
