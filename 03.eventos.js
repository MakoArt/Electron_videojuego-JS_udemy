import {ninja} from './02.ninja.js'

window.addEventListener('keydown',(e)=>{
    
    
    if(e.key=='d' || e.key=='D'){
        ninja.goRight()
    }

    if(e.key=='a' || e.key=='A'){
        ninja.goLeft()
    }

    if(e.key=='w' || e.key=='W'){
        ninja.goUp()
    }

    if(e.key=='s' || e.key=='S'){
        ninja.goDown()
    }







})


