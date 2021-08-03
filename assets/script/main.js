const menu = document.getElementById('menu');
const toggle = document.getElementById('toggle');
const overlay = document.querySelector('.menu-overlay');
const menuContent = document.querySelector('.menu-content');

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
})