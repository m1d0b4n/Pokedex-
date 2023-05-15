
const mobileMenu = document.querySelector('.mobile-menu-popup');
const mobileMenuOpenButton = document.querySelector('#nav-bar-mobile-button-open');
const mobileMenuCloseButton = document.querySelector('.mobile-menu-popup-close-button');
const main = document.querySelector('.mainContainer');
const footer = document.querySelector('.footer');

console.log(main);


mobileMenuOpenButton.addEventListener('click', () => {
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = '';
        mobileMenuOpenButton.classList.toggle('.nav-bar-mobile-button-open-click');
    } else {
        mobileMenu.style.display = 'flex'
        mobileMenuOpenButton.classList.toggle('.nav-bar-mobile-button-open-click');
    }
});

mobileMenuCloseButton.addEventListener('click', () => {
    mobileMenu.style.display = '';
});
