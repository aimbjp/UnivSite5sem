const name = document.getElementById('name');
const btn = document.querySelectorAll('.gc-f-btn');



btn.forEach((e) => {
    e.addEventListener('click', () => {
        if(name.value !== ''){
            if (localStorage.getItem(JSON.stringify({"name": name.value, "lvl": e.id})) == null) {
                localStorage.setItem(JSON.stringify({"name": name.value, "lvl": e.id}), 0);
            }
            localStorage.setItem('00001', JSON.stringify({"name": name.value, "lvl": e.id}));
            
        }else {
            localStorage.setItem(JSON.stringify({"name": 'Неизвестный', "lvl": e.id}), 0);
            localStorage.setItem('00001', JSON.stringify({"name": 'Неизвестный', "lvl": e.id}));
        }
    });
});