/**
 * Class for the Character
 */
class Character extends MoveableObject {
    height = 125;
    width = 62.5;
    y = 330;
    speed = 10;
    world;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    idleCounter = 0;
    gameOver = false

    images_Walking = [
        './assets/images/charakter/run/green__0012_run_1.png',
        './assets/images/charakter/run/green__0013_run_2.png',
        './assets/images/charakter/run/green__0014_run_3.png',
        './assets/images/charakter/run/green__0015_run_4.png',
        './assets/images/charakter/run/green__0016_run_5.png',
        './assets/images/charakter/run/green__0017_run_6.png',
    ];
    images_jumping = [
        'assets/images/charakter/jump/green__0027_jump_1.png',
        'assets/images/charakter/jump/green__0028_jump_2.png',
        'assets/images/charakter/jump/green__0029_jump_3.png',
        'assets/images/charakter/jump/green__0030_jump_4.png',
    ];
    images_dead = [
        'assets/images/charakter/dead/green__0022_dead_1.png',
        'assets/images/charakter/dead/green__0023_dead_2.png',
        'assets/images/charakter/dead/green__0024_dead_3.png',
        'assets/images/charakter/dead/green__0025_dead_4.png',
        'assets/images/charakter/dead/green__0026_dead_5.png',
    ];
    images_hurt = [
        'assets/images/charakter/hurt/green__0018_hurt_1.png',
        'assets/images/charakter/hurt/green__0019_hurt_2.png',
        'assets/images/charakter/hurt/green__0020_hurt_3.png',
        'assets/images/charakter/hurt/green__0021_hurt_4.png',
    ];
    images_idle = [
        'assets/images/charakter/idle/green__0000_idle_1.png',
        'assets/images/charakter/idle/green__0001_idle_2.png',
        'assets/images/charakter/idle/green__0002_idle_3.png',
    ];

    constructor() {
        super().loadImage(this.images_idle[0])
        this.loadImages(this.images_Walking);
        this.loadImages(this.images_jumping);
        this.loadImages(this.images_dead);
        this.loadImages(this.images_hurt);
        this.loadImages(this.images_idle);
        this.applyGravitation();
        this.animate();
    }

/**
 * this method get started with the Constructor and start two new Methods
 */
    animate() {
        this.movement();
        this.status();
    }

/**
 * this methis check via Intervall if some of the movements are true and runs the animation 
 */
    movement() {
        setStoppableIntervall(() => {
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.otherDirection = false;
                this.moveRight();
            }
            if (this.world.keyboard.left && this.x > -500) {
                this.otherDirection = true;
                //     runCharacter.play();
                this.moveLeft()
            }
            if (this.world.keyboard.space && !this.isAboveGround()) {
                this.jump()
            }
            this.world.camera_x = -this.x + 75;
        }, 1000 / 60)
    }

    /**
     * this method check´s via intervall the status fron the character, if one status is true the Animation gets loaded 
     */
    status() {
        this.deadOrHurt();
        this.jumpOrRun();
        setStoppableIntervall(() => {
            this.idleCharacter();
        }, 400)
    }

    /**
     * play´s the right animation for the current status of the character
     */
    deadOrHurt(){
        setStoppableIntervall(() => {
            if (this.isDead()) {
                this.gameOver = true;
                gameOver.play();
                intervallIds.forEach(clearInterval)
                this.playAnimation(this.images_dead);
                setTimeout(() => {
                    stopGame();
                }, 1000);
            }
        }, 200)

        setStoppableIntervall(() => {
            if (this.isHurt()) {
                this.idleCounter = 0;

                hurtCharacter.play();
                this.playAnimation(this.images_hurt);
            }
        }, 100)
    }

     /**
     * play´s the right animation for the current status of the character
     */
    jumpOrRun(){
        setStoppableIntervall(() => {
            if (this.isAboveGround()) {
                this.idleCounter = 0;
                this.playAnimation(this.images_jumping);
            }
        }, 125)

        setStoppableIntervall(() => {
            if (this.world.keyboard.right || this.world.keyboard.left) {
                this.idleCounter = 0;
                runCharacter.play();
                this.playAnimation(this.images_Walking);
            }
        }, 75)
    }

    /**
     * this method count the time when the Character is doing nothing, after a while the idle Animation gets started 
     */
    idleCharacter() {
        if (!this.isAboveGround()) {
            this.idleCounter += 25
            if (this.idleCounter >= 25 && this.idleCounter < 50) {
                const currentImagePath = this.images_idle[0];
                if (this.img !== this.imageChache[currentImagePath]) {
                    this.loadImage(currentImagePath);
                }
            }
            if (!this.isAboveGround()) {
                this.idleCounter += 25
                if (this.idleCounter >= 1500) {
                    this.playAnimation(this.images_idle);
                }
            }
        }
    }
}