const Initail_vel=0.025
const Increase_velocity=0.0000007
export default class Ball {
    constructor(ballelem){
        this.ballelem=ballelem;
        this.reset();
    }
     get x(){
        return  parseFloat( getComputedStyle(this.ballelem).getPropertyValue("--x"));
     }
     
     set x(value){
        this.ballelem.style.setProperty("--x", value)
     }
     
     get y(){
        return  parseFloat( getComputedStyle(this.ballelem).getPropertyValue("--y"));
     }
     
     set y(value){
        this.ballelem.style.setProperty("--y", value)
     }
     rect(){
      return this.ballelem.getBoundingClientRect();
     }


     reset(){
        this.x=50;
        this.y=50;
        this.direction={x:0};
         while(Math.abs(this.direction.x)<=.2||Math.abs(this.direction.x)>=.9){
            const heading=randomNumber(0, 2*Math.PI);
            
            console.log(heading);
            this.direction={x:Math.cos(heading),y:Math.sin(heading)}
         }
         console.log(this.direction)
 
         this.velocity=Initail_vel
      }




    update(delta, paddlerect){
        this.x+=this.direction.x*this.velocity*delta
        this.y+=this.direction.y*this.velocity*delta
        const rect=this.rect();
        this.velocity+=Increase_velocity*delta
        if(rect.bottom>=window.innerHeight||rect.top<=0){
         this.direction.y*=-1;
        }
        if( paddlerect.some(r => isCollision(r,rect))){
               this.direction.x*=-1;
            }
         
    }
    
   }
   function randomNumber(min,max){
      return Math.random()*(max-min)+min;
   }

   function isCollision(rect1, rect2){
      return (
      rect1.left<=rect2.right&&
      rect1.right>=rect2.left&&
      rect1.top<=rect2.bottom &&
      rect1.bottom>=rect2.top
      )
   }