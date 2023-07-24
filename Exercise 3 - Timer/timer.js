
// selecting element

const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
let counter = document.querySelector('.counter');
const reset = document.querySelector('.reset');
const start = document.querySelector('.start')

let count = 0;

plus.addEventListener("click", ()=> {
    counter.innerHTML = count;
    count ++;
});

minus.addEventListener("click", ()=> {
    counter.innerHTML = count;
    count --;
});

reset.addEventListener('click', ()=>{
    counter.innerHTML = count;
    count = 0;
});

start.addEventListener('click', ()=> {
    start.innerHTML = "Stop"
})