class Endboss extends MoveableObject {
    y = 25;
    height = 525;
    width = 525;
    otherDirection = true;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    speed = 1.5;
    bossEnergy = 100;


    // hurtAnimation = false;
    animationPlayed = false;
    state = {
        attack: false,
        hurted: false,
        follow: false,
        dead: false,
        run: false
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


    animate(){
        setInterval(() => {
            if (this.state.dead) {
                win.play();
                this.bossIsDead();
            } else if (this.state.hurted) {
                hurtBoss.play();
                this.bossIsHurted();
            } else if (this.checkDistance()) {
                slash.play();
                this.bossIsAttacking();
            } else if (!this.animationPlayed) {
                slide.play();
                this.bossIsSlidingIn();
            } else {
                runBoss.play();
                this.bossIsRunning();
            }
        }, 100);
    }


    bossIsDead(){
        this.playAnimation(this.images_DEAD);
    }

    bossIsHurted(){
       this.playAnimation(this.images_HURT);
        setTimeout(()=>{
            this.state.hurted = false;
        },500)
    }

    bossIsAttacking(){
        this.playAnimation(this.images_Slashing);
    }

    bossIsSlidingIn(){
        this.playAnimation(this.images_SLIDING);
        this.x -= 25
        if (this.x < 3050) {
            this.x = 3050;
        this.animationPlayed = true;
        }
    }

    bossIsRunning(){
        this.moveLeft();
        this.playAnimation(this.images_running);
        this.dontRunThru();
    }


    checkDistance(){
        this.offset.left = 50
        let character = world.character.x;
        let endboss = this.x;
        let gap = endboss - character;
            if (gap < 10 && gap > -200) {
                this.state.attack = true;
                return true
            } else{
                this.state.attack = false;
                return false
            }
    }

        takeDamage() {
            this.bossEnergy -= 20;
            console.log("Boss Energy:", this.bossEnergy);
            if (this.bossEnergy <= 0) {
                this.bossEnergy = 0;
                this.state.dead = true
            }
        }

        dontRunThru(){
            let boss = this.x
            world.level.level_end_x = boss
        }
}

