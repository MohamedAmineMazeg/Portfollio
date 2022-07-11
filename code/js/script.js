$(document).ready(function () {
  $(".uikCnt").hover(function (){
    $('.uik').fadeToggle("1000")
  
  })
  $(".snakeCnt").hover(function (){
    $('.snake').fadeToggle("1000")
 
  })
  $(".nutriminceCnt").hover(function (){
    $('.nutrimince').fadeToggle("1000")

  })
  $(".symCnt").hover(function (){
    $('.sym').fadeToggle("1000")
   
  })
  $(".owl-carousel").owlCarousel({
    nav: true,
    loop: true,
    margin: 30,
 
  });

});
