$(window).scroll(function() {
  var mn = $('.nav');

  if($(this).scrollTop() > $(window).height()) { 
     mn.addClass("nav-scrolled")
  } else {
     mn.removeClass("nav-scrolled")
  };


  var scroll_top = $(window).scrollTop();
  var wh = $(window).height();
  var about_ot = $('.about').offset().top - 50;
  var projects_ot = $('.projects').offset().top - 50;
  var resume_ot = $('.resume').offset().top - 50;
  var contact_ot = $('.contact').offset().top - 50;

  if (scroll_top < wh) {
  	console.log('home');
  	$('#home').addClass('current-nav');
  	$('#about').removeClass('current-nav');
  	$('#projects').removeClass('current-nav');
  	$('#resume').removeClass('current-nav');
  	$('#contact').removeClass('current-nav');
  } else if (scroll_top > wh && scroll_top < projects_ot) {
  	console.log('about');
  	$('#home').removeClass('current-nav');
  	$('#about').addClass('current-nav');
  	$('#projects').removeClass('current-nav');
  	$('#resume').removeClass('current-nav');
  	$('#contact').removeClass('current-nav');
  } else if (scroll_top > projects_ot && scroll_top < resume_ot) {
  	console.log('projects')
  	$('#home').removeClass('current-nav');
  	$('#about').removeClass('current-nav');
  	$('#projects').addClass('current-nav');
  	$('#resume').removeClass('current-nav');
  	$('#contact').removeClass('current-nav');
  } else if (scroll_top > resume_ot && scroll_top < contact_ot) {
  	console.log('resume');
  	$('#home').removeClass('current-nav');
  	$('#about').removeClass('current-nav');
  	$('#projects').removeClass('current-nav');
  	$('#resume').addClass('current-nav');
  	$('#contact').removeClass('current-nav');
  } else if (scroll_top > contact_ot) {
  	console.log('contact');
  	$('#home').removeClass('current-nav');
  	$('#about').removeClass('current-nav');
  	$('#projects').removeClass('current-nav');
  	$('#resume').removeClass('current-nav');
  	$('#contact').addClass('current-nav');
  }
});

// Nav link scroll functions
$(document).ready(function() {
	$(".nav-link").click(function(e) {

	  e.preventDefault();
	  var item_id = this.id;
	   
	    $('html, body').animate({
	        scrollTop: $("."+ item_id).offset().top - 30
	    }, 800);
	});

	$(".nav-link-home").click(function(e) {

	  e.preventDefault();
	   
	    $('html, body').animate({
	        scrollTop: 0
	    }, 800);
	});
});
