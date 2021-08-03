const menu = document.getElementById('menu');
const toggle = document.getElementById('toggle');
const overlay = document.querySelector('.menu-overlay');
const menuContent = document.querySelector('.menu-content');
const menuItem = document.querySelectorAll('.menu-item');

menuItem.forEach(i => i.addEventListener('click',()=>{
    menu.classList.remove('menu-show');
}))

toggle.addEventListener('click',()=>{
    menu.classList.add('menu-show');
});

overlay.addEventListener('click',()=>{
    menu.classList.remove('menu-show');
});

menuContent.addEventListener('click',(event)=>{
    event.stopPropagation();
})


// show language
const times = document.getElementById('times-language');
const language = document.getElementById('language');
const languageMenu = document.getElementById('language-menu');
const languageOverlay = document.querySelector('.language-overlay');
const languageBox = document.querySelector('.language-box');

language.addEventListener('click', ()=>{
    languageMenu.classList.add('language-show');
});

function removeLanguage(){
    languageMenu.classList.remove('language-show');
}
times.addEventListener('click', removeLanguage);
languageOverlay.addEventListener('click',removeLanguage);
languageBox.addEventListener('click',(event)=>{
    event.stopPropagation();
});


// back to top
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 100){
        toTop.classList.add('to-top-active');
    }else{
        toTop.classList.remove('to-top-active');
    }
})


// loading
$(window).on('load', function(event){
    $('.loading').delay(1000).fadeOut('fast');
});


const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });