//POO 

//CLASES 
class Enemigo{
    constructor(posX,posY,ancho,alto){
        this.posX=posX; 
        this.posY=posY;
        this.ancho=ancho;
        this.alto=alto;
 
    }
    mover(velocidad){
        // this.posX= this.posX - 1 
        this.posX-=1 + velocidad
    }

}

const orco=new Enemigo(300,200,30,50)




function principal(){
    requestAnimationFrame(principal)

   orco.mover(3)


}
principal()



//FUNCIONES CONSTRUCTORAS 

const protagonista=function(posX,posY,ancho,alto){
    this.posX=posX 
    this.posY=posY 
    this.ancho=ancho 
    this.alto=alto 


    this.mover=function(){
        this.posX+=1
    }
}

const heroe=new protagonista(50,200,30,70)

