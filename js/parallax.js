$(document).ready(function() {

	redrawDotNav();

	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });

	/* Next/prev and primary nav btn click handlers */
	$('a.home,.logo_small').click(function(){
		$(this).parents('.menu').removeClass('open').prev().removeClass('open');
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.about,.down_btn').click(function(){
		$(this).parents('.menu').removeClass('open').prev().removeClass('open');
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.work').click(function(){
		$(this).parents('.menu').removeClass('open').prev().removeClass('open');
    	$('html, body').animate({
    		scrollTop:$('#work').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.capabilities').click(function(){
		$(this).parents('.menu').removeClass('open').prev().removeClass('open');
    	$('html, body').animate({
    		scrollTop:$('#capabilities').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.contact,h6 a.contact').click(function(){
		$(this).parents('.menu').removeClass('open').prev().removeClass('open');
    	$('html, body').animate({
    		scrollTop:$('#contact').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });


});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){


	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#about').offset().top - 1;
	var section3Top =  $('#work').offset().top - 1;
	var section4Top =  $('#capabilities').offset().top - 1;
	var section5Top =  $('#contact').offset().top - 1;

	$('ul.menu a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('ul.menu a.home').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('ul.menu a.about').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('ul.menu a.work').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('ul.menu a.capabilities').addClass('active');
	} else if ($(document).scrollTop() >= section5Top){
		$('ul.menu a.contact').addClass('active');
	}
}
