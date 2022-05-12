const burgerMenu = document.querySelector('.menu__burger');
const navMenu = document.querySelector('.menu__nav');
const menuButtons = document.querySelector('.header__menu__buttons');
if (burgerMenu) {
    burgerMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_luck')
        burgerMenu.classList.toggle('_active');
        navMenu.classList.toggle('_active');
        menuButtons.classList.toggle('_active');
    });
}