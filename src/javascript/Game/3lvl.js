const complexity = document.getElementById('flc-s-complexity');
const conversation = document.querySelector('.flc-results');
const scoreRes = document.querySelector('.flh-s-txt');
const name = document.querySelector('.flh-s-name');

let score;
let result = [];
let userResult = [];
let counter = 0;
score = +localStorage.getItem(localStorage.getItem('00001'));

let compl = [2000, 10000]

if (score < 5) {
    complexity.value = 'easy';
    scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Легкая сложность' 
} else if (score < 12) {
    complexity.value = 'medium';
    scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Средняя сложность' 
} else {
    complexity.value = 'hard';
    scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Сложная сложность' 
}


const start = document.querySelector('.flc-s-btn');
const game = document.querySelector('.flc-game');
name.innerHTML += ' ' + JSON.parse(localStorage.getItem('00001')).name;
let fruits;


start.addEventListener('click', function listen(e) {
    start.style.display = 'none';
    conversation.innerHTML = 'Пиятной игры! Уровень повысится при достижении 100 и 250 тубриков!'

    let el = document.createElement('div');
    el.classList.add('racoon');
    game.appendChild(el);
    el = document.querySelector('.racoon');

    document.addEventListener('keydown', function(e) {
        if(e.key === 'ArrowRight')
        {
            if(el.getBoundingClientRect().bottom + 1 >= el.parentElement.getBoundingClientRect().bottom){
                el.style.left = el.getBoundingClientRect().x + 20 + 'px';
                // alert();
            }
        }
        if(e.key === 'ArrowLeft')
        {
            if(el.getBoundingClientRect().bottom + 1 >= el.parentElement.getBoundingClientRect().bottom){
                el.style.left = el.getBoundingClientRect().x - 20 + 'px';
                // alert();
            }
        }
        if(e.key === 'ArrowUp') {
            if(el.getBoundingClientRect().bottom + 3 >= el.parentElement.getBoundingClientRect().bottom){
                let st = el.getBoundingClientRect().top
                el.style.top = el.getBoundingClientRect().top - 40 + 'px';
                console.log(el.getBoundingClientRect().top)
                let racoon = document.querySelector('.racoon');
                fruits.forEach((child) => {

                    if (child.getBoundingClientRect().bottom < racoon.getBoundingClientRect().top + 100){
                        if (child.getBoundingClientRect().left >= racoon.getBoundingClientRect().left 
                            && child.getBoundingClientRect().left <= racoon.getBoundingClientRect().left + 100) {
                            child.style.display = "none";
                            child.classList.add('foo');

                            score += 3;
                            console.log(counter);
                            if (score < 100) {
                                complexity.value = 'easy';
                                scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Легкая сложность' 
                            } else if (score < 250) {
                                complexity.value = 'medium';
                                scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Средняя сложность' 
                                compl = [2000, 5000]
                            } else {
                                complexity.value = 'hard';
                                scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Сложная сложность' 
                                compl = [1000, 3000]
                            }
                        }
                    }
                })
                localStorage.setItem(localStorage.getItem('00001'), score)
                setTimeout(function(){el.style.top = game.getBoundingClientRect().bottom - el.getBoundingClientRect().height + 'px'}, 500)
            }
        }
        
    });
    let count = 200000;
    let c;
    let timer = setInterval(function() {
        if (count % compl[0] === 0) {
            let fruct = document.createElement('div');
            let rand = Math.round(Math.random() * 3);
            rand = rand == 0 ? 3 : rand;
            fruct.id = 'i' + rand;
            fruct.classList = 'fr';
            fruct.style.zIndex = c;
            game.appendChild(fruct);
            game.lastChild.style.left = Math.random() * 1000 < 1000 ? Math.random() * 1000 + 'px' : Math.random() * 1000 + Map.random() * 400 + 'px';
           
           
            let position = game.getBoundingClientRect().top;
            let ti = setInterval( function() {
                let timePassed = Date.now() - start;
                position += 1
                if (position + 20 < (game.getBoundingClientRect().bottom - 150) || timePassed > 20000) {
                    game.lastChild.style.top = game.getBoundingClientRect().bottom - 150 + 'px';
                    clearInterval(ti);
                };
                if (position  < (document.querySelector('.racoon').style.top - 150)){
                    animation();
                }
            }, 1000);
    
            const animation = () => {
                game.lastChild.style.top = position + 'px';
            };
            fruits = document.querySelectorAll('.fr');
            c++;
        }

        if (score < 100) {
            complexity.value = 'easy';
            scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Легкая сложность' 
        } else if (score < 250) {
            complexity.value = 'medium';
            scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Средняя сложность' 
            compl = [2000, 5000]
        } else {
            complexity.value = 'hard';
            scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Сложная сложность' 
            compl = [1000, 3000]
        }

        fruits.forEach((child) => {
            if (child.classList == 'fr') {
            setTimeout(() => {
                child.style.display = 'none';
                
            }, compl[1]);
        }
        })
        count -= 1000;

        if(count <= 0){
            clearInterval(timer);
            counter = 0;
            start.style.display = 'block';
            conversation.innerHTML = 'Время вышло';
            score = 0;
            localStorage.setItem(localStorage.getItem('00001'), score)
        }

    },1000);

});