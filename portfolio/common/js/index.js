// ハンバーガーメニュー
$(function () {
$("#hamburger").on("click", function () {
    $("body").toggleClass("open");
        });

$("#header_nav a").on("click",function () {
    $("body").removeClass("open");
    });
});

// ローディング
// $(function () {
// ロード完了時に5秒でフェードアウトする
    // $("#wrap").fadeOut(5000);
// });
// 
// スクロールフェードアップ
$(function () {
    function fadeInOnScroll() {
        $('.fade-up').each(function () {
            var elemTop = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            // 判定を調整（スクロール範囲に100px余裕）
            if (scroll > elemTop - windowHeight + 300) {
                $(this).addClass('in-view');
            } else {
                $(this).removeClass('in-view');
            }
        });
        }
    $(window).on('scroll load resize', function () {
        fadeInOnScroll();
    });
});
// h2::after の線をスクロールするたびに流す
$(function(){
    $('h2').on('inview',function(event,isInView){
        if(isInView){
            $(this).addClass('in-view');
        }else{
            $(this).removeClass('in-view');
        }
    })
})

// topへ戻るボタン
document.addEventListener('DOMContentLoaded', function() {
  const pageTopBtn = document.getElementById('pageTop');
  const header = document.getElementById('kv');
const headerHeight = header.offsetHeight;

  function togglePageTopBtn() {
    if (window.scrollY > headerHeight) {
      pageTopBtn.classList.add('show');
    } else {
      pageTopBtn.classList.remove('show');
    }
  }
  window.addEventListener('scroll', togglePageTopBtn);

  // ▶ トップへ戻るボタンが押されたらハンバーガーメニューを閉じる
  pageTopBtn.addEventListener('click', function () {
    document.body.classList.remove('open');
  });
});


