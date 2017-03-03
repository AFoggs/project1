// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('#form').on('submit', function(e) {
   e.preventDefault();
   alerUser(userName);
 });

  function alertUser(){
    alert('Thank you! Your response has been recorded!');
     e.preventDefault();
 }
});
