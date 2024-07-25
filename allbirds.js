//스와이퍼
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

const backBG = document.querySelector('.back_dark');
const cartEl = document.querySelector('#cart_btn');
const closeBtn = document.querySelector('.close_btn');



cartEl.addEventListener('click',function(e){
    e.preventDefault();
    console.log('ㅁㄴㅇ')
    backBG.style.display = 'block';
})
closeBtn.addEventListener('click',function(){
    backBG.style.display = 'none';
})