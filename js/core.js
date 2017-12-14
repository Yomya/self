//   splash
// jQuery(window).load(function(){
//   jQuery('.bg-splash-work').delay(100).fadeOut(300);
//   jQuery('.bg-splash').delay(700).fadeOut(300);
//   jQuery('.spinner').delay(700).fadeOut(300);
//   $('body').removeClass('noscroll');
// });

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
         $(".index").hide( "slide", {direction: "down" }, 300 );
         $(".shallow-shadows").hide( "slide", {direction: "down" }, 300 );
        $(".index-x").fadeOut(200);
        $(".mobile-close").fadeOut(200);
    }
});
$(document).ready(function() {

// HOMEPAGE
  $(".it-was-always-me").hover(function(){
      $(".homepage-josh").fadeIn(200);
     //   $('body').addClass('invert');
     },function(){
      $(".homepage-josh").fadeOut(200);
   //   $('body').removeClass('invert');
  });

// index hidden menu
    $(".index-open-bar").click(function(){
            // $(".index").fadeIn(100);
              $(".index").show( "slide", {direction: "up" }, 300 );
              $(".index-x").fadeIn(400);
              $(".mobile-close").fadeIn(400);
             // $('section').addClass('blur');
      });
    // $(".it-was-always-me").click(function(){
    //           $(".shallow-shadows").show( "slide", {direction: "up" }, 300 );
    //           $(".index-x").fadeIn(400);
    //   });
    $(".it-was-always-me-2").click(function(){
            // $('body').addClass('noscroll');
              $(".shallow-shadows").show( "slide", {direction: "up" }, 300 );
              $(".index-x").fadeIn(400);
              $(".mobile-close").fadeIn(400);
             // $('section').addClass('blur');
      });

    // $(".index").click(function(){
    //     $(".index").fadeOut(200);
    // });
    $(".index-x").click(function(){
            // $(".index").hide( "slide", {direction: "down" }, 200);
             $(".index").hide( "slide", {direction: "down" }, 300 );
             $(".shallow-shadows").hide( "slide", {direction: "down" }, 300 );
            $(".index-x").fadeOut(200);
            $(".mobile-close").fadeOut(200);
            // $('section').removeclass('blur');
    });
    $(".mobile-close").click(function(){
            // $(".index").hide( "slide", {direction: "down" }, 200);
             $(".index").hide( "slide", {direction: "down" }, 300 );
             $(".shallow-shadows").hide( "slide", {direction: "down" }, 300 );
            $(".index-x").fadeOut(200);
            $(".mobile-close").fadeOut(200);
            // $('section').removeclass('blur');
    });
    $(".index-link").click(function(){
            $(".index").delay(900).hide( "slide", {direction: "down" }, 300 );
            $(".index-x").delay(900).fadeOut(200);
            $(".mobile-close").delay(900).fadeOut(200);
            // $('section').removeclass('blur');
    });

    $(window).scroll(function(){
        var start = 100, end = 800;
        var opacity = 1 - ($(window).scrollTop() - start) / (end - start);
        if (opacity > 1 ) opacity = 1;
        if (opacity < 0 ) opacity = 0;
        $(".invert-base").css("opacity", opacity);
        $(".gradienttop").css("opacity", opacity);
        $(".homepage-copy").css("opacity", opacity);
      });
    //old s

// ease the experience
// $('html, body').animate({
//     scrollTop: $("#about").offset().top
// }, 1000);
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 700);
        }
    });
 });

 $(document).ready(function(){

      //   var $status = $('.pagingInfo');
    // var $slickElement = $('.stake');

    // $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //     //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     $status.text(i + '/' + slick.slideCount);

    //     console.log(slick.$slider);
    // });

    // SLICK SLIDER
    $('.stake').slick({
      lazyLoad: 'ondemand',
      lazyLoadBuffer: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      // adaptiveHeight: true,
      // variableWidth: true,
      arrows: true,
      dots: true
    });


  });
