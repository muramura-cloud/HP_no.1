$(function() {
  //滑らかなスクロール
  $('a[href^="#"]:not([href="#"])'+'a:not(".nav-link")').click(function() {
    var target=$(this).attr("href");
    var targetHeight=$(target).offset().top;
    var speed=500;
    $("html,body").animate({scrollTop:targetHeight},speed);
    return false;
  });
  //headerのリサイズ
  $(window).scroll(function() {
    if($(window).scrollTop()>94) {
      $("#nav").addClass("fontSmall");
    }else {
      $("#nav").removeClass("fontSmall");
    }
  });
  //自動ズームスライドショー
  var count=$("#slide li").length;
  var current=1;
  var next=2;
  var interval=6000;
  var duration=1000;
  var zoomSpeed=6000;
  var timer;
  $("#slide li:not(:first-child)").hide();
  timer=setInterval(slideTimer,interval);
  function slideTimer() {
    $("#slide li:nth-child("+current+")").fadeOut(duration);
    $("#slide li:nth-child("+next+") img").removeClass('zoom');
    $("#slide li:nth-child("+next+")").fadeIn(duration);
    $("#slide li:nth-child("+next+") img").addClass('zoom');
    current=next;
    next=++next;
    if(next>count) {
      next=1;
    }
  }
  //ページトップボタン
  $("#page-top1").click(function() {
    $("body,html").animate({scrollTop:0},500);
    return false;
  });
  $("#top_scroll").hide();
  $(window).scroll(function() {
    if($(this).scrollTop()>=100) {
      $("#top_scroll").fadeIn("slow");
    }else {
      $("#top_scroll").fadeOut("slow");
    }
  });
  //contact-entranceニョキッとボタン
  $("#contact-entrance").hide();
  $(window).scroll(function() {
    if ($(window).width() > 768) {
      if($(this).scrollTop()>=100) {
        $("#contact-entrance").fadeIn("slow");
      }else {
        $("#contact-entrance").fadeOut("slow");
      }
    }else {
      $("#contact-entrance").hide();
    }
  });
  //回転heading
  $(window).scroll(function() {
    for(var i=1;i<=5;i++) {
      var sectionHeihgt=$("section:nth-child("+i+")").offset().top;
      var name=$("section:nth-child("+i+")").attr("id");
      var scrollHeihgt=$(window).scrollTop();
      if(sectionHeihgt<scrollHeihgt+300) {
        $("section:nth-child("+i+") ."+name+"-heading-box").removeClass(name+"-heading-box");
        $("section:nth-child("+i+") .rotate-heading").addClass(name+"-rotation");
      }
    }
  });
  //フィルタリング
  $(".category-link").click(function() {
    var categoryTarget=$(this).attr("value");
    $("#news-contents-wrapper").children().each(function() {
      $(this).animate({"opacity":0},300,function() {
        $(this).hide();
        if($(this).hasClass(categoryTarget)||categoryTarget=="all") {
          $(this).show();
          $(this).animate({"opacity":1},300);
        }
      });
    });
  });
});
