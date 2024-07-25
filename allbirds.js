
    let swiper = new Swiper(".mySwiper", {
    
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            0:{
                slidesPerView: 1,
                spaceBetween: 10,
            },
            720: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            990: {
                slidesPerView: 3,
                spaceBetween: 50,
            }
        }
      });



