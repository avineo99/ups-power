$(document).ready(function () { 
    $(".toggle").click(function () {
      $("body").addClass("menuToggle");
    });
    $(".close, .menuOverlay").click(function () {
      $("body").removeClass("menuToggle");
    });
  
  });

  $('.testimonial-wrap').slick({
    dots: false,
    arrows: true,
    infinite: true,
  });



  AOS.init({
    duration: 1200,
    once: true
  });