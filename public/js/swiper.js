const swiper = new Swiper(".sliderBanner", {
 
  loop: true,
  allowTouchMove: true,
 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },
});
