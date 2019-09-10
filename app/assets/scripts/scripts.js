jQuery(document).ready(function ($) {
	// $( ".menu-item-has-children" ).append( '<span class="triger">></span>' );

	$(".triger").click(function () {
		$(this).parent().toggleClass( "menu-item-has-children--expanded" );
	})
})

