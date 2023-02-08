'use strict';

const metaNav = document.querySelectorAll('.meta-nav');
const metaMenu = document.querySelector('#meta-menu'); 


metaNav.forEach(e => {
    e.addEventListener('click', () => {
        if (!metaMenu.classList.contains('hide')) {
            metaMenu.classList.add('hide');
        } else {
            metaMenu.classList.remove('hide');
        }
    });
});

const mainNav = document.querySelectorAll('.main-nav');
const mainMenu = document.querySelector('#nav');

mainNav.forEach(e => {
    e.addEventListener('click', () => {

        if (!mainMenu.classList.contains('hide')) {
            mainMenu.classList.add('hide');
        } else {
            mainMenu.classList.remove('hide');
        }
    });
});

