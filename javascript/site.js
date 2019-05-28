$(function() { 
   new universalParallax().init({
      speed: 8.0
  });

  $('.service-link').bind('click',function(event){
      event.preventDefault();
      var element = '.'+$(this).attr('id');

      $(".service-block").hide();
      $(element).fadeIn(500);
  });

  $('.service-data').bind('click',function(event){
   event.preventDefault();
  
   $(".service-data").hide();
   $(".service-block").fadeIn(500);
});

}); 



$(window).scroll(function() {    
   var scroll = $(window).scrollTop();

   if (scroll >= 180) {
      $('.navbar').addClass('shrink-navbar');
      //$('.navbar-brand img').addClass('shrink-navbar-brand');
      //$('.nav-logo').addClass('shrink-nav-logo');
   } else {        
      $('.navbar').removeClass('shrink-navbar');
      //$('.nav-logo').removeClass('shrink-nav-logo');
      //$('.navbar-brand img').removeClass('shrink-navbar-brand');
  }
});
