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
}

function inpressum(){
    const screen = document.getElementById('startscreen');
    screen.innerHTML = `
    <h1>Impressum</h1>

<p>Alexander Ruppel<br />
Nieh&ouml;rsterstr. 13<br />
33104 Paderborn</p>

<h2>Kontakt</h2>
<p>Telefon: &#91;Telefonnummer&#93;<br />
E-Mail: alexanderr26@outlook.de</p>

<p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
    `;
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

