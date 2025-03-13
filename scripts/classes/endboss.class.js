class Endboss extends MoveableObject {
    y = 25;
    height = 525;
    width = 525;
    otherDirection = true;
    animationPlayed = false;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    speed = 1.5;


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

    animate() {
        if (this.animationPlayed) {
            return
        } else {
            this.slideInterval = setInterval(() => {
                this.playAnimation(this.images_SLIDING);
                this.x -= 25
                if (this.x < 3050) {
                    this.x = 3050;
                    this.attackCharacter();
                }
            }, 1000 / 60);
            this.animationPlayed = true
        }
    }

    attackCharacter() {
        this.resetIntervall();
        this.offset.left = 50;
        clearInterval(this.slideInterval);
        let startFrame = this.currentImage;
        this.attack = setInterval(() => {
            this.playAnimation(this.images_Slashing);
            if (this.currentImage - startFrame >= this.images_Slashing.length) {
                clearInterval(this.attack)
            }
        }, 100)
        this.followCharacter();
    }


    followCharacter() {
        let character = world.character;
        this.follow = setInterval(() => {
            if (character.x < this.x) {
                this.x = character.x
                world.level.level_end_x = this.x + 150;
            }
        }, 100)
        setTimeout(() => {
            this.runLeft()
        }, 100);
    }

    runLeft() {
        // this.offset.left = 190
        clearInterval(this.follow)
        setTimeout(() => {
            this.MoveIntervall = setInterval(() => {
                this.moveLeft();
                this.offset.left = 190
            }, 1000 / 60);
            this.AnimateIntervall = setInterval(() => {
                this.playAnimation(this.images_running)
            }, 40);
            this.thinkIntervall = setInterval(() => {
                this.checkDistance()
            }, 250)

        }, 750)
    }

    resetIntervall() {
        clearInterval(this.MoveIntervall);
        clearInterval(this.AnimateIntervall);
        clearInterval(this.thinkIntervall);
    }

    checkDistance() {
        this.offset.left = 50
        let character = world.character.x;
        let endboss = this.x;
        let gap = endboss - character;
        if (gap < 100 && gap > -200) {
            this.attackCharacter();
        }
    }
}


