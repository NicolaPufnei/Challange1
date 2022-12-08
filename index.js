const menu_btn = document.querySelector('.hamburger');
const menu_options = document.querySelector('.mobile-nav');
const blurul = document.querySelector('.blur');

menu_btn.addEventListener('click' , () => {
        menu_btn.classList.toggle('is-active');
        menu_options.classList.toggle('is-active');
        blurul.classList.toggle('is-active');
    })