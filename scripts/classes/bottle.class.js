/**
 * Class template for put the collectable Bottle´s
 * 
 */
class Bottle extends DrawableObject {
    width = 80;
    height = 80;
    offset = {
        top: 10,
        left: 35,
        right: 15,
        bottom: 0
    };
    
    constructor() {
        super().loadImage('assets/images/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = 300 + Math.random() * 2500 
        this.y = 380
    }
}