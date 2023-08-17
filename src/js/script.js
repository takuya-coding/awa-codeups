
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


// main-viewのスライダー
new Splide( '.splide-main-view', {
    type: "fade",
    autoplay: true,
    interval: 5000,
    speed: 5000,
    rewind: true,
}).mount();


// 背景色の後に画像が表示されるエフェクト（informationセクション）

// 要素の取得とスピードの設定
let box = $('.information__img'),
speed = 700;

// .information__imgの付いた要素に対して下記の処理を行う
box.each(function() {
    $(this).append('<div class="color"></div>')
    let color = $(this).find($('.color')),
    image = $(this).find('img');
    let counter = 0;

    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
            $(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});


// 背景色の後に画像が表示されるエフェクト（voiceセクション）

// 要素の取得とスピードの設定
let box2 = $('.post__img'),
speed2 = 700;

// .post__imgの付いた要素に対して下記の処理を行う
box2.each(function() {
    $(this).append('<div class="color"></div>')
    let color2 = $(this).find($('.color')),
    image2 = $(this).find('img');
    let counter2 = 0;

    image2.css('opacity','0');
    color2.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color2.on('inview', function(){
        if(counter2 == 0){
            $(this).delay(200).animate({'width':'100%'},speed2,function(){
                   image2.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed2);
                })
            counter2 = 1;
          }
     });
});


// 背景色の後に画像が表示されるエフェクト（priceセクション）

// 要素の取得とスピードの設定
let box3 = $('.price__img'),
speed3 = 700;

// .price__imgの付いた要素に対して下記の処理を行う
box3.each(function() {
    $(this).append('<div class="color"></div>')
    let color3 = $(this).find($('.color')),
    image3 = $(this).find('img');
    let counter3 = 0;

    image3.css('opacity','0');
    color3.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color3.on('inview', function(){
        if(counter3 == 0){
            $(this).delay(200).animate({'width':'100%'},speed3,function(){
                   image3.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed3);
                })
            counter3 = 1;
          }
     });
});



});
