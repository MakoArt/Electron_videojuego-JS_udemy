import {ctx,level} from './01.scene.js'


class Enemy{
   constructor(posX,posY,counterX,counterY,tileWidth,tileHeight,totalWidth,totalHeight,route,imageInstance){
      
     this.posX=posX; 
     this.posY=posY; 
     this.counterX=counterX; 
     this.counterY=counterY; 
     this.tileWidth=tileWidth;
     this.tileHeight=tileHeight;
     this.totalWidth=totalWidth;
     this.totalHeight=totalHeight;
     this.route=route; 
     this.imageInstance=new Image()
     this.imageInstance.src=this.route
    }
    draw(){
        ctx.drawImage(this.imageInstance,this.counterX*this.tileWidth,this.counterY*this.tileHeight,this.tileWidth,this.tileHeight,this.posX,this.posY,this.totalWidth,this.totalHeight)
    }
    move(){
        
        //CODIGO PARA REBOTAR
        // if(this.derecha==true){
        //     if(this.posX<800)
        //        this.posX+=2
        //        else{
        //            this.derecha=false
        //        }
        // }
        // else{
        //     if(this.posX>210){
        //        this.posX-=2
        //          }else{
        //            this.derecha=true
        //       }
        // }

     this.posY+=2
     if(this.posY>608){
         this.posY=-100
         this.posX=Math.random()*750
     }
      

    }
   
}

export let enemyArray=[]
enemyArray.push(new Enemy(Math.random()*750,Math.random()*(0-100)-100,0,0,28,28,16,16,'./img/Ball.png',null))
enemyArray.push(new Enemy(Math.random()*750,Math.random()*(0-100)-100,0,0,28,28,28,28,'./img/Ball.png',null))
enemyArray.push(new Enemy(Math.random()*750,Math.random()*(0-100)-100,0,0,28,28,28,28,'./img/Ball.png',null))
enemyArray.push(new Enemy(Math.random()*750,Math.random()*(0-100)-100,0,0,28,28,28,28,'./img/Ball.png',null))
enemyArray.push(new Enemy(Math.random()*750,Math.random()*(0-100)-100,0,0,28,28,16,16,'./img/Ball.png',null))
enemyArray.push(new Enemy(Math.random()*750,Math.random()*(0-100)-100,0,0,28,28,28,28,'./img/Ball.png',null))
enemyArray.push(new Enemy(Math.random()*750,Math.random()*(0-100)-100,0,0,28,28,28,28,'./img/Ball.png',null))
enemyArray.push(new Enemy(Math.random()*750,Math.random()*(0-100)-100,0,0,28,28,28,28,'./img/Ball.png',null))


