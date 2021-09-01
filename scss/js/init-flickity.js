// var carousel = document.querySelector('.carousel-slider');
// var flkty = new Flickity(carousel, {
//     imagesLoaded: true,
//     percentPosition: false,
//     prevNextButtons: false,
//     pageDots: false,
// });
// var imgs = carousel.querySelectorAll('.carousel-cell .img');
// var docStyle = document.documentElement.style;
// var transformProp = typeof docStyle.transform == 'string' ?
//     'transform' : 'WebkitTransform';
// flkty.on('scroll', function () {
//     flkty.slides.forEach(function (slide, i) {
//         var img = imgs[i];
//         var x = (slide.target + flkty.x) * -1 / 3;
//         img.style[transformProp] = 'translateX(' + x + 'px)';
//     });
// });
// $(window).load(function() {
//     if ($('.home-slider').length) {
//         $('.home-slider').flickity({
//             contain: true,
//             cellAlign: 'left',
//             groupCells: '100%',
//             pageDots: true,
//             autoPlay: 4000,
//             pauseAutoPlayOnHover: false,
//             wrapAround: true,
//         });
//     }
// });

