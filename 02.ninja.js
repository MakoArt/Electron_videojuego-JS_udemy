import {ctx,level} from './01.scene.js'


class Hero{
   constructor(posX,posY,counterX,counterY,tileWidth,tileHeight,totalWidth,totalHeight,route,imageInstance,music){
      
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
     this.music=new Howl({src:['sounds/musica.ogg'],loop:true,volume:0.5})
   
    }
    
    draw(){
        ctx.drawImage(this.imageInstance,this.counterX*this.tileWidth,this.counterY*this.tileHeight,this.tileWidth,this.tileHeight,this.posX,this.posY,this.totalWidth,this.totalHeight)
       
    }
    goRight(){
        //move right
        this.coorX=parseInt(this.posX/30)
        this.coorY=parseInt(this.posY/32)
        if(level[this.coorY][this.coorX]==0){
            this.posX+=3
        }
        console.log(level[this.coorY][this.coorX])
        //sprite right
        this.counterX=3 
        if(this.counterY<3){
            this.counterY+=1
        }else{
            this.counterY=0
        }
    }

    goLeft(){
        //move left
        this.coorX=parseInt(this.posX/32)
        this.coorY=parseInt(this.posY/32)
        if(level[this.coorY][this.coorX]==0){
        this.posX-=3
        }
         //sprite left
         this.counterX=2
        if(this.counterY<3){
             this.counterY+=1
         }else{
             this.counterY=0
         }
     }
    
     goUp(){
         //move up
        this.coorX=parseInt(this.posX/32)
        this.coorY=parseInt(this.posY/31.6)
        if(level[this.coorY][this.coorX]==0){
        this.posY-=3
        }
        //sprite up
        this.counterX=1
       if(this.counterY<5){
            this.counterY+=1
        }else{
            this.counterY=0
        }
    }

    goDown(){
        //move down 
        this.coorX=parseInt(this.posX/32)
        this.coorY=parseInt(this.posY/30)
        if(level[this.coorY][this.coorX]==0){
         this.posY+=3
        }
        //sprite down
        this.counterX=0
       if(this.counterY<3){
            this.counterY+=1
        }else{
            this.counterY=0
        }
    }
  
  













}
export const ninja=new Hero(100,549,0,0,16,16,19,29,'./img/ninja.png',null,null)
