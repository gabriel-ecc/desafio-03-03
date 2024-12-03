let varGlobalColor = '#000'

const cuerpo = document.getElementById('cuerpo');
const cuadroKey = document.getElementById('key');
const grupoCajas = document.querySelector('.grupo-cajas');

const cambiaColor = (elemento,color)=>{
    elemento.style.backgroundColor = color;
};

const agregarCaja = (color)=>{
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('cuadrado');
    nuevoDiv.classList.add('border-back');
    nuevoDiv.style.backgroundColor = color;
    grupoCajas.appendChild(nuevoDiv);
};

cuerpo.addEventListener('keydown',(eventoTeclado)=>{
    if(eventoTeclado.key === 'a'){
        varGlobalColor = 'pink';
        cambiaColor(cuadroKey,varGlobalColor);
    }else if(eventoTeclado.key === 's'){
        varGlobalColor = 'orange';
        cambiaColor(cuadroKey,varGlobalColor);
    }else if(eventoTeclado.key === 'd'){
        varGlobalColor = 'lightblue';
        cambiaColor(cuadroKey,varGlobalColor);
    }else if(eventoTeclado.key === 'q'){
        varGlobalColor = 'purple';
        agregarCaja(varGlobalColor);
    }else if(eventoTeclado.key === 'w'){
        varGlobalColor = 'grey';
        agregarCaja(varGlobalColor);
    }else if(eventoTeclado.key === 'e'){
        varGlobalColor = 'brown';
        agregarCaja(varGlobalColor);
    }
});