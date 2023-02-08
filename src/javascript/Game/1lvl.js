const l1 = document.getElementById('lamp1');
const l2 = document.getElementById('lamp2');
const l3 = document.getElementById('lamp3');
const complexity = document.getElementById('flc-s-complexity');
const conversation = document.querySelector('.flc-results');
const scoreRes = document.querySelector('.flh-s-txt');
const name = document.querySelector('.flh-s-name');

let score;
let result = [];
let userResult = [];
console.log(JSON.parse(localStorage.getItem('00001')).lvl);


score = +localStorage.getItem(localStorage.getItem('00001'));

const start = document.querySelector('.flc-s-btn');

name.innerHTML += ' ' + JSON.parse(localStorage.getItem('00001')).name;

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


start.addEventListener('click', () =>{
    if(complexity.value == 'easy') {
        
        conversation.innerHTML = 'Легкий уровень, отсчитывай время!'

        l1.classList.add('on');
        let randomTime = Math.random() * 8;
        randomTime = randomTime < 5 ? randomTime + 5 : randomTime;

        setTimeout(function () {
            l2.classList.add('on');
            result.push(randomTime);
            randomTime = Math.random() * 8;
            randomTime = randomTime < 5 ? randomTime + 3 : randomTime;
        }, randomTime * 1000);

        setTimeout(function () {
            l3.classList.add('on');
            result.push(randomTime + result[0]);
        }, randomTime * 1000 * 2);
        
        setTimeout(function () {
            l1.classList.remove('on');
            l2.classList.remove('on');
            l3.classList.remove('on');
            conversation.innerHTML = 'Твой ход! Все закончится, когда лампочки перестанут гореть, просто дождись и не забывай тыкать';
        }, randomTime * 1000 * 2 + 1000)

        setTimeout(function () {
            let currentTime;
            let diffL1L2 = 0;
            let c1 = 0;
            let c2 = 0;
            let c3 = 0;
            
            l1.addEventListener('click', function listen() {
                l1.removeEventListener('click', listen);
                l1.classList.add('on');
                if (c1 == 0) {
                    currentTime = new Date().getTime();
                    c1++;
                }
            });
                
            l2.addEventListener('click', function listen()  {
                l2.removeEventListener('click', listen);
                l2.classList.add('on');
                
                if(c2 == 0) {
                    diffL1L2 = new Date().getTime() - currentTime;
                    c2 += 1;
                    userResult.push(diffL1L2 / 1000);
                };
            });
            
            l3.addEventListener('click', function listen() {
                l3.removeEventListener('click', listen);
                l3.classList.add('on');
                
                if(c3 == 0) {
                    diffL1L2 = new Date().getTime() - currentTime;
                    c3 += 1;
                    userResult.push(diffL1L2 / 1000);
                };

                setTimeout(function() {
                    l1.classList.remove('on');
                    l2.classList.remove('on');
                    l3.classList.remove('on');
                    
                    

                    conversation.innerHTML = 'Молодец, ты закончил уровень! Считаем результаты, подожди, пожалуйста';


                    setTimeout(function() {
                        if ( (result[0] - userResult[0] < 5 && result[0] - userResult[0] > -5 )
                            && (result[1] - userResult[1] < 5 && result[1] - userResult[1] > -5)){ 
                            score += 3;
                            conversation.innerHTML = 'Молодец! Ты получил 3 тубрика!';
                        }
                        else{
                            score -= 1;
                            conversation.innerHTML = 'Молодец! Однако в этот раз ты обронил один тубрик.';
                        }
                        result = [];
                        userResult = [];
                        localStorage.setItem(localStorage.getItem('00001'), score);
                        if(score >= 5) {
                            complexity.value = 'medium';
                            scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Средняя сложность' 
                        } else {
                            scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Легкая сложность' 
                        };
                        setTimeout(function () {
                            conversation.innerHTML = 'Пора снова в бой, попробуй перейти на следующий уровень, жми кнопку!';
                        }, 2000)
                    });

                }, 1000);
            });
        }, randomTime * 1000 * 2 + 1000);
        
    }
    
    if(complexity.value == 'medium') {
        
        conversation.innerHTML = 'Средний уровень, отсчитывай время!'

        l1.classList.add('on');
        let randomTime = Math.random() * 7;
        randomTime = randomTime < 3 ? randomTime + 2 : randomTime;

        setTimeout(function () {
            l2.classList.add('on');
            result.push(randomTime);
            randomTime = Math.random() * 7;
            randomTime = randomTime < 3 ? randomTime + 2 : randomTime;
        }, randomTime * 1000);

        setTimeout(function () {
            l3.classList.add('on');
            result.push(randomTime + result[0]);
        }, randomTime * 1000 * 2);
        
        setTimeout(function () {
            l1.classList.remove('on');
            l2.classList.remove('on');
            l3.classList.remove('on');
            conversation.innerHTML = 'Твой ход! Все закончится, когда лампочки перестанут гореть, просто дождись и не забывай тыкать';
        }, randomTime * 1000 * 2 + 1000)

        setTimeout(function () {
            let currentTime;
            let diffL1L2 = 0;
            let c1 = 0;
            let c2 = 0;
            let c3 = 0;
            
            l1.addEventListener('click', function listen() {
                l1.removeEventListener('click', listen);
                l1.classList.add('on');
                if (c1 == 0) {
                    currentTime = new Date().getTime();
                    c1++;
                }
            });
                
            l2.addEventListener('click', function listen()  {
                l2.removeEventListener('click', listen);
                l2.classList.add('on');
                
                if(c2 == 0) {
                    diffL1L2 = new Date().getTime() - currentTime;
                    c2 += 1;
                    userResult.push(diffL1L2 / 1000);
                };
            });
            
            l3.addEventListener('click', function listen() {
                l3.removeEventListener('click', listen);
                l3.classList.add('on');
                
                if(c3 == 0) {
                    diffL1L2 = new Date().getTime() - currentTime;
                    c3 += 1;
                    userResult.push(diffL1L2 / 1000);
                };

                setTimeout(function() {
                    l1.classList.remove('on');
                    l2.classList.remove('on');
                    l3.classList.remove('on');
                    
                    

                    conversation.innerHTML = 'Молодец, ты закончил этап! Считаем результаты, подожди, пожалуйста';


                    setTimeout(function() {
                        if ( (result[0] - userResult[0] < 3 && result[0] - userResult[0] > -3 )
                            && (result[1] - userResult[1] < 3 && result[1] - userResult[1] > -3)){ 
                            score += 2;
                            conversation.innerHTML = 'Молодец! Ты получил 2 тубрика!';
                        }
                        else{
                            console.log(score)
                            score -= 1;
                            conversation.innerHTML = 'Молодец! Однако в этот раз ты обронил один тубрик.';
                        }
                        result = [];
                        userResult = [];
                        localStorage.setItem(localStorage.getItem('00001'), score)
                        if(score >= 12) {
                            complexity.value = 'hard';
                            scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Сложная сложность' 
                        }else if(score < 5) {
                            complexity.value = 'easy';
                            scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Легкая сложность' 
                        }else {
                            console.log(score + '333');
                            scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Средняя сложность' 
                        };

                        setTimeout(function () {
                            conversation.innerHTML = 'Пора снова в бой, жми кнопку!';
                        }, 2000)
                    });

                    

                }, 1000);
            });
        }, randomTime * 1000 * 2 + 1000);
        
    }

    if(complexity.value == 'hard') {
        
        conversation.innerHTML = 'Сложный уровень, отсчитывай время!'

        l1.classList.add('on');
        let randomTime = Math.random() * 5;

        setTimeout(function () {
            l2.classList.add('on');
            result.push(randomTime);
            randomTime = Math.random() * 5;
        }, randomTime * 1000);

        setTimeout(function () {
            l3.classList.add('on');
            result.push(randomTime + result[0]);
        }, randomTime * 1000 * 2);
        
        setTimeout(function () {
            l1.classList.remove('on');
            l2.classList.remove('on');
            l3.classList.remove('on');
            conversation.innerHTML = 'Твой ход! Все закончится, когда лампочки перестанут гореть, просто дождись и не забывай тыкать';
        }, randomTime * 1000 * 2 + 1000)

        setTimeout(function () {
            let currentTime;
            let diffL1L2 = 0;
            let c1 = 0;
            let c2 = 0;
            let c3 = 0;
            
            l1.addEventListener('click', function listen() {
                l1.removeEventListener('click', listen);
                l1.classList.add('on');
                if (c1 == 0) {
                    currentTime = new Date().getTime();
                    c1++;
                }
            });
                
            l2.addEventListener('click', function listen()  {
                l2.removeEventListener('click', listen);
                l2.classList.add('on');
                
                if(c2 == 0) {
                    diffL1L2 = new Date().getTime() - currentTime;
                    c2 += 1;
                    userResult.push(diffL1L2 / 1000);
                };
            });
            
            l3.addEventListener('click', function listen() {
                l3.removeEventListener('click', listen);
                l3.classList.add('on');
                
                if(c3 == 0) {
                    diffL1L2 = new Date().getTime() - currentTime;
                    c3 += 1;
                    userResult.push(diffL1L2 / 1000);
                };

                setTimeout(function() {
                    l1.classList.remove('on');
                    l2.classList.remove('on');
                    l3.classList.remove('on');
                    
                    

                    conversation.innerHTML = 'Молодец, ты закончил этап! Считаем результаты, подожди, пожалуйста';


                    setTimeout(function() {
                        if ( (result[0] - userResult[0] < 2 && result[0] - userResult[0] > -2 )
                            && (result[1] - userResult[1] < 2 && result[1] - userResult[1] > -2)){ 
                            score += 1;
                            conversation.innerHTML = 'Молодец! Ты получил 1 тубрик!';
                        }
                        else{
                            score -= 1;
                            conversation.innerHTML = 'Молодец! Однако в этот раз ты обронил один тубрик.';
                        }
                        result = [];
                        userResult = [];
                        localStorage.setItem(localStorage.getItem('00001'), score)
                        setTimeout(function () {
                            conversation.innerHTML = 'Пора снова в бой, жми кнопку!';
                        }, 2000)
                        if(score >= 30) {
                            conversation.innerHTML = 'Остановись!';
                            scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Уже хватит'
                        }
                        if (score < 12) {
                            complexity.value = 'medium';
                            scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Средняя сложность'
                        }
                    });

                    

                }, 1000);
            });
        }, randomTime * 1000 * 2 + 1000);
        
    }
});