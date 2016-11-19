$(document).ready(function() {

  window.goToAnchor = function(anchor) {
    // var loc = document.location.toString().split('#')[0];
    // document.location = loc + anchor;
    //$(anchor)[0].scrollIntoView({block: "start", behavior: "smooth"});
    $('html, body').animate({
        scrollTop: $(anchor).offset().top + 'px'
    }, 'slow');
    return false;
  }

  window.goTo = function(link) {
    document.location = link;
    return false;
  }

  new WOW().init();

  //this code is for animation nav
  jQuery(window).scroll(function() {
    var windowScrollPosTop = jQuery(window).scrollTop();

    if(windowScrollPosTop >= 150) {
      jQuery(".top-header").css({"background": "#18171D",});
      jQuery(".top-header img.logo").css({"margin-top": "-30px", "margin-bottom": "15px"});
      jQuery(".nav-bar").css({"margin-top": "6px",});
    }
    else{
      jQuery(".top-header").css({"background": "transparent",});
       jQuery(".top-header img.logo").css({"margin-top": "-30px", "margin-bottom": "25px"});
       jQuery(".nav-bar").css({"margin-top": "28px"});
      
    }
  });

  $(".alert-fixed").slideUp(2000);
});
