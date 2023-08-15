
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

// ハンバーガーメニュー
$('.js-hamburger').on('click', function() {
    if($('.js-hamburger').hasClass('is-active')) {
        $('.js-drawer').removeClass('is-active');
        $(this).removeClass('is-active');
    } else {
        $('.js-drawer').addClass('is-active');
        $(this).addClass('is-active');
    }
});

});
