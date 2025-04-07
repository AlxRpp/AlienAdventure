class Chicken extends MoveableObject {
    y = 360;
    height = 120;
    width = 120;
    offset = {
        top: -10,
        left: 40,
        right: 40,
        bottom: 0
    };
    images_Walking = [
        'assets/images/enemys/Human/Run/0_Warrior_Run_000.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_001.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_002.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_003.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_004.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_005.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_006.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_007.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_008.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_009.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_010.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_011.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_012.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_013.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_014.png',
    ];
    images_Dead = 'assets/images/enemys/Human/Died/0_Warrior_Died_000.png';
    images_Empty = '';

    constructor() {
        super().loadImage('assets/images/enemys/Human/Run/0_Warrior_Run_000.png');
        this.x = 600 + Math.random() * 2500;
        this.loadImages(this.images_Walking);
        this.speed = .15 + Math.random() * 1.4;
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