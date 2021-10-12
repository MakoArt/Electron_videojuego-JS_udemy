const protagonista=function(posX,posY,ancho,alto){
    this.posX=posX 
    this.posY=posY 
    this.ancho=ancho 
    this.alto=alto 


    this.mover=function(){
        this.posX+=1
    }
}
let aleatorio=Math.round(Math.random()*200)

const heroe=new protagonista(50,aleatorio,30,70)

 
let aleatorio2=Math.round(Math.random()*(100-80)+80)

console.log(aleatorio2)
console.log(aleatorio)