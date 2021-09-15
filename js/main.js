jQuery(document).ready(function ($) {

  if (window.innerWidth >= 960) {
    $(".hero").css({
      height: window.innerHeight,
    });
    $(".delivery-img").css({
      height: 0.18 * window.innerHeight,
    });
  }
  
});

jQuery(document).ready(function ($) {

    $( ".menu" ).click(function() {
        if($('.nav__list').css('display') == "none"){
            $(".nav__list").css({
                display: "flex"
            })
        }
        else {
            $(".nav__list").css({
                display: "none"
            })
        }
    });
    
  });
   
