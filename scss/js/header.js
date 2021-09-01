// Header stick
$('<div class="anchor-header">&nbsp;</div>').insertBefore(".header");
// $('<div class="anchor-navigate d-none">&nbsp;</div>').insertBefore("#navigate");
function HeaderStick() {
    var anchorHeader    = $(".anchor-header");
    var header          = $('.header');
    // var anchorNavigate  = $('.anchor-navigate');
    if ($(window).scrollTop() > anchorHeader.offset().top) {
        header.addClass('stick');
        anchorHeader.height(header.innerHeight());
    } else {
        header.removeClass('stick');
        anchorHeader.height('');
    }
    // Navigate
    // if ($('#navigate').length && $(window).scrollTop() > anchorNavigate.offset().top) {
    //     $('#navigate').addClass('stick');
    //     anchorNavigate.height($('#navigate').innerHeight());
    // } else {
    //     $('#navigate').removeClass('stick');
    //     anchorNavigate.height('');
    // }
}
$(window).on("load scroll", function() {
    HeaderStick();
});