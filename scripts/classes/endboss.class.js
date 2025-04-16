/**
 * Class for the Endboss
 */
class Endboss extends MoveableObject {
    y = 25;
    height = 525;
    width = 525;
    otherDirection = true;
    offset = {
        top: 125,
        left: 175,
        right: 0,
        bottom: 0
    };
    speed = 15;
    bossEnergy = 100;
    animationPlayed = false;
    state = {
        attack: false,
        hurted: false,
        follow: false,
        dead: false,
        run: false,
    }

    images_IDLE = [
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_000.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_001.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_002.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_003.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_004.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_005.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_006.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_007.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_008.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_009.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_010.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_011.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_012.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_013.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_014.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_015.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_016.png',
        'assets/images/Endboss/Idle Blinking/0_Elemental_Spirits_Idle Blinking_017.png',
    ];
    images_Slashing = [
        'assets/images/Endboss/Slashing/0_Elemental_Spirits_Slashing_000.png',
        'assets/images/Endboss/Slashing/0_Elemental_Spirits_Slashing_001.png',
        'assets/images/Endboss/Slashing/0_Elemental_Spirits_Slashing_002.png',
        'assets/images/Endboss/Slashing/0_Elemental_Spirits_Slashing_003.png',
        'assets/images/Endboss/Slashing/0_Elemental_Spirits_Slashing_004.png',
        'assets/images/Endboss/Slashing/0_Elemental_Spirits_Slashing_005.png',
        'assets/images/Endboss/Slashing/0_Elemental_Spirits_Slashing_006.png',
        'assets/images/Endboss/Slashing/0_Elemental_Spirits_Slashing_007.png',
        'assets/images/Endboss/Slashing/0_Elemental_Spirits_Slashing_008.png',
        'assets/images/Endboss/Slashing/0_Elemental_Spirits_Slashing_009.png',
        'assets/images/Endboss/Slashing/0_Elemental_Spirits_Slashing_010.png',
        'assets/images/Endboss/Slashing/0_Elemental_Spirits_Slashing_011.png',
    ];
    images_running = [
        'assets/images/Endboss/Running/0_Elemental_Spirits_Running_000.png',
        'assets/images/Endboss/Running/0_Elemental_Spirits_Running_001.png',
        'assets/images/Endboss/Running/0_Elemental_Spirits_Running_002.png',
        'assets/images/Endboss/Running/0_Elemental_Spirits_Running_003.png',
        'assets/images/Endboss/Running/0_Elemental_Spirits_Running_004.png',
        'assets/images/Endboss/Running/0_Elemental_Spirits_Running_005.png',
        'assets/images/Endboss/Running/0_Elemental_Spirits_Running_006.png',
        'assets/images/Endboss/Running/0_Elemental_Spirits_Running_007.png',
        'assets/images/Endboss/Running/0_Elemental_Spirits_Running_008.png',
        'assets/images/Endboss/Running/0_Elemental_Spirits_Running_009.png',
        'assets/images/Endboss/Running/0_Elemental_Spirits_Running_010.png',
        'assets/images/Endboss/Running/0_Elemental_Spirits_Running_011.png',
    ];
    images_HURT = [
        'assets/images/Endboss/Hurt/0_Elemental_Spirits_Hurt_000.png',
        'assets/images/Endboss/Hurt/0_Elemental_Spirits_Hurt_001.png',
        'assets/images/Endboss/Hurt/0_Elemental_Spirits_Hurt_002.png',
        'assets/images/Endboss/Hurt/0_Elemental_Spirits_Hurt_003.png',
        'assets/images/Endboss/Hurt/0_Elemental_Spirits_Hurt_004.png',
        'assets/images/Endboss/Hurt/0_Elemental_Spirits_Hurt_005.png',
        'assets/images/Endboss/Hurt/0_Elemental_Spirits_Hurt_006.png',
        'assets/images/Endboss/Hurt/0_Elemental_Spirits_Hurt_007.png',
        'assets/images/Endboss/Hurt/0_Elemental_Spirits_Hurt_008.png',
        'assets/images/Endboss/Hurt/0_Elemental_Spirits_Hurt_009.png',
        'assets/images/Endboss/Hurt/0_Elemental_Spirits_Hurt_010.png',
        'assets/images/Endboss/Hurt/0_Elemental_Spirits_Hurt_011.png',
    ];
    images_DEAD = [
        'assets/images/Endboss/Dying/0_Elemental_Spirits_Dying_000.png',
        'assets/images/Endboss/Dying/0_Elemental_Spirits_Dying_001.png',
        'assets/images/Endboss/Dying/0_Elemental_Spirits_Dying_002.png',
        'assets/images/Endboss/Dying/0_Elemental_Spirits_Dying_003.png',
        'assets/images/Endboss/Dying/0_Elemental_Spirits_Dying_004.png',
        'assets/images/Endboss/Dying/0_Elemental_Spirits_Dying_005.png',
        'assets/images/Endboss/Dying/0_Elemental_Spirits_Dying_006.png',
        'assets/images/Endboss/Dying/0_Elemental_Spirits_Dying_007.png',
        'assets/images/Endboss/Dying/0_Elemental_Spirits_Dying_008.png',
        'assets/images/Endboss/Dying/0_Elemental_Spirits_Dying_009.png',
        'assets/images/Endboss/Dying/0_Elemental_Spirits_Dying_010.png',
        'assets/images/Endboss/Dying/0_Elemental_Spirits_Dying_011.png',
    ];
    images_SLIDING = [
        'assets/images/Endboss/Sliding/0_Elemental_Spirits_Sliding_000.png',
        'assets/images/Endboss/Sliding/0_Elemental_Spirits_Sliding_001.png',
        'assets/images/Endboss/Sliding/0_Elemental_Spirits_Sliding_002.png',
        'assets/images/Endboss/Sliding/0_Elemental_Spirits_Sliding_003.png',
        'assets/images/Endboss/Sliding/0_Elemental_Spirits_Sliding_004.png',
        'assets/images/Endboss/Sliding/0_Elemental_Spirits_Sliding_005.png',
    ];
    images_Empty = "";

    constructor() {
        super().loadImage(this.images_IDLE[0]);
        this.loadImages(this.images_IDLE);
        this.loadImages(this.images_SLIDING);
        this.loadImages(this.images_Slashing);
        this.loadImages(this.images_running);
        this.loadImages(this.images_HURT);
        this.loadImages(this.images_DEAD);
        this.x = 4000;
    }

    /**
     * this method gets started when character reaches certain point in the game.
     * this method checks via Intervall witch status the Endboss have and runs the Animation 
     */
    animate() {
        setStoppableIntervall(() => {
            if (this.state.dead) {
                win.play();
                this.bossIsDead()
            }
        },650)

        setStoppableIntervall(() => {
            if (this.state.hurted) {
                hurtBoss.play();
                this.bossIsHurted();
            }
        }, 300)

        setStoppableIntervall(() => {
            if (this.checkDistance()) {
                slash.play();
                this.bossIsAttacking();
            }
        }, 1500)

        setStoppableIntervall(() => {
            if (!this.animationPlayed) {
                slide.play();
                this.bossIsSlidingIn();
            }
        }, 50)

        setStoppableIntervall(() => {
            if ((!this.state.dead) && (!this.state.hurted) && (!this.state.attack)) {
                runBoss.play();
                this.bossIsRunning();
            }
        }, 550)
    }




    /**
     * Run animation for dead Endboss 
     */
    bossIsDead() {
        this.playAnimation(this.images_DEAD);
        setTimeout(() => {
            stopGame();
        },1000)
    }

    /**
     * Run animation for hurted Endboss
     */
    bossIsHurted() {
        this.playAnimation(this.images_HURT);
        setTimeout(() => {
            this.state.hurted = false;
        }, 500)
    }

    /**
     * Run animation for the attacking Boss 
     */
    bossIsAttacking() {
        this.offset.left = 50
        this.playAnimation(this.images_Slashing);
    }

    /**
     * Run animation for the Slide In
     */
    bossIsSlidingIn() {
        this.playAnimation(this.images_SLIDING);
        this.x -= 30
        if (this.x < 3030) {
            this.x = 3030;
            this.animationPlayed = true;
        }
    }

    /**
     * Run animation for the Running Boss
     */
    bossIsRunning() {
        this.offset.left = 175;
        this.moveLeft();
        this.playAnimation(this.images_running);
        if (world.character.x < 3000) {
            this.dontRunThru();
        }
    }


    /**
     * checks the Distance for the between character and boss, when the gap is small enough the boss attacks the character
     * 
     * @returns 
     */
    checkDistance() {
        let character = world.character.x;
        let endboss = this.x;
        let gap = endboss - character;
        if (gap < 10 && gap > -200) {
            this.state.attack = true;
            return true
        } else {
            this.state.attack = false;
            return false
        }
    }

    /**
     * the boss takes damage when he gets hitted 
     */
    takeDamage() {
        this.bossEnergy -= 20;
        world.bossStatusbar.setPercentage(this.bossEnergy)
        if (this.bossEnergy <= 0) {
            this.bossEnergy = 0;
            this.state.dead = true
        }
    }

    /**
     * the character cant run further than the Boss actually is
     */
    dontRunThru() {
        let boss = this.x
        world.level.level_end_x = boss
    }
}

