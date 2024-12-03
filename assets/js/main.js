const aColorNegro = (elemento) => {
    elemento.style.backgroundColor = '#000';
}

const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');

c1.addEventListener('click', ()=>{
    aColorNegro(c1);
});

c2.addEventListener('click', ()=>{
    aColorNegro(c2);
});

c3.addEventListener('click', ()=>{
    aColorNegro(c3);
});

c4.addEventListener('click', ()=>{
    aColorNegro(c4);
});

