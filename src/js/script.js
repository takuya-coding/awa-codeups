
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
    //デフォルトの矢印とページネーションを削除
    arrows: false,
    pagination: false,
}).mount();



// campaignセクションのスライダー
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

const mySwiper = new Swiper('.panels .swiper', {
    loop: true,
    // loopAdditionalSlides: 1,
    autoplay: true,

    // slidesPerView: 'auto',
    slidesPerView: 1.26,
    spaceBetween: 24,
    centerMode: true,
    grabCursor: true,
    // pagination: {
    //   el: '.card02 .swiper-pagination',
    //   clickable: true,
    // },
    navigation: {
      nextEl: '.panels .swiper-button-next',
      prevEl: '.panels .swiper-button-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
        slidesPerView: 2.5,
      },
      1440: {
        spaceBetween: 40,
        slidesPerView: 3.5,
      }
    },
  });


// campaignセクションのスライダー
// const target = '.campaign .splide-campaign';
// const options = {
//   mediaQuery: 'min',
//   perMove: 1, //1度に何枚動かすか
//   fixedWidth: '17.5rem',
//   gap: '1.5rem',
//   updateOnMove: true,
//   //追加
//   type: "loop",
//   autoplay: true,
//   interval: 4000,
//   speed: 2000,
//   //デフォルトの矢印とページネーションを削除
//   //arrows: false,
//   //pagination: false,

//   breakpoints: {
//     768: {
//     fixedWidth: '20.875rem',
//     gap: '2.5rem',
//     //デフォルトの矢印とページネーションを削除
//     //arrows: false,
//     //pagination: false,
//     }
//   },
// }
// const mySplide = new Splide(target, options);

// mySplide.mount();




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

// footer手前で止まるトップに戻るボタン（レスポンシブ対応込み）
// $(".to-top").hide();
// $(window).on("scroll", function () {
//   const scrollHeight = $(document).height(), //ドキュメントの高さ
//         scrollPosition = $(window).height() + $(window).scrollTop(), //現在の位置
//         footHeight = $("footer").innerHeight(); //footerの高さ
//   if (scrollHeight - scrollPosition <= footHeight) {
//     if (window.innerWidth <= 767) {
//       $(".to-top").css({ position: "absolute", bottom: footHeight + 15 });
//     } else {
//       $(".to-top").css({ position: "absolute", bottom: footHeight + 20 });
//     }
//   } else {
//     if (window.innerWidth <= 767) {
//       $(".to-top").css({ position: "fixed", bottom: "15px" });
//     } else {
//       $(".to-top").css({ position: "fixed", bottom: "20px" });
//     }
//   }
// });

// $(window).on("resize", function () {
//   if (window.innerWidth <= 767) {
//     $(".to-top").css({ bottom: "15px" });
//   } else {
//     $(".to-top").css({ bottom: "20px" });
//   }
// });


});
