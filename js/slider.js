const swiper = new Swiper('.swiper-food-on', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 'auto',
})

const swiperBrands = new Swiper('.swiper-brands', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 'auto',
})

const swiperContents = new Swiper('.swiper-contents', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 'auto',
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