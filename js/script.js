$(function(){
	$(".nav-button").click(function () {
		$(".nav-button,.menu").toggleClass("open");
	});    
})
$(function(){
	
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
    ua = navigator.userAgent,
 
    gestureStart = function () {
        viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    },
 
    scaleFix = function () {
      if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
        viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
        document.addEventListener("gesturestart", gestureStart, false);
      }
    };
scaleFix();
});
$(window).scroll(function () {
	if (jQuery(this).scrollTop() > 111) {
		jQuery('.scroll_head').addClass('scrolled');
	} else {
		jQuery('.scroll_head').removeClass('scrolled');
	}
});
