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
const cartDetail = document.querySelector('.cart_detail');
const cartEl = document.querySelector('#cart_btn');
const cartCloseBtn = document.querySelector('.utill>.close_btn');
const mobileBtn = document.querySelector('.menu_btn');
const mobileMenuEl = document.querySelector('.mobile_menu');
backBG.addEventListener('click',function(e){
    if(e.target !=cartDetail){
        backBG.style.display = 'none';
    }
})

cartEl.addEventListener('click',function(e){
    e.preventDefault();
    backBG.style.display = 'block';
})

// cartCloseBtn.addEventListener('click',function(){
//     console.log('aa')
//     backBG.style.display = 'none';
// })

// mobileBtn.addEventListener('click',function(e){
//     e.preventDefault();
//     mobileMenuEl.style.display='block';
// })