$(document).ready(function() {

 $('.header-nav_menu li a').click(function(event){
 	// event.preventDefault();
		var scroll = $(this).attr('href');
	  if ($(scroll).length != 0) {
	  	$('html, body').animate({ scrollTop: $(scroll).offset().top }, 1000);
   }
  	return false;
 });

	$('.gallery-slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: true,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	  		slidesToScroll: 1,
	  		arrows: true,
	      }
	    },
	    {
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 1,
	  		slidesToScroll: 1,
	  		arrows: false,
	  		dots: true
	      }
	    }
	  ]
	});
	$('.about-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	});

 var menuBtn = $('.header-btn');
	var menu = $('.header-nav_menu');
	menuBtn.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('header-nav_menu__active');
	});

}); 
	 