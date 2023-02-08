
const list = document.querySelector('.rc-users');

for(key in localStorage) {
    if(key.match('{*}') && JSON.parse(key).name !== 'Неизвестный'){
    let p = document.createElement('p');
    p.classList.add('rc-u-text');
    console.log(key);
    p.innerHTML = 'Имя пользователя: ' + JSON.parse(key).name + '<br>Уровень: ' + JSON.parse(key).lvl + '<br>Количество очков: ' + localStorage[key];

    list.appendChild(p);
    }
}