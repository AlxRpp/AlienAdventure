/**
 * this Class contains all the methods for the moveable objects for this game 
 */
class MoveableObject extends DrawableObject {
    speed = .15;
    otherDirection = false;
    speedY = 0;
    acceleration = .8;
    energy = 100
    lastHit = 0;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    enemyDead = false;

    /**
     * this method count the hits for the character and add the damge to him 
     */
    hit() {
        this.energy -= 3;
        if (this.energy < 0) {
            this.energy = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    } 
    
    /**
     * 
     * @returns return for a further if, if the movable Object is dead
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * this method compare the last hit and the the current hit 
     * 
     * @returns in a boolean if the time gap is more than .45 seconds
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < .45;
    }

    /**
     * this methods apply gravitation to all MoveableObjects
     * 
     */
    applyGravitation() {
        setStoppableIntervall(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60)
    }

    /**
     * check if MoveableObject is in the Air
     * 
     * @returns the height for the character
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 330;
        }
    }

    /**
     * move the object to the right 
     */
    moveRight() {
        this.x += this.speed;
    }

     /**
     * move the object to the left 
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * jump for the character 
     */
    jump() {
         jump.play();
        this.speedY = 13;
    }

    /**
     * load the images fron the current array and make them to a animation
     * 
     * @param {Array} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageChache[path]
        this.currentImage++
    }

    /**
     * mirrored the image when the Object is in otherdirction
     * 
     * @param {*} ctx 
     */
    mirroredImage(ctx) {
        ctx.save();
        ctx.translate(this.x + this.width, this.y);
        ctx.scale(-1, 1);
        ctx.drawImage(this.img, 0, 0, this.width, this.height);
        ctx.restore();
    }

    /**
     * Colliding formel for all MoveableObjects
     * 
     * @param {*} mo 
     * @returns 
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

}