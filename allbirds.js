
console.log('되고있나ㅁ??')

let swiper = new Swiper(".mySwiper", {
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
            spaceBetween: 0,
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        990: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }
  });


