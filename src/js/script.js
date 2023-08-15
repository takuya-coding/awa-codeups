
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

// ドロワーメニューの背景orリンクをクリックした際にドロワーメニューを閉じる
$('.js-drawer').on('click', function() {
    $(this).removeClass('is-active');
    $('.js-hamburger').removeClass('is-active');
});

});
