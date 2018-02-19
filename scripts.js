$(window).scroll(function() {
  var mn = $('.nav');

  if($(this).scrollTop() > $(window).height()) { 
     mn.addClass("nav-scrolled")
  } else {
     mn.removeClass("nav-scrolled")
  };
});
