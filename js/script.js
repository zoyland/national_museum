// 메인 컨텐츠 슬라이드 
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    touchRatio: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

// 슬라이드 버튼 호버 효과
var prev = $('.prev'),
    prev_hover = $('.prev2'),
    next = $('.next'),
    next_hover = $('.next2');

prev.on('mouseenter',function(){
  prev.css('display','none');
  prev_hover.css('display','block');
});
prev.on('mouseleave',function(){
  prev.css('display','block');
  prev_hover.css('display','none');
});

next.on('mouseenter',function(){
  next.css('display','none');
  next_hover.css('display','block');
});
next.on('mouseleave',function(){
  next.css('display','block');
  next_hover.css('display','none');
});

// footer button 
var btn = $('#footer .ft_2 button');
var bt_up = $('#footer .ft_2 .bt_up')

btn.on("click", function(){
  bt_up.slideToggle("slow");
});

// 슬라이드 버튼 클릭시, 왼쪽 메뉴 활성화
var $click = $('.left ul li a').on('click',function(){
  var idx = $click.index(this);
  var $bullet = $('.swiper-pagination-bullet').eq(idx);
  $bullet.click();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
});

$('.swiper-button').on('click',function(){
  var slideIdx = $('.swiper-slide-active').attr('data-swiper-slide-index');
  
  $('.left ul li').eq(slideIdx).addClass('active');
  $('.left ul li').eq(slideIdx).siblings().removeClass('active');
});

$('.swiper-button').on('click',function(){
  var slideIdx = $('.swiper-slide-active').attr('data-swiper-slide-index');
  
  $('.left ul li').eq(slideIdx).addClass('active');
  $('.left ul li').eq(slideIdx).siblings().removeClass('active');
});




$('.right').click(function(){
  var has = $('.swiper-pagination-bullet-active').attr('aria-label');
  var idx = Number(has.substr(12,1))-1;

  $('.left ul li').eq(idx).addClass('active');
  $('.left ul li').eq(idx).siblings().removeClass('active');
  console.log(has);
  console.log(idx);


});