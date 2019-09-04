jQuery(document).ready(function( $ ) {

$('.gal').each(function() {
	$(this).magnificPopup({
		delegate: '.img',
			type: 'image',
			gallery: {
			enabled:true
			}
		});
	});
}); 
