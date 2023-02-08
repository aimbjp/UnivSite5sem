const buttons = document.querySelectorAll('.type__img');
const buttonsDiv = document.querySelector('.buttons');
var ammount_lim;
var ammount_metal;
const counters = document.querySelectorAll('.count');

const products = Array.from(document.querySelectorAll('.product'));

const goods = document.querySelector('.goods');

buttons.forEach(e => {
    e.addEventListener('click', () => {
        if (e.id === 'limber') {
            ammount_lim = prompt('Сумма n');
            showProductsLim();
        } else {
            ammount_metal = prompt('Сумма x');
            showProductsMet();
        }
    });
});

function showProductsLim(){
    buttonsDiv.classList.add('hide');
    goods.classList.remove('hide');
    products.forEach(e => {
        if (e.id === 'timber' || e.id === 'boards') {
            e.classList.remove('hide');
        }
    });
    counters.forEach(e => {
        if (e.id === 'count_timber') {
            e.innerHTML = Math.floor((ammount_lim*1.1)/1000) + ' штук';
        }
        else if (e.id === 'count_boards') { 
            e.innerHTML = Math.floor((ammount_lim*1.1)/2000) + ' штук';
        }
    });
};

function showProductsMet(){
    buttonsDiv.classList.add('hide');
    goods.classList.remove('hide');
    products.forEach(e => {
        if (e.id === 'fittings' || e.id === 'reinforcing_mesh') {
            e.classList.remove('hide');
        }
    });
    counters.forEach(e => {
        if (e.id === 'count_fittings') {
            e.innerHTML = Math.floor((ammount_metal*1.3)/2000) + ' штук';
        }
        else if (e.id === 'count_reinforcing_mesh') { 
            e.innerHTML = Math.floor((ammount_metal*1.3)/500) + ' штук';
        }
    });
};
