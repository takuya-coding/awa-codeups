
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
const mySwiper = new Swiper('.js-panels .swiper', {
    loop: true,
    loopAdditionalSlides: 2, //複製するスライド数を指定（0だとループが滑らかに繋がらないことがあるため1以上がオススメ）
    spaceBetween: 24,
    slidesPerView: 1.26,
    speed: 1500, //スライド切り替えのアニメーションのスピード
    width: 360, //panel1枚の幅を固定
    autoplay: {
      delay: 3000, //次のスライドに切り替わるまでの時間
      disableOnInteraction: false, //ユーザーが操作したときに自動再生を止める（falseにしておくのがオススメ）
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
        slidesPerView: 3.5,
        // width: 1270,
        width: 1267,
      },
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



// トップに戻るボタン（基本の動き）
const topBtn = $('.js-to-top');
topBtn.hide();

// ボタンの表示設定
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    // 指定px以上のスクロールでボタンを表示
    topBtn.fadeIn();
  } else {
    // 画面が指定pxより上ならボタンを非表示
    topBtn.fadeOut();
  }
});

// ボタンをクリックしたらスクロールして上に戻る
topBtn.click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 300, 'swing');
  return false;
});

// トップに戻るボタンのアレンジ（footer手前で止まる）
topBtn.hide();
$(window).on("scroll", function () {
  const scrollHeight = $(document).height(), //ドキュメントの高さ
        scrollPosition = $(window).height() + $(window).scrollTop(), //現在の位置
        footHeight = $("footer").innerHeight(); //footerの高さ
  if (scrollHeight - scrollPosition <= footHeight) {
    if (window.innerWidth <= 767) {
      topBtn.css({ position: "absolute", bottom: footHeight + 15 });
    } else {
      topBtn.css({ position: "absolute", bottom: footHeight + 20 });
    }
  } else {
    if (window.innerWidth <= 767) {
      topBtn.css({ position: "fixed", bottom: "15px" });
    } else {
      topBtn.css({ position: "fixed", bottom: "20px" });
    }
  }
});

$(window).on("resize", function () {
  if (window.innerWidth <= 767) {
    topBtn.css({ bottom: "15px" });
  } else {
    topBtn.css({ bottom: "20px" });
  }
});



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });


});
