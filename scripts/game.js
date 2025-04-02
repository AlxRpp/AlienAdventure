let canvas;
let world;
let keyboard = new Keyboard();
let intervallIds = [];


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

function touchButton(){
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