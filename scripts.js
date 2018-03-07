


$(document).ready(function() {

	$(window).scroll(function() {

	  // make nav sticky
	  var mn = $('.nav');

	  if($(this).scrollTop() > $(window).height()) { 
	     mn.addClass("nav-scrolled")
	  } else {
	     mn.removeClass("nav-scrolled")
	  };

	  // highlight current nav item
	  var scroll_top = $(window).scrollTop();
	  var wh = $(window).height();
	  var about_ot = $('.about').offset().top - 50;
	  var projects_ot = $('.projects').offset().top - 50;
	  var resume_ot = $('.resume').offset().top - 50;
	  var contact_ot = $('.contact').offset().top - 50;

	  if (scroll_top < wh) {
	  	$('.nav-link, .nav-link-home').removeClass('current-nav');
	  	$('#home').addClass('current-nav');
	  } else if (scroll_top > wh && scroll_top < projects_ot) {
	  	$('.nav-link, .nav-link-home').removeClass('current-nav');
	  	$('#about').addClass('current-nav');
	  } else if (scroll_top > projects_ot && scroll_top < resume_ot) {
	  	$('.nav-link, .nav-link-home').removeClass('current-nav');
	  	$('#projects').addClass('current-nav');
	  } else if (scroll_top > resume_ot && scroll_top < contact_ot) {
	  	$('.nav-link, .nav-link-home').removeClass('current-nav');
	  	$('#resume').addClass('current-nav');
	  } else if (scroll_top > contact_ot) {
	  	$('.nav-link, .nav-link-home').removeClass('current-nav');
	  	$('#contact').addClass('current-nav');
	  }
	});

	// Nav link scroll to section
	$(".nav-link").click(function(e) {
	  e.preventDefault();

	  var item_id = this.id;
	   
	    $('html, body').animate({
	        scrollTop: $("."+ item_id).offset().top - 30
	    }, 800);
	});

	// Nav link scroll to top
	$(".nav-link-home").click(function(e) {
	  e.preventDefault();
	   
	    $('html, body').animate({
	        scrollTop: 0
	    }, 800);
	});

	// Learn more button scroll to about
	$(".learn-more").click(function(e) {
		e.preventDefault();

		$('html, body').animate({
	        scrollTop: $(window).height() + 1
	    }, 800);
	});

	// Reveal music section dropdown
	$('.yes-button').click(function(e) {
		e.preventDefault();
		
		$('.yes-button').fadeTo(200,0.0);
		setTimeout(function() {
			$('.yes-button').addClass('hidden');
			$('.music-expand').removeClass('hidden');
			$('.music-expand').animate({
				height: 194
			},400);
		},300);

		setTimeout(function() {
			$('.music-expand-content').removeClass('hidden');
			$('.music-expand-content').animate({
				opacity: 1
			},400);
		}, 700);

	});

    $('#view-screenshot').click(function(e) {
    	e.preventDefault();
    	$('.modal').removeClass('hidden');
    	$('body').css('overflow','hidden');

    });

    $('.close-button').click(function(e) {
    	e.preventDefault();
    	$('.modal').addClass('hidden');
    	$('body').css('overflow','auto');
    });

    $('.modal').click(function(e) {
    	e.preventDefault();

    	if(e.target.className !== 'modal-img' && e.target.className !== 'modal-content') {
    		$('.modal').addClass('hidden');
    		$('body').css('overflow','auto');
    	} 
    })
});








