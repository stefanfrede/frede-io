/* Author: Stefan Frede */

// remap jQuery to $
(function($){})(window.jQuery);

/* trigger when page is ready */
$(document).ready(function (){
  if (!Modernizr.backgroundsize){
    $.backstretch("/img/bg-body.jpg", {speed: 150});
  }
  $("#mailto").click(function() {
    location.href='mailto:stefan@frede.info';
    return false;
  });
});
