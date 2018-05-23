$(document).ready(function(){


  $(window).scroll(function() {
    if ($(this).scrollTop() > 25) {
      $(".out-list li").addClass("menu-padding");
      $(".header").addClass("header-padding");
      $(".header-top").addClass("header-top-padding");
    }
    else{
      $(".out-list li").removeClass("menu-padding");
      $(".header").removeClass("header-padding");   
      $(".header-top").removeClass("header-top-padding");     
    }
  });
});


  //Burger menu в моб. версии
  // $('#burger_check+label').on('click', function(event){
  //   $('.nav-menu').fadeToggle(200);
  //   event.stopPropagation();
  // });

// Facebook comments
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v3.0';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


