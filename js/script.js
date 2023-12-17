$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: ["", " "],

    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 3,
      },
      600: {
        items: 4,
      },
      700: {
        items: 5,
      },
      860: {
        items: 6,
      },
      991: {
        items: 7,
      },
      1100: {
        items: 7,
      },
    },
  });
});

  $( function() {
    $( "#accordion" ).accordion();
  } );
