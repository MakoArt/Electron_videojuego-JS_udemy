import {ctx} from './01.scene.js'
import {ninja} from './02.ninja.js'
import { enemyArray } from './04.enemies.js'
import {coup} from './05.objects.js'

class Marcador{
    constructor(posX,posY,width,height,squareColor,textColor,lifes,points,levels,coupSound,ballSound) {

         this.posX=posX 
         this.posY=posY
         this.width=width 
         this.height=height
         this.squareColor=squareColor
         this.textColor=textColor 
         this.lifes=lifes 
         this.points=points 
         this.levels=levels
         this.coupSound=new Howl({src:['sounds/jump.mp3'],loop:false})
         this.ballSound=new Howl({src:['sounds/jump.mp3'],loop:false})

     }
     paintSquare(){
         ctx.fillStyle=this.squareColor
         ctx.fillRect(this.posX,this.posY,this.width,this.height)
     }
     numberLifes(){
         ctx.font="bold 20px verdana"
         ctx.fillStyle="white"
         ctx.fillText(`VIDAS:${this.lifes}`,this.posX,this.posY)
     }
     setScore(){
         ctx.font="bold 20px verdana"
         ctx.fillStyle="white"
         ctx.fillText(`PUNTUACION:${this.points}`,this.posX,this.posY)
     }

     coupCollision(){
        let calculo=Math.sqrt(Math.pow(coup.posX-ninja.posX,2) + Math.pow(coup.posY-ninja.posY,2))
         let round=Math.round(calculo)
              console.log(round)
         
        if(round>0 && round<12){
             coup.posX=900
             this.points+=1
             this.coupSound.play()
             
         }
     }

     ballsColision(){

         enemyArray.map(array=>{
        let calculo=Math.sqrt(Math.pow(array.posX-ninja.posX,2) + Math.pow(array.posY-ninja.posY,2))
        let round=Math.round(calculo)
             console.log(round)
        
       if(round>0 && round<12){
            array.posY=-100
            this.lifes-=1
             this.ballSound.play()
     }//end if

    })//end map

   }//end function
}
export const cuadro=new Marcador(270,0,300,60,'orangered')
export const life=new Marcador(270,20,300,80,null,null,3)
export const score=new Marcador(270,40,80,40,null,'white',null,0)