// import './js/init-swiper.js';
import './js/init-flickity.js';
// import './js/typewriting.js';
// import './js/header.js';
// import './js/menu-onepage.js';
// import './js/footer-wave.js';
// import './js/sidebar-stick.js';
// import './js/cursor-effect.js';

// $(".menu, .thumb-res").bind("touchstart touchend", function () { });
// $('<div/>', { class: 'bg-overlay' }).appendTo('.header');

// $('.bg-overlay').on('click', function() {
//     $(this).fadeOut(150);
//     $('html, body').removeClass('overflow-hidden');
//     $('#navigate, .form-search').removeClass('active');
// });
// line - d-width
$('.d-width').each(function () {
    var dw = $(this).attr('width');
    var dh = $(this).attr('height');
    $(this).css({
        'width': dw,
        'height': dh,
    });
});
$(window).on('load', function() {
    $('.preloader').fadeOut(100);
    var wow = new WOW({
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       0,
    });
    wow.init();
});
