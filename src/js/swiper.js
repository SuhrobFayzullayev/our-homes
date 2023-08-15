import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";
var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    850: {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 50,
    },
  },
});

const mySwiper = new Swiper(".swiper-cards", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  breakpoints: {
    420: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});
