const swiper = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 4,
  // slidesOffsetBefore: 80,

  // width: 752,
  spaceBetween: 16,
})

const swiper3 = new Swiper('.swiper3', {
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 6,
  slidesOffsetBefore: 80,

  // width: 752,
  spaceBetween: 16,
  autoHeight: true,
})