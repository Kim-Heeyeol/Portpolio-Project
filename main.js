'use strict'

// Show "arrow up" button when scrolling down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrow = document.querySelector('.arrow');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrow.classList.add('visible');
    } else {
        arrow.classList.remove('visible');
    }
});

arrow.addEventListener('click', () => {
    scrollIntoView('#home');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
};