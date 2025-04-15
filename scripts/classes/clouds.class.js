/**
 * Class to render Clouds 
 */
class Clouds extends MoveableObject{
    y = 20;
    height = 250;
    width = 500;
   
    constructor(path){
        super().loadImage(path)
        this.x =  Math.random() * 4000
        this.animate();
    }

    /**
     * animate the Clouds to move left
     */
    animate(){
        setInterval(()=>{
        this.moveLeft();
        }, 60)
    }
}