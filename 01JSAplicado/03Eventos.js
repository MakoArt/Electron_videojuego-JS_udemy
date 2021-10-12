import{ protagonista } from './02Clases.js'

document.addEventListener('keydown',(e)=>{
    e.preventDefault()

    if(e.key=='d' || e.key=='D'){
        protagonista.derecha(5)
    }
    if(e.key=='w' || e.key=='W'){
        protagonista.arriba(2)
    }
    if(e.key=='a' || e.key=='A'){
        protagonista.izquierda(2)
    }
    if(e.key=='s' || e.key=='S'){
        protagonista.abajo(2)
    }
})