let mainMusic = new Audio('./assets/audio/mainSound.mp3');
let jump = new Audio('./assets/audio/jump.mp3');
let bottleBreak = new Audio('./assets/audio/bottleBreaking.mp3');
let bottleCollect = new Audio('./assets/audio/bottleCollect.mp3');
let chicken = new Audio ('./assets/audio/chicken.mp3');
let coinCollect = new Audio('./assets/audio/coin.mp3');
let gameOver = new Audio ('./assets/audio/gameOver.mp3');
let hurtCharacter = new Audio('./assets/audio/hurtCharacter.mp3');
let hurtBoss = new Audio('./assets/audio/hurtEndboss.mp3');
let jumpCollision = new Audio('./assets/audio/jumpCollision.mp3');
let runCharacter = new Audio('./assets/audio/runCharacter.mp3');
let runBoss = new Audio('./assets/audio/runEndboss.mp3');
let slash = new Audio('./assets/audio/slashing.mp3');
let slide = new Audio('./assets/audio/sliding.mp3');
let win = new Audio('./assets/audio/win.mp3');


let allAudios = [
    mainMusic,
    jump,
    bottleBreak,
    bottleCollect,
    chicken,
    coinCollect,
    gameOver,
    hurtCharacter,
    hurtBoss,
    jumpCollision,
    runCharacter,
    runBoss,
    slash,
    slide,
    win
];

function muteAllSounds(){
    allAudios.forEach(audio => {
        audio.muted = ! audio.muted
    });
}

mainMusic.volume = .05;
runCharacter.volume = .25;
slash.volume = .2;
runBoss.volume =.25;
bottleCollect.volume = .2;
bottleBreak.volume = .2;
jumpCollision.volume = .2;
hurtBoss.volume = .3;
hurtCharacter.volume = .3;
slide.volume = .5;
chicken.volume = .5;




