 let level1 ;

 /**
  * this level includ´s all objects to draw for the level 1
  */
 function initLvl1(){
    level1 = new Level(
        [
            new Endboss(),
            new Chicken(),
            new SmallChicken(),
            new Chicken(),
            new SmallChicken(),
            new Chicken(),
            new SmallChicken(),
            new SmallChicken(),
            new Chicken(),
            new SmallChicken(),
            new Chicken(),
            new Chicken(),
            new SmallChicken()
        ],
        [
            new Clouds('./assets/images/background/4_clouds/1.png'),
            new Clouds('./assets/images/background/4_clouds/1.png'),
            new Clouds('./assets/images/background/4_clouds/1.png'),
            new Clouds('./assets/images/background/4_clouds/1.png'),
            new Clouds('./assets/images/background/4_clouds/1.png'),
            new Clouds('./assets/images/background/4_clouds/1.png'),
            new Clouds('./assets/images/background/4_clouds/1.png'),
        ],
        [
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
        ],
        [
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
        ],
        [
            // ThrowableObjects
        ],
        [
            new Background('./assets/images/background/Sky.png', -1024 * 2),
            new Background('./assets/images/background/Background.png', -1024 * 2),
            new Background('./assets/images/background/Foreground.png', -1024 * 2),
            new Background('./assets/images/background/Ground.png', -1024 * 2),
            new Background('./assets/images/background/Sky.png', -1024),
            new Background('./assets/images/background/Background.png', -1024),
            new Background('./assets/images/background/Foreground.png', -1024),
            new Background('./assets/images/background/Ground.png', -1024),
            new Background('./assets/images/background/Sky.png', 0),
            new Background('./assets/images/background/Background.png', 0),
            new Background('./assets/images/background/Foreground.png', 0),
            new Background('./assets/images/background/Ground.png', 0),
            new Background('./assets/images/background/Sky.png', 1024),
            new Background('./assets/images/background/Background.png', 1024),
            new Background('./assets/images/background/Foreground.png', 1024),
            new Background('./assets/images/background/Ground.png', 1024),
            new Background('./assets/images/background/Sky.png', 1024 * 2),
            new Background('./assets/images/background/Background.png', 1024 * 2),
            new Background('./assets/images/background/Foreground.png', 1024 * 2),
            new Background('./assets/images/background/Ground.png', 1024 * 2),
            new Background('./assets/images/background/Sky.png', 1024 * 3),
            new Background('./assets/images/background/Background.png', 1024 * 3),
            new Background('./assets/images/background/Foreground.png', 1024 * 3),
            new Background('./assets/images/background/Ground.png', 1024 * 3),
        ]
    );
 }