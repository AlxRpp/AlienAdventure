class World {

    ctx;
    canvas;
    character = new Character();
    keyboard;
    camera_x = 0;
    level = level1;
    statusbar = new Statusbar();
    coinStatusbar = new CoinStatusbar();
    bottleStatusbar = new BottleStatusbar();
    amountBottle = 0;
    amountCoin = 0;
    collectedBottles = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToCanvas(this.level.backgrounds);
        this.addObjectToCanvas(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0); // Camera Backwarts
        // Space for fixed Elements
        this.addItemToCanvas(this.statusbar);
        this.addItemToCanvas(this.coinStatusbar);
        this.addItemToCanvas(this.bottleStatusbar);
        this.ctx.translate(this.camera_x, 0); // Camera Forewarts

        this.addObjectToCanvas(this.level.enemies);
        this.addItemToCanvas(this.character);
        this.addObjectToCanvas(this.level.coins);
        this.addObjectToCanvas(this.level.bottles);
        this.addObjectToCanvas(this.level.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(() => {
            this.draw();
        })
    }

    addObjectToCanvas(object) {
        object.forEach(movableObject => {
            this.addItemToCanvas(movableObject);
            // movableObject.drawFrame(this.ctx)
        })
    }

    addItemToCanvas(movableOBJ) {
        if (movableOBJ.otherDirection) {
            movableOBJ.drawFrame(this.ctx)
            movableOBJ.mirroredImage(this.ctx);
        } else {
            // movableOBJ.drawFrame(this.ctx)
            movableOBJ.draw(this.ctx)
        }
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrownObjects();
            this.animateEndboss();
        }, 100)
    }


    checkCollisions() {
        this.charakterEnemyCollision();
        this.characterBottleCollision();
        this.characterCoinCollision();
    }

    charakterEnemyCollision() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.y + this.character.height <= enemy.y) {
                    this.killEnemy(enemy, index);
                }
                if (!enemy.enemyDead) {
                    this.character.hit();
                    this.statusbar.setPercentage(this.character.energy);
                }
            }
        });
    }

    killEnemy(enemy, index) {
        if (this.character.isColliding(enemy)) {
            enemy.stopAnimation();
            enemy.loadImage(enemy.images_Dead);
            if (!enemy.enemyDead) {
                this.character.jump();
                enemy.enemyDead = true;
            }
            setTimeout(() => {
                enemy.loadImage(enemy.images_Empty);
                this.level.enemies.splice(index, 1)
            }, 1000)
        }
    }

    characterCoinCollision() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.amountCoin += 20;
                this.level.coins.splice(index, 1)
                this.coinStatusbar.setPercentage(this.amountCoin)
            }
        });
    }

    characterBottleCollision() {
        if (this.amountBottle < 100) {
            this.level.bottles.forEach((bottle, index) => {
                if (this.character.isColliding(bottle)) {
                    this.amountBottle += 20;
                    this.level.bottles.splice(index, 1)
                    this.bottleStatusbar.setPercentage(this.amountBottle);
                    this.collectedBottles++;
                }
            });
        }
    }

    checkThrownObjects() {
        if (this.collectedBottles > 0) {
            this.throwObjects();
        }
    }

    throwObjects() {
        if (this.keyboard.d && this.character.otherDirection) {
            let thrownBottle = new ThrowableObject(this.character.x - 40, this.character.y - 30, true);
            this.throwBottle(thrownBottle);
            this.bottleEnemyCollision(thrownBottle);

        } else if (this.keyboard.d) {
            let thrownBottle = new ThrowableObject(this.character.x + 40, this.character.y - 30, false);
            this.throwBottle(thrownBottle);
            this.bottleEnemyCollision(thrownBottle);
        }
    }

    throwBottle(thrownBottle) {
        this.level.throwableObjects.push(thrownBottle);
        this.collectedBottles--;
        this.amountBottle -= 20;
        this.bottleStatusbar.setPercentage(this.amountBottle);
        if (this.collectedBottles < 0) {
            this.collectedBottles = 0;
        }
        this.splashBottle(thrownBottle);
    };

    bottleEnemyCollision(thrownBottle) {
        setInterval(() => {
            this.level.throwableObjects.forEach((bottle) => {
                this.level.enemies.forEach((enemy, index) => {
                    if (bottle.isColliding(enemy)) {
                        this.splashBottle(thrownBottle)
                        enemy.stopAnimation();
                        enemy.loadImage(enemy.images_Dead);
                        enemy.enemyDead = true;
                        setTimeout(() => {
                            enemy.loadImage(enemy.images_Empty);
                            this.level.enemies.splice(index, 1)
                        }, 1000)
                    }
                })
            });
        }, 100)

    };

    splashBottle(bottle) {
        this.splashIntervall = setInterval(() => {
            if (bottle.y > 360) {
                bottle.y = 360;
                bottle.playAnimation(bottle.images_BottleSplash);
                clearInterval(this.splashIntervall)
                setTimeout(() => {
                    this.level.throwableObjects.splice(bottle, 1)
                }, 200)
            }
        }, 250)
    };

    animateEndboss(){
        let x = this.character.x;
       if (x > 3000) {
            this.level.enemies[0].animate();
       } 
    }
}