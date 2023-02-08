
let counterQRu = 0;
const quoteRus = [ "Привычка - вторая натура", "Заметьте хорошо!", 
"Беда не приходит одна", "Через тернии к звёздам", ];
const quoteEng = [ "Consuetudo est altera natura", "Nota bene", 
"Nulla calamitas sola", "Per aspera ad astra", ];

const content = document.querySelector('.quotes-content');
const listQuotes = document.querySelector('.qc-block-quote');
const listQuotesRU = document.querySelector('.qc-bq-ru');
const listQuotesENG = document.querySelector('.qc-bq-eng');
const btnBlock = document.querySelector('.qc-buttons');
const btnAdd = document.querySelector('.qc-b-add');
const btnChange = document.querySelector('.qc-b-color');
let engItems = document.querySelector('.qc-bq-textENG');
let rusItems = document.querySelectorAll('.qc-bq-textRU');
let counter = [];

btnAdd.addEventListener( 'click', ()=> {
    if (counterQRu > quoteRus.length - 1){
        quotesOverflow();
    } else {  
        let i = Math.floor(Math.random() * (quoteRus.length));
        while (counter.includes(i)) {
            i = Math.floor(Math.random() * (quoteRus.length));
        };
        counter.push(i); 
        const e = createItem(i);
        counterQRu++;
        listQuotesRU.append(e);
        rusItems = document.querySelectorAll('.qc-bq-textRU');
        console.log(e);
        rusItems.forEach(item => {anim(item);console.log(item)});
    }
});

const createItem = (c) => { 
    const e = document.createElement("div");
    e.classList.add('qc-bq-item');
    e.style.left = Math.random() * 100 + 'px';

    const p = document.createElement("p");
    p.classList.add("qc-bq-textRU");
    p.classList.add("qc-bq-text");

    p.innerHTML = (counterQRu + 1) + ") " + quoteRus[c];
    e.append(p);
    translateQ(e.firstChild, c, counterQRu);
    return e;
};

const translateQ = (p, i, counterQRu) => {
    p.addEventListener('click', (par) => {
        if(p.classList.contains('qc-bq-textRU')){
        console.log(par);
        p.style.width = 400 + "px";
        par.target.firstChild.data = (counterQRu + 1) + ") " + quoteEng[i];
        p.classList.replace("qc-bq-textRU", "qc-bq-textENG");
        engItems = document.querySelector('.qc-bq-textENG');
        // let count = document.querySelectorAll('.qc-bq-textENG').length - 1;
        // console.log(document.querySelectorAll('.qc-bq-textENG').length-1);
        // let calc = listQuotesENG.getBoundingClientRect().bottom * 0.9 - 
        // p.parentElement.getBoundingClientRect().height - 
        // count * document.querySelector('.qc-bq-item').getBoundingClientRect().height;
        // if (document.querySelector('.qc-b-error-message') != null) {
        //     calc += document.querySelector('.qc-b-error-message').getBoundingClientRect().height;
        // }
        // let position = p.parentElement.getBoundingClientRect().top;
        // let start = Date.now();
        // let timer = setInterval( function() {
        //     let timePassed = Date.now() - start;

        //     if (position/calc < 0.2){
        //         position += (position/calc)*10;
        //     } else {
        //         position += 3
        //     }
            
        //     console.log(calc);
        //     console.log(position);
        //     if ((timePassed > 20000 || position >= (calc))) {
        //         clearInterval(timer);
        //         listQuotesENG.prepend(p.parentElement);
        //         p.parentElement.style.top = 0 + 'px';
        //         return;
        //     };

        //     animation(timePassed, 1000/calc);
        // }, 60);

        // const animation = (timePassed, calc) => {
        //     p.parentElement.style.top = position + 'px';
        // };
    }
    });
};

const quotesOverflow = () => {
    const quotesOF = document.createElement("p");
    quotesOF.innerHTML = "Фразы закончились";
    quotesOF.classList.add("qc-b-error-message");

    if (btnBlock.getElementsByTagName("p").length != 1){
        btnBlock.append(quotesOF);
    };
};

btnChange.addEventListener('click', () => {
    const text = document.querySelectorAll('.qc-bq-textENG');
    text.forEach(element => {
        element.classList.add('yellow-background');
    });
});

let countAnim = 0;
const anim = (item) => {
    item.addEventListener('click', (e) => {
        let count = document.querySelectorAll('.qc-bq-textENG').length - 1;
        console.log(document.querySelectorAll('.qc-bq-textENG').length-1);
        let calc = listQuotesENG.getBoundingClientRect().bottom * 0.9 - 
        //e.target.parentElement.getBoundingClientRect().height - 
        count * document.querySelector('.qc-bq-item').getBoundingClientRect().height;
        // if (document.querySelector('.qc-b-error-message') != null) {
        //     calc += document.querySelector('.qc-b-error-message').getBoundingClientRect().height;
        // }
        countAnim++;
        let position = e.target.parentElement.getBoundingClientRect().top;
        let start = Date.now();
        let timer = setInterval( function() {
            let timePassed = Date.now() - start;
            console.log(e.target.parentElement.parentElement.classList)
            if (e.target.parentElement.parentElement.classList.contains('qc-bq-ru')){
                e.target.parentElement.style.position = 'absolute';
            }
            // if (position/calc < 0.2){
            //     position += (position/calc)*10;
            // } else {
                position += 3
            // }
            
            // console.log(calc);
            // console.log(position);
            if ((timePassed > 20000 || position >= (calc - countAnim))) {
                clearInterval(timer);
                setTimeout( () => { 
                    listQuotesENG.prepend(e.target.parentElement);
                    e.target.parentElement.style.position = 'relative';
                    e.target.parentElement.style.top = 0 + 'px';}
                    , 500
                );
                return;
            };
            if (position < (calc - 3)){
                animation();
            }
        }, 60);

        const animation = () => {
            e.target.parentElement.style.top = position + 'px';
        };
})};