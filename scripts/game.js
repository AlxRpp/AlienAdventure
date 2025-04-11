let canvas;
let world;
let keyboard = new Keyboard();
let intervallIds = [];
let wonIMG = './assets/images/You won, you lost/You won A.png';
let gameOverIMG = './assets/images/You won, you lost/Game over A.png'


function init() {
    canvas = document.getElementById('canvas');
    initLvl1();
    world = new World(canvas, keyboard);
    mainMusic.play();
};


function startGame() {
    const screen = document.getElementById('startscreen');
    screen.classList.add('d-none');
    init();
}

function openImpressum() {
    event.stopPropagation()
    const bubble = document.getElementById('speechBubble');
    bubble.classList.remove('d-none')
}

function closeImpressum() {
    const bubble = document.getElementById('speechBubble');
    bubble.classList.add('d-none')
}


function setStoppableIntervall(fn, time) {
    let id = setInterval(fn, time);
    intervallIds.push(id);
    return id;
};


window.addEventListener("keydown", (event) => {
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

window.addEventListener("keyup", (event) => {
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


function stopGame() {
    const screen = document.getElementById('endScreen')
    intervallIds.forEach(clearInterval)
    setTimeout(() => {
        screen.classList.remove('d-none');
        getFinalImg();
        stopAllAudio();
        removeFinalImg();
    }, 1000);
}

function goToStartScrren() {
    const endScreen = document.getElementById('endScreen')
    const startscreen = document.getElementById('startscreen')
    endScreen.classList.add('d-none');
    startscreen.classList.remove('d-none');
}


function stopAllAudio() {
    allAudios.forEach((audio) => {
        audio.pause()
        audio.currentTime = 0;
    })
}

function resetGame(){
    const endScreen = document.getElementById('endScreen')
    endScreen.classList.add('d-none');
    init();
}

function getFinalImg(){
    let deadBoss = world.level.enemies[0].state.dead;
    let gameover = document.getElementById('gameOver');
    let win = document.getElementById('win');
    if (deadBoss) {
        gameover.classList.add('d-none');
        win.classList.remove('d-none');

    } else{
        gameover.classList.remove('d-none');
        win.classList.add('d-none');
    }
}


function removeFinalImg(){
    setTimeout(()=>{
        let gameover = document.getElementById('gameOver');
        let win = document.getElementById('win');
        win.classList.add('d-none');
        gameover.classList.add('d-none');
    },1000)


}

function saveSoundSettings(){
       localStorage.setItem('audioEnabled', 'true')
}


