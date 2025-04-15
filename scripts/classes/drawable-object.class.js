/**
 * class for all Objects to draw 
 */
class DrawableObject {
    img;
    x = 120;
    y = 250;
    width = 50;
    height = 150;
    currentImage = 0;
    imageChache = {};

    /**
     * load a single Image e.g. as a startImage
     * 
     * @param {string} path to ImageUrl 
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path
    }

    /**
     * load images from Array 
     * 
     * @param {Array} arr the array with filled Images 
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path
            this.imageChache[path] = img
        });
    }

    /**
     * draw a single Image into the canvas
     * 
     * @param {*} ctx to draw 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    /**
     * draw a hitbox around the object
     * 
     * @param {*} ctx 
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Coins ||
            this instanceof Bottle || this instanceof SmallChicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '1.5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * draws a another box for the setted Offset
     * 
     * @param {*} ctx 
     */
    drawOffsets(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Coins ||
            this instanceof Bottle || this instanceof SmallChicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'blue';
            ctx.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.left - this.offset.right,
                this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
        }
    }
}