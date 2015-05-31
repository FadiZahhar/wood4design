$(document).ready(function() {

    // This file will be kept relatively well commented, both for my reference
    // and in case anyone will find bits of it useful.

    function _isMobile(){
        // if we want a more complete list use this: http://detectmobilebrowsers.com/
        // str.test() is more efficent than str.match()
        // remember str.test is case sensitive
        var isMobile = (/iphone|ipod|android|ie|blackberry|fennec/).test
             (navigator.userAgent.toLowerCase());
        return isMobile;
    }
    // a shameful little scorllbar-width function
    function scrollbarWidth() {
        var wide_scroll_html = '<div id="wide_scroll_div_one" style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div id="wide_scroll_div_two" style="height:100px;width:100%"></div></div>';
        $("body").append(wide_scroll_html);
        var scroll_w1 = $("#wide_scroll_div_one").width();
        var scroll_w2 = $("#wide_scroll_div_two").innerWidth();
        $("#wide_scroll_div_one").remove();
        return scroll_w1 - scroll_w2;
    }

    // function to set the size of wallpaper thumbs (and fonts) depending on screen witdth.
    var wWidth = $('.container-fill').width() - scrollbarWidth();
    // console.log(scrollbarWidth()); - it actually works - glad javascript cant judge me.
    var percentSize = (100/3);
    // var fontSizeMultiplier = 1;
    var $matchedElts = $('.photo_wrapper');

    function setSize () {
        var eltWidth = wWidth * percentSize / 100;

        $matchedElts.each(function() {
            // set correct width and height for each image container
            $(this).css({
                'height': eltWidth + "px",
                'width': eltWidth + "px"
            });
            if (!_isMobile()) {
                // fancy repositioning script starts here. :)
                //
                // find center of each panel - will only work for square things.
                var centerX = (eltWidth/2);
                var centerY = (eltWidth/2);
                $(this).on('mousemove', function (e) {
                    // relative mouse position from top left corner of each panel
                    var mouseX = e.pageX - $(this).offset().left;
                    var mouseY = e.pageY - $(this).offset().top;
                    // absolute mouse distance from center -> between 0 and 1
                    var mouseDistX = (mouseX / centerX) * 100 - 100;
                    var mouseDistY = (mouseY / centerY) * 100 - 100;
                    // after all's defined do the actual position.
                    $(this).find('img').css({
                        // negative(absolute_distance_from_center/ (100/15 = makes
                        // it 15% = brings it down to 1:1 scale with positions))
                        // finally account for initial offset (15%) and add a unit.
                        'left': -(mouseDistX/6.64) - 15 + "%",
                        'top':  -(mouseDistY/6.64) - 15 + "%"
                    });
                });
            }

        });
    }

    // primitive javascript hover thingy
    if (_isMobile()) {
        $('.hover').on('mouseenter', function(event) {
            $(this).children('.photo_content').show();
        });
        $('.hover').on('mouseleave', function(event) {
            $(this).children('.photo_content').hide();
        });
        // $('.hover:not(.tapped)').on('touchenter touchend', function(event) {
        //     $(this).children('section').show();
        //     $(this).addClass('tapped');
        // });
        // $('.hover.tapped').on('touchenter touchend', function(event) {
        //     $(this).removeClass('tapped');
        //     $(this).children('section').hide();
        //     // disable the like animation - otherwise would be
        //     // retriggered on each hover
        //     $(this).find('.animate').removeClass('animate');
        // });
    } else {
        $('.hover').on('mouseenter', function(event) {
            $(this).children('.photo_content').fadeIn(150);
        });
        $('.hover').on('mouseleave', function(event) {
            $(this).children('.photo_content').fadeOut(150);
        });
    }




    // widthTable (%) -> 20, 25, 100/3, 50, 100
    function setGrid () {
        if (wWidth < 481) {
            percentSize = 100;
            // fontSizeMultiplier = 2;
        } else if(wWidth > 480 && wWidth < 801){
            percentSize = 50;
            // fontSizeMultiplier = 1.5;
        } else if(wWidth > 800 && wWidth < 1281){
            percentSize = (100/3);
            // fontSizeMultiplier = 1.2;
        } else if(wWidth > 1280 && wWidth < 1500){
            percentSize = 25;
            // fontSizeMultiplier = 1;
        } else if(wWidth > 1499){
            percentSize = 20;
            // fontSizeMultiplier = 0.75;
        }
    }
    // fire off the initial resize functions
	wWidth = $('.container-fill').width();
    setGrid();
    setSize();

    // recalculate width (without the disgusting scrollbar fix - not needed!)
    // and fire resize functions
    $(window).resize(function () {
        wWidth = $('.container-fill').width();
        setGrid();
        setSize();
    });



});