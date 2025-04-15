let canvas;
let world;
let keyboard = new Keyboard();
let intervallIds = [];

/**
 * initialize the world
 */
function init() {
    canvas = document.getElementById('canvas');
    initLvl1();
    world = new World(canvas, keyboard);
    mainMusic.play();
};

/**
 * Startbutton in the StartScreen
 */
function startGame() {
    const screen = document.getElementById('startscreen');
    screen.classList.add('d-none');
    init();
}

/**
 * shows the legalNotice
 */
function openImpressum() {
    event.stopPropagation()
    const bubble = document.getElementById('speechBubble');
    bubble.classList.remove('d-none')
}

/**
 * closes the legalNotice
 */
function closeImpressum() {
    const bubble = document.getElementById('speechBubble');
    bubble.classList.add('d-none')
}

/**
 * Custom Intervall which is easy to clear 
 * 
 * @param {Function} fn is the function in the intervall 
 * @param {number} time the duration time for the intervall 
 * @returns the current intervall id
 */
function setStoppableIntervall(fn, time) {
    let id = setInterval(fn, time);
    intervallIds.push(id);
    return id;
};

/**
 * checks which key is pressed down
 */
window.addEventListener("keydown", (event) => {
    if (world.character.gameOver) {
        return
    }

    if (event.keyCode == 39) {
        keyboard.right = true;
    }
    if (event.keyCode == 37) {
        keyboard.left = true;
    }
    if (event.keyCode == 32) {
        keyboard.space = true;
    }
    if (event.keyCode == 68) {
        keyboard.d = true;
    }
}
);

/**
 * noticed when the pressed key is not more pressed
 */
window.addEventListener("keyup", (event) => {
    if (world.character.gameOver) {
        return
    }
    if (event.keyCode == 39) {
        keyboard.right = false;
    }
    if (event.keyCode == 37) {
        keyboard.left = false;
    }
    if (event.keyCode == 32) {
        keyboard.space = false;
    }
    if (event.keyCode == 68) {
        keyboard.d = false;
    }
}
);

/**
 * mobilePanel for play the game in MobileDevices
 */
function touchButton() {
    document.getElementById('btnLeft').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.left = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.left = false;
    })

    document.getElementById('btnRight').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.right = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.right = false;
    })

    document.getElementById('btnSpace').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.space = true;
    });

    document.getElementById('btnSpace').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.space = false;
    })

    document.getElementById('btnThrow').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.d = true;
    });

    document.getElementById('btnThrow').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.d = false;
    });
}

/**
 * stops the Game when character or boss are dead
 */
function stopGame() {
    const screen = document.getElementById('endScreen')
    intervallIds.forEach(clearInterval)
    getFinalImg();
    setTimeout(() => {
        removeFinalImg();
        stopAllAudio();
        screen.classList.remove('d-none');
    }, 3000);
}

/**
 * return to homeScreen after playing the game
 */
function goToStartScrren() {
    const endScreen = document.getElementById('endScreen')
    const startscreen = document.getElementById('startscreen')
    endScreen.classList.add('d-none');
    startscreen.classList.remove('d-none');
}

/**
 * stops all Audio
 */
function stopAllAudio() {
    allAudios.forEach((audio) => {
        audio.pause()
        audio.currentTime = 0;
    })
}

/**
 * reset the Game
 */
function resetGame() {
    const endScreen = document.getElementById('endScreen')
    endScreen.classList.add('d-none');
    init();
}

/**
 * show the correct (Final)Image at the EndScreen, either GameOver or YouWin
 */
function getFinalImg() {
    let deadBoss = world.level.enemies[0].state.dead;
    let gameover = document.getElementById('gameOver');
    let win = document.getElementById('win');
    if (deadBoss) {
        win.classList.remove('d-none');

    } else {
        gameover.classList.remove('d-none');
    }
}

/**
 * remove the final Image
 */
function removeFinalImg() {
    let gameover = document.getElementById('gameOver');
    let win = document.getElementById('win');
    win.classList.add('d-none');
    gameover.classList.add('d-none');
}

/**
 * load the Sound settings from the localStorage
 */
function loadSoundSettings() {
    let storage = localStorage.getItem('audioEnabled')
    if (!storage) {
        localStorage.setItem('audioEnabled', 'true')
    }
    muteAllSounds();
}