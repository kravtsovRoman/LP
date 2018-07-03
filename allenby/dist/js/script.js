     
$(document).ready(function(){

		//Burger menu в моб. версии
		$('#burger_check+label').on('click', function(event){
			$('.nav-menu').fadeToggle(200);
			event.stopPropagation();
		});

  //Header - top fixed
  $(window).scroll(function() {
  	if ($(window).scrollTop() >= 5) {
  		$(".header-top").addClass("header-top-fixed");
  		$("header .logo").addClass("logo-fixed");
  		$("header .nav-menu li").addClass("nav-menu-fixed");
  		$("header .nav-menu .header-phone").addClass("nav-phone-fixed");
  		$("header .burger").addClass("burger-fixed");
  	}
  	else{
  		$(".header-top").removeClass("header-top-fixed");
  		$("header .logo").removeClass("logo-fixed");
  		$("header .nav-menu li").removeClass("nav-menu-fixed");
  		$("header .nav-menu .header-phone").removeClass("nav-phone-fixed");
  		$("header .burger").removeClass("burger-fixed");
  	}
  });

  //Anchors
  $(".anhcors").on("click","a", function (event) {
  	event.preventDefault();
  	var id  = $(this).attr('href'),
  	top = $(id).offset().top;
  	$('body,html').animate({scrollTop: top -40}, 1000);
  });

	//Slider
	$('.slider').slick({
		speed: 500,
		dots: false,
		fade: true, 
		responsive: [
		{
			breakpoint: 991,
			settings: {
				// autoplay: true,
				autoplaySpeed: 5000,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		]
	});

});