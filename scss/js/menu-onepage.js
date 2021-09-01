// Menu
$('.btn-menu-slide, .btn-menu').on('click', function(event) {
    event.preventDefault();
    $('#navigate').toggleClass('active');
    $('.bg-overlay').fadeToggle(200);
    $('html, body').toggleClass('overflow-hidden');
});
$('.close-menu').click(function(){
    $('#navigate, .form-search').removeClass('active');
    $('.bg-overlay').fadeOut(200);
    $('html, body').removeClass('overflow-hidden');
});
//
var sectionIds = $('.scrollspy-link');
$(window).scroll(function() {
    sectionIds.each(function() {
        var ths = $(this);
        var container = $(this).attr('href');
        $(container).each(function(){
            var containerOffset = $(this).offset().top;
            var containerHeight = $(this).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();

            if (scrollPosition < containerBottom && scrollPosition > containerOffset - 56) {
                sectionIds.removeClass('active');
                ths.addClass('active');
            } else {
                ths.removeClass('active');
            }
        });
    });
});
sectionIds.click(function(){
    $('.scrollspy-link').removeClass('active');
    $(this).addClass('active');
    $('.close-menu').trigger('click');
});