const menubars = document.querySelector('#menu-bars');
const sidenavbar = document.querySelector('.side-bar');
const overlay = document.querySelector('.body-overley');
const header = document.querySelector('.header');
// const searchBox = document.querySelector('#search_menu');
const topscroll = document.querySelector('#scroll');

// dark theme js script............. 
let icontheme = document.querySelector('#darktheme');
icontheme.onclick = () => {
  document.body.classList.toggle('theme');
  if (document.body.classList.contains('theme')) {
    icontheme.classList.remove('fa-moon');
    icontheme.classList.add('fa-sun');
  } else {
    icontheme.classList.remove('fa-sun');
    icontheme.classList.add('fa-moon');
  }
}


// search of for about page script..
$(document).on('click','#search_menu',function() {
  $('.search_about').toggleClass('active');
});




// mobile sidebar scripts .....
let sidemenu = document.querySelector('.side-navbar');
menubars.onclick = () => {
  menubars.classList.toggle('fa-times');
  if (sidemenu.classList.toggle('active')) {
    sidenavbar.classList.add('active');
    overlay.classList.add('active');
    cartmenu.classList.remove('active');
  } else {
    sidemenu.classList.remove('active');
    sidenavbar.classList.remove('active');
    overlay.classList.remove('active');
  }
}

// cart item sidebar scripts ........
let cartmenu = document.querySelector('.cart_sidebar');
document.querySelector('#cart_items').onclick = () => {
  menubars.classList.remove('fa-times');
  if (cartmenu.classList.toggle('active')) {
    sidenavbar.classList.add('active');
    overlay.classList.add('active');
    sidemenu.classList.remove('active');
  } else {
    cartmenu.classList.remove('active');
    sidenavbar.classList.remove('active');
    overlay.classList.remove('active');
  }
}

// mobile menu dropdown metis scripts......
$(document).ready(function () {
$('#mobile-menu-active').metisMenu();

});

// window scroll script......
let backtop = document.querySelector('.backtotop');
window.onscroll = () => {
  
  if (window.scrollY > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
  if (window.scrollY > 250) {
    backtop.classList.add('active');
  } else {
    backtop.classList.remove('active');
  }
}


// popup video scripts...
$(document).ready(function () {
$('.popup-video').magnificPopup({
  type: 'iframe',
  margin: 0,
});
});

// nav menu link active script.............
$(document).ready(function () {
  $('.nav_menu').on('click', '.nav-items', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});


// animation script ....

new WOW().init();


// preloader script

$(window).on('load',function (){
  $(".preloader").delay(1000).fadeOut('slow');
  $(".spinner").delay(1000).fadeOut("slow");
});

// slider js file ....

$(document).ready(function () {
  $(".slider").owlCarousel({
    nav: true,
    smartSpeed: 700,
    autoplayHoverPause: true,
    navText: ["<div class='fas fa-arrow-left'></div>", "<div class='fas fa-arrow-right'></div>"],
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 2
      },

      992: {
        items: 3
      },

      1000: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
});
// shop menu filrets scripts......
$(document).ready(function () {
$('.shop_menu button').categoryFilter();

$('.shop_menu').on('click', 'button', function () {
  $(this).addClass('active').siblings().removeClass('active');
});
});

// review  slider scripts ....

$(document).ready(function () {
  $(".review-slider").owlCarousel({
    items: 1,
    margin: 30,
    center: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    loop: true,
    stagePadding: 150,
    responsiveClass: true,
    autoplayTimeout: 5000,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      575: {
        items: 1,
        stagePadding: 100,
      },
      768: {
        items: 1,
        stagePadding: 10,
      },
      992: {
        items: 1,
        stagePadding: 50,
      },
      1250: {
        items: 1,
        stagePadding: 150,
      },
    },
  });
});





// var swiper = new Swiper(".home_slider", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 7500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   loop: true,
// });
