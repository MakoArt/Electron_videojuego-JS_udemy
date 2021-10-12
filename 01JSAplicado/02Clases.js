import {ctx} from './01.Modulos.js'


class Protagonista{
    constructor(posX,posY,ancho,alto,color,counterX,counterY,anchoTotal,altoTotal,ruta,imageInstance){
        this.posX=posX; 
        this.posY=posY;
        this.ancho=ancho;
        this.alto=alto
        this.color=color
        this.counterX=counterX 
        this.counterY=counterY 
        this.anchoTotal=anchoTotal 
        this.altoTotal=altoTotal
        this.ruta=ruta
        this.imageInstance=new Image() 
        this.imageInstance.src=this.ruta
    }
    //120 
    dibuja(){
        ctx.drawImage(this.imageInstance,this.counterX*this.ancho,this.counterY*this.alto,this.ancho,this.alto,this.posX,this.posY,this.anchoTotal,this.altoTotal)
    }
    
    derecha(velocidad){
        
        this.posX+=0.20 + velocidad
        
        if(this.counterX>8){
            this.counterX=0
        }else{
            this.counterX+=1
        }

    }
    abajo(velocidad){
        this.posY+=3 +velocidad
    }
    arriba(velocidad){
        if(this.posY>20)
        this.posY-=39 +velocidad
    }
    izquierda(velocidad){
        this.posX-=3 +velocidad
    }
}
export const protagonista=new Protagonista(20,300,120,80,null,0,0,120,80,'./_Run.png')
