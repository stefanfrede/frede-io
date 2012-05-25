/* Author: Stefan Frede */

// remap jQuery to $
(function($){})(window.jQuery);

/* trigger when page is ready */
$(document).ready(function (){
  if (!Modernizr.backgroundsize){
    $.backstretch("/_/img/bg-body.jpg", {speed: 150});
  }
  $("p.adr a.plain").fancybox({
    'hideOnContentClick': true
  });

  $("#mailto").click(function() {
    location.href='mailto:public@frede.biz';
    return false;
  });
});






















