$(document).ready(function() {

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(document).scroll(function(){


if ($(document).width() > 650) {



      if ($(document).scrollTop()>300) {
        $(".scrollup").fadeIn(500);
      } else {
        $(".scrollup").fadeOut(500);
      }

  }

else if ($(document).width()< 650) {

      if ($(document).scrollTop()>100) {
        $(".scrollup").fadeIn(500);
      } else {
        $(".scrollup").fadeOut(500);
      }

}

});

  $(".scrollup").click(function(){

    $("html,body").animate({scrollTop:0},600);
    return false;


  });


});