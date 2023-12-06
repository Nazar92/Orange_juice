let burgerMenu = document.getElementById('burger-menu');
let overlay = document.getElementById('mobile-menu');
burgerMenu.addEventListener('click',function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});
overlay.addEventListener('click',function(){
    burgerMenu.classList.remove("close");
    overlay.classList.remove("overlay");
});


const swiper = new Swiper('.testimonial-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.testimonial-swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const benefitsSwiper = new Swiper('.benefits-swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    direction: 'horizontal',
    loop: true,
});