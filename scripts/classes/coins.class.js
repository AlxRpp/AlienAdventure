/**
 * Class for draw the collectable Coins
 */
class Coins extends MoveableObject {
    width = 50;
    height = 50;
    images_Coins = [
        'assets/images/8_coin/coin_1.png',
        'assets/images/8_coin/coin_2.png',
    ];


    constructor() {
        super().loadImage('assets/images/8_coin/coin_1.png');
        this.loadImages(this.images_Coins);
        this.x = 500 + Math.random() * 2500;
        this.y = 200 + Math.random() * 100
        this.animate();
    }

    /**
     * animate the collectable coins
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.images_Coins);
        }, 350);
    }
}