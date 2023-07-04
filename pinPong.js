import Ball from './Ball.js'
import Paddle from './Paddle.js'

const ball=new Ball(document.getElementById("ball"));
const playerPaddel= new Paddle(document.getElementById("player-paddle"))
const computerPaddle= new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem=document.getElementById("player-score")
const computerScoreElem=document.getElementById("computer-score")



let lasttime;
function update(time){
if(lasttime!=null){
    const delta = time-lasttime;
//  update code
console.log(delta);
ball.update(delta,[playerPaddel.rect(),computerPaddle.rect()]);
computerPaddle.update(delta, ball.y)
// ball.y
if(islose()) handlelose()
}


lasttime=time;
// console.log(time);
window.requestAnimationFrame(update);
}
function handlelose(){
const rect =ball.rect();
if(rect.right>=window.innerWidth){
    playerScoreElem.textContent=parseInt(playerScoreElem.textContent)+1;
}else{
    computerScoreElem.textContent=parseInt( computerScoreElem.textContent)+1;
    
}

    ball.reset();
    computerPaddle.reset()
}



function islose(){
    const rect =ball.rect();
    return rect.right>=window.innerWidth||rect.left<=0
}





document.addEventListener("mousemove",(e)=>{
    playerPaddel.position=(e.y/window.innerHeight)*100
    // console.log((e.y/window.innerHeight)*100)
    // (e.y/window.innerHeight)*100
})

window.requestAnimationFrame(update);