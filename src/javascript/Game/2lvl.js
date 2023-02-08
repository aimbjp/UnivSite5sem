const complexity = document.getElementById('flc-s-complexity');
const conversation = document.querySelector('.flc-results');
const scoreRes = document.querySelector('.flh-s-txt');
const name = document.querySelector('.flh-s-name');

let score;
let result = [];
let userResult = [];
score = +localStorage.getItem(localStorage.getItem('00001'));

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

name.innerHTML += ' ' + JSON.parse(localStorage.getItem('00001')).name;

const lab = function(height, width, maze, walls, currentPosition, time) {
    height = height % 2 == 0 ? height + 1 : height;
    width = width % 2 == 0 ? width + 1 : width;
    document.getElementById('maze').setAttribute('style', 'height:' + height * 20 + 'px; width:' + width * 20 + 'px');
    for (let y = 0; y < height; y++) {
    maze[y] = [];
    for (let x = 0; x < width; maze[y][x++] = 'wall') {
        let e = document.getElementById('maze').appendChild(document.createElement('div'));
        e.className = 'block wall';
        e.setAttribute('id', y + '-' + x);
    }
    }

    function amaze(y, x, addBlockWalls) {
    maze[y][x] = 'maze';
    document.getElementById(y + '-' + x).className = 'block';
    if (addBlockWalls && valid(y + 1, x) && (maze[y + 1][x] == 'wall')) walls.push([y + 1, x, [y, x]]);
    if (addBlockWalls && valid(y - 1, x) && (maze[y - 1][x] == 'wall')) walls.push([y - 1, x, [y, x]]);
    if (addBlockWalls && valid(y, x + 1) && (maze[y][x + 1] == 'wall')) walls.push([y, x + 1, [y, x]]);
    if (addBlockWalls && valid(y, x - 1) && (maze[y][x - 1] == 'wall')) walls.push([y, x - 1, [y, x]]);
    }

    function valid(a, b) {
    return (a < height && a >= 0 && b < width && b >= 0) ? true : false;
    };

    amaze(currentPosition[0], currentPosition[1], true);

    while (walls.length != 0) {
        let randomWall = walls[Math.floor(Math.random() * walls.length)]
        let host = randomWall[2]
        let opposite = [(host[0] + (randomWall[0] - host[0]) * 2), (host[1] + (randomWall[1] - host[1]) * 2)];
        if (valid(opposite[0], opposite[1])) {
            if (maze[opposite[0]][opposite[1]] == 'maze') {
                walls.splice(walls.indexOf(randomWall), 1);
            } else {
                amaze(randomWall[0], randomWall[1], false), amaze(opposite[0], opposite[1], true);
            }
    } else {
        walls.splice(walls.indexOf(randomWall), 1);
    }
    }

    document.getElementById('0-0').className = 'block cur';
    document.getElementById((height - 1) + '-' + (width - 1)).className = 'block finish';
    
    let finish = document.querySelector('.finish');

        let mouse = document.querySelector('.cur');
        mouse.appendChild(document.createElement('img'));
        
        let timer = setInterval(() => {
            if(time <= 0) {
                score -= 1;
                        localStorage.setItem(localStorage.getItem('00001'), score);
                        if (score < 5) {
                            complexity.value = 'easy';
                            scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Легкая сложность' 
                        } else if (score < 12) {
                            complexity.value = 'medium';
                            scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Средняя сложность' 
                        } else {
                            complexity.value = 'hard';
                            scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Сложная сложность' 
                        };
                document.getElementById('maze').remove();
                mouse.remove();
                conversation.innerHTML = 'Увы ты теряешь тубрик, попробуй еще!';
                document.querySelector('.time').innerHTML = 'Время вышло';
                clearInterval(timer);
                start.style.display = 'block';

            } else {
                document.querySelector('.time').innerHTML = time + ' секунд';
            }  
            time --;
        }, 1000);

        // mouse.onmousedown = function move(e) {
        //     mouse.style.position = 'absolute';
        //     moveAt(e);
         

        //     function moveAt(e) {
        //         mouse.style.left = e.pageX - mouse.offsetWidth / 2 + 'px';
        //         mouse.style.top = e.pageY - mouse.offsetHeight / 2 + 'px';
        //     }


        //     document.onmousemove = function(e) {
        //             moveAt(e);

        //     } 

        // mouse.onmouseup = function() {
        //     document.onmousemove = null;
        //     mouse.onmouseup = null;
        //     if (mouse.getBoundingClientRect().x - finish.getBoundingClientRect().x < 2 && mouse.getBoundingClientRect().x - finish.getBoundingClientRect().x > -2
        //                 && mouse.getBoundingClientRect().y - finish.getBoundingClientRect().y < 2 && mouse.getBoundingClientRect().y - finish.getBoundingClientRect().y > -2)
        //                 {
        //                     score += 3;
        //                     localStorage.setItem(localStorage.getItem('00001'), score);
        //                     if (score < 5) {
        //                         complexity.value = 'easy';
        //                         scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Легкая сложность' 
        //                     } else if (score < 12) {
        //                         complexity.value = 'medium';
        //                         scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Средняя сложность' 
        //                     } else {
        //                         complexity.value = 'hard';
        //                         scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Сложная сложность' 
        //                     };
        //                     document.getElementById('maze').remove();
        //                     mouse.remove();
        //                     conversation.innerHTML = 'Ты молодец, получай 3 тубрика! <br>Нажми на кнопку';
        //                     clearInterval(timer);
        //         start.style.display = 'block';

        //                 }
        //             }
                
                    document.body.onkeydown = function(e) {
                        var newPosition = [currentPosition[0] + ((e.keyCode - 39) % 2), currentPosition[1] + ((e.keyCode - 38) % 2)];
                        if (valid(newPosition[0], newPosition[1]) && maze[newPosition[0]][newPosition[1]] != 'wall') {
                          document.getElementById(currentPosition[0] + '-' + currentPosition[1]).className = 'block';
                          currentPosition = newPosition;
                          document.getElementById(currentPosition[0] + '-' + currentPosition[1]).className = 'block cur';
                          if (currentPosition[0] == height - 1 && currentPosition[1] == width - 1) 
                            {
                                score += 3;
                                localStorage.setItem(localStorage.getItem('00001'), score);
                                if (score < 5) {
                                    complexity.value = 'easy';
                                    scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Легкая сложность' 
                                } else if (score < 12) {
                                    complexity.value = 'medium';
                                    scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Средняя сложность' 
                                } else {
                                    complexity.value = 'hard';
                                    scoreRes.innerHTML = 'Тубрики: ' + score + '<br>Сложная сложность' 
                                };
                                document.getElementById('maze').remove();
                                mouse.remove();
                                conversation.innerHTML = 'Ты молодец, получай 3 тубрика! <br>Нажми на кнопку';
                            clearInterval(timer);
                                
                                start.style.display = 'block';
                            };}
            
    
        
    };
    }
    
        
start.addEventListener('click', function (e) {
    start.style.display = 'none';

    conversation.innerHTML = 'Помоги мышке, перетащи ее';
    if (complexity.value =='easy') { 
        document.querySelector('.fl-content').prepend(document.createElement('div'))
        document.querySelector('.fl-content').firstChild.id = 'maze';
        lab(20, 20, [], [], [0, 0], 20);
        
    }
    if (complexity.value =='medium') {
        document.querySelector('.fl-content').prepend(document.createElement('div'))
        document.querySelector('.fl-content').firstChild.id = 'maze';
        lab(30, 30, [], [], [0, 0], 30);
    }
    if (complexity.value =='hard') {
        document.querySelector('.fl-content').prepend(document.createElement('div'))
        document.querySelector('.fl-content').firstChild.id = 'maze';
        lab(40, 40, [], [], [0, 0], 40);
    }
})