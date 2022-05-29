const swiper = new Swiper('.swiper', {
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 5000,

  },
  pagination: {
    el: '.swiper-bullets',
    type: 'bullets',
    clickable: true,
  },
});
