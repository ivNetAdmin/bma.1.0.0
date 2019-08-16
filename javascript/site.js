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


$('#email-button').click(function() {

   const html = "<div>" +
       "<p>Name: " + $('.txt[name="name"]').val() + "</p>" +
       "<p>Tel: " + $('.txt[name="mob"]').val() + "</p>" +
       "<p>Email: " + $('.txt[name="email"]').val() + "</p>" +
       "<p>Notes: " + $('.txt_3').val() + "</p>" +
       "</div>"

   Email.send({      
       SecureToken : "080eef13-07c8-4f65-92dc-083189461630",
       To : ['e.egan@benchmarkaccountants.co.uk','d.tate@benchmarkaccountants.co.uk','bp@ivnet.co.uk'],
       From : "website@ivnet.co.uk",
       Subject : "Website Contact",
       Body : html
   }).then(
     message => addEmailMessage(message)
   );

   $(".txt").each(function() {
       $(this).val('');
   });

   $(".txt_3").val('');
});


}); 

function addEmailMessage(msg)
{
  $('#emailok').text('Thank you for the enquiry, the team will get back to you shortly');
}

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
