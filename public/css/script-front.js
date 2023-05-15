
const mobileMenu = document.querySelector('.mobile-menu-popup');
const mobileMenuOpenButton = document.querySelector('#nav-bar-mobile-button-open');
const mobileMenuCloseButton = document.querySelector('.mobile-menu-popup-close-button');
const main = document.querySelector('.mainContainer');
const footer = document.querySelector('.footer');



mobileMenuOpenButton.addEventListener('click', () => {
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = '';
        main.style.display = '';
        footer.style.display = '';
    } else {
        mobileMenu.style.display = 'flex';
        main.style.display = 'none';
        footer.style.display = 'none';
    }
});

mobileMenuCloseButton.addEventListener('click', () => {
    mobileMenu.style.display = '';
    main.style.display = '';
    footer.style.display = '';
});

