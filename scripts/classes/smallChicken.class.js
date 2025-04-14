class SmallChicken extends MoveableObject {
    y = 400;
    height = 50;
    width = 50;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    images_Walking = [
        'assets/images/enemys/chicken_small/1_walk/1_w.png',
        'assets/images/enemys/chicken_small/1_walk/2_w.png',
        'assets/images/enemys/chicken_small/1_walk/3_w.png',

        
    ];
    images_Dead = 'assets/images/enemys/chicken_small/2_dead/dead.png';
    images_Empty = '';

    constructor() {
        super().loadImage('assets/images/enemys/chicken_small/1_walk/1_w.png');
        this.x = 400 + Math.random() * 5000;
        this.loadImages(this.images_Walking);
        this.speed = .15 + Math.random() * 1.8;
        this.animate();
    }


    animate() {
        this.MoveIntervall = setStoppableIntervall(() => {
            this.moveLeft();
        }, 1000 / 60);

        this.AnimateIntervall = setStoppableIntervall(() => {
            this.playAnimation(this.images_Walking)
        }, 30);
    }

    stopAnimation(){
        clearInterval(this.MoveIntervall);
        clearInterval(this.AnimateIntervall);
    }
}