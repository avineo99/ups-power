$(document).on('click', '.toggle', function () {
  $("body").addClass("menuToggle");
});
$(document).on('click', '.close, .menuOverlay', function () {
  $("body").removeClass("menuToggle");
});

  $('.testimonial-wrap').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });



  const targetElement = document.querySelector('body');

  const scrollThreshold = 100;
  
  function toggleClassOnScroll() {
    if (window.scrollY > scrollThreshold) {
      targetElement.classList.add('scrolled');
    } else {
      targetElement.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', toggleClassOnScroll);

  