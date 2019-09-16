// スライダー
var swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    fade: {
        crossFade: true
      }
  });

// ドロワーメニュー
$(document).ready(function() {
  $('.drawer').drawer();
});

// ドロワーメニュー展開時、ヘッダー非表示
function changeDisplay(){
  var str = document.getElementById("target");
  if(str.style.display == "none"){
    str.style.display = "block";
  }else{
    str.style.display = "none";
  }
}

// スムーススクロール
$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
  });
});

// アニメーション
new WOW().init();