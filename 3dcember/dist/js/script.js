$(document).ready(function(){

// Fixed header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 25) {
      $(".header").addClass("header-scroll");
      $(".header .logo-image").addClass("logo-image-scroll");
      
    }
    else{
      $(".header").removeClass("header-scroll");
      $(".header .logo-image").removeClass("logo-image-scroll");    
    }
  });
});


  //Burger menu в моб. версии
  // $('#burger_check+label').on('click', function(event){
  //   $('.nav-menu').fadeToggle(200);
  //   event.stopPropagation();
  // });




  //Animate number 
$(window).on("scroll", function() {
  
  var height = $('.models-statistic').offset().top -850;

  if ($(window).scrollTop() > height) {
    var time = 5000;

    $('#num1').animate({ num: 1493}, {
      duration: time,
      step: function (num){
        this.innerHTML = (num + 0).toFixed(0);
      }
    });
    $('#num2').animate({ num: 1056}, {
      duration: time,
      step: function (num){
        this.innerHTML = (num + 0).toFixed(0);
      }
    });
    $('#num3').animate({ num: 16}, {
      duration: time,
      step: function (num){
        this.innerHTML = (num + 0).toFixed(0);
      }
    });
  };
});
