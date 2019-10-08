jQuery(document).ready(function ($) {
	// $( ".menu-item-has-children" ).append( '<span class="triger">></span>' );

	$(".triger").click(function () {
		$(this).parent().toggleClass( "menu-item-has-children--expanded" );
	})

  $(document).ready(function(){
    $('.main-carousel').flickity({
      wraparound: true,
      autoPlay: 3500,
      // pauseAutoPlayOnHover: false,
      // lazyLoad: 1,
      pageDots: true,
      prevNextButtons: true
    });
  });
});




