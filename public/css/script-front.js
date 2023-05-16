
const mobileMenu = document.querySelector('.mobile-menu-popup');
const mobileMenuOpenButton = document.querySelector('#nav-bar-mobile-button-open');
const mobileMenuCloseButton = document.querySelector('.mobile-menu-popup-close-button');
const main = document.querySelector('.mainContainer') || document.querySelector('.pokecard-container');
const footer = document.querySelector('.footer');
const typesImg = document.querySelectorAll('.pokecard-types-img');
const infoBubble = document.querySelector('.tooltip-text');


// OPEN MENU BUTTON
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

// CLOSE MENU BUTTON
mobileMenuCloseButton.addEventListener('click', () => {
    mobileMenu.style.display = '';
    main.style.display = '';
    footer.style.display = '';
});

// TYPES POPUP BUTTON
let currentTypeOpen = '';

for (img of typesImg) {
    img.addEventListener('click', (event) => {
        const pokeTypeName = event.target.attributes[2].value;

        if (infoBubble.attributes[1].value === 'close' && pokeTypeName != currentTypeOpen) {
            infoBubble.attributes[1].value = 'open';
            currentTypeOpen = pokeTypeName;
            infoBubble.style.display = 'block';
            infoBubble.textContent = pokeTypeName;

        } else if (infoBubble.attributes[1].value === 'open' && pokeTypeName != currentTypeOpen) {
            infoBubble.attributes[1].value = 'open'
            currentTypeOpen = pokeTypeName;
            infoBubble.style.display = 'block';
            infoBubble.textContent = pokeTypeName;
        } else if (infoBubble.attributes[1].value === 'open' && pokeTypeName === currentTypeOpen) {
            infoBubble.attributes[1].value = 'close'
            currentTypeOpen = '';
            infoBubble.style.display = 'none';
        }
    });
};
