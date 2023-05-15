
const mobileMenu = document.querySelector('.mobile-menu-popup');
const mobileMenuOpenButton = document.querySelector('#nav-bar-mobile-button-open');
const mobileMenuCloseButton = document.querySelector('.mobile-menu-popup-close-button');
const main = document.querySelector('.mainContainer');
const footer = document.querySelector('.footer');

console.log(main);


mobileMenuOpenButton.addEventListener('click', function () {
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = '';
    } else {
        mobileMenu.style.display = 'flex'
    }
});

mobileMenuCloseButton.addEventListener('click', function () {
    mobileMenu.style.display = '';
});