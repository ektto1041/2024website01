$('.floating-btn').click(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

console.log($('.main-video').offset().top);

$(document).scroll(() => {
  const floatingButton = $('.floating-btn-wrapper');
  const mainVideo = $('.main-video');
  const subVideo = $('.sub-video');
  const scrollY = window.scrollY;

  // Floating Button 스크롤 시 생성
  if(scrollY > 10) {
    floatingButton.addClass('floating-btn-show');
  } else {
    floatingButton.removeClass('floating-btn-show');
  }

  // Youtube 영상 날아오는 효과
  if(scrollY >= mainVideo.offset().top - window.innerHeight) {
    mainVideo.addClass('show');
  } else {
    mainVideo.removeClass('show');
  }

  if(scrollY >= subVideo.offset().top - window.innerHeight) {
    subVideo.addClass('show');
  } else {
    subVideo.removeClass('show');
  }
}) 