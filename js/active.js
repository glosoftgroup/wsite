/*
***************************************************************
***************************************************************

Author         : GlosoftGroup Limited
Author URI     : https://www.glosoftgroup.com
File           : Active.js

***************************************************************
***************************************************************/

(function ($) {
    "use strict";
    var allFunctions = {
        $window: $(window),
        customFuctions: {
            init: function () {
                allFunctions.customFuctions.sectionScroll();
            },
            sectionScroll: function () {
                var scroll = $(".section-scroll"),
                    scrollTop = $(".scrollTop");

                scroll.on("click", function (e) {
                    var $anchor = $(this),
                        offsetTop = 45;
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top - offsetTop + "px"
                    }, 1200, 'easeInOutExpo');
                    e.preventDefault();

                });
                $(window).on('scroll', function () {
                    var scrolltoTop = $(this).scrollTop();
                    if ( scrolltoTop > 300 ) {
                        $('.scrollTop').fadeIn('slow').addClass('scroll-active');
                    }else {
                        $('.scrollTop').fadeOut('slow').removeClass('scroll-active');
                    }
                });

                scrollTop.on('click', function(e){
                    $('html, body').animate({
                        scrollTop : 0
                    }, 1000, 'easeInOutExpo');
                    e.preventDefault();
                });


                var body = $('body');
                body.scrollspy({
                    target: '.navbar-collapse',
                    offset: 95
                });
                $(document).on('click', '.navbar-collapse.in', function (e) {
                    if ($(e.target).is('a') && $(e.target).attr('class') !== 'dropdown-toggle') {
                        $(this).collapse('hide');
                    }
                });
            }
        }
    }

	$(document).ready(function () {
        allFunctions.customFuctions.init();
    });

})(jQuery);   
