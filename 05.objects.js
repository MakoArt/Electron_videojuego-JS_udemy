import{ctx} from './01.scene.js'

class Coup{
    constructor(posX,posY,width,height,route,instanceImage) {
        this.posX=posX 
        this.posY=posY 
        this.width=width 
        this.height=height
        this.route=route 
        this.instanceImage=new Image()
        this.instanceImage.src=this.route
    
    }
    draw(){
        ctx.drawImage(this.instanceImage,this.posX,this.posY,this.width,this.height)
    }

}
export let coup=new Coup(600,514,64,64,'./img/Coup.png')



