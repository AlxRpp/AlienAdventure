let canvas;
let world;
let keyboard = new Keyboard();
let intervallIds = [];
let mainMusic = new Audio('./assets/audio/mainSound.mp3')
mainMusic.volume = 0;
let jumpSFX = new Audio('./assets/audio/jump.mp3')
jumpSFX.volume = 1;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

};


function startGame() {
    const screen = document.getElementById('startscreen');
    screen.classList.add('d-none');
    console.log("Game beginnt");
    init();
    mainMusic.play();
}

function openImpressum(){
    event.stopPropagation()
    const bubble = document.getElementById('speechBubble');
    bubble.classList.remove('d-none')
}

function closeImpressum(){
    const bubble = document.getElementById('speechBubble');
    bubble.classList.add('d-none')
}


function setStoppableIntervall(fn, time) {
    let id = setInterval(fn, time);
    intervallIds.push(id);
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

