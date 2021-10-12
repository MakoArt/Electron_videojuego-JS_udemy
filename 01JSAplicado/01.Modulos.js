import { protagonista } from "./02Clases.js";

const canvas=document.querySelector('#canvas')
export const ctx=canvas.getContext('2d');

canvas.width=800
canvas.height=600
canvas.style.border="3px solid black"





let escenario=[
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
]


function dibuja(){
for(let y=0;y<7;y++){
    for(let x=0;x<12;x++){
        if(escenario[y][x]==0){
            ctx.fillStyle='lightblue'
            ctx.fillRect(x*32,y*32,32,32)
        }
        if(escenario[y][x]==1){
            ctx.fillStyle='green'
            ctx.fillRect(x*32,y*32,32,32)
        }

    }
}

}



function fisicas(){
 
const coorX=parseInt(protagonista.posX/32)
const coorY=parseInt(protagonista.posY/22)

 


// if(!escenario[coorY][coorX]==1){
//    protagonista.posY+=1
// }


}



function principal(){
    requestAnimationFrame(principal)
    canvas.width=800
    canvas.height=600

    dibuja()
    fisicas()
   
    protagonista.dibuja()
 




}
principal()





