let mainMusic = new Audio('./assets/audio/mainSound.mp3');
let jump = new Audio('./assets/audio/jump.mp3');
let bottleBreak = new Audio('./assets/audio/bottleBreaking.mp3');
let bottleCollect = new Audio('./assets/audio/bottleCollect.mp3');
let chicken = new Audio('./assets/audio/chicken.mp3');
let coinCollect = new Audio('./assets/audio/coin.mp3');
let gameOver = new Audio('./assets/audio/gameOver.mp3');
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



mainMusic.volume = .15;
runCharacter.volume = .25;
slash.volume = .2;
runBoss.volume = .25;
bottleCollect.volume = .2;
bottleBreak.volume = .2;
jumpCollision.volume = .2;
hurtBoss.volume = .3;
hurtCharacter.volume = .3;
slide.volume = .5;
chicken.volume = .5;


/**
 * save the currentSoundSettings to the localStorage
 */
function setAudioSettings() {
    let settings = localStorage.getItem('audioEnabled');

    if (settings === 'true') {
        localStorage.setItem('audioEnabled', 'false');
    } else {
        localStorage.setItem('audioEnabled', 'true');
    }
    muteAllSounds();
}

/**
 * toggle all Sounds
 * @returns closes the function when the localStorage is empty
 */
function muteAllSounds() {
    let settings = localStorage.getItem('audioEnabled');
    if (settings === null ) {
        return
    }
    if (settings === 'true') {
        disableBorder();
        allAudios.forEach(audio => {
            audio.muted = false})
    } else {
        enableBorder();
        allAudios.forEach(audio => {
            audio.muted = true})
    }
         changeSoundButton();
    
}


/**
 * show the border to all buttons and icons which are able to mute the sounds
 */
function enableBorder() {
    const topIcon = document.getElementById('volumeTop')
    const bottemIcon = document.getElementById('volumeBottom')
    const icon = document.getElementById('volume');
    const iconDesktop = document.getElementById('volumeDesk');
    const mobileIcon = document.getElementById('mobileIcon');

    icon.src = './assets/images/volume_off.png';
    iconDesktop.src = './assets/images/volume_off.png'
    topIcon.classList.add('border');
    bottemIcon.classList.add('border');
    mobileIcon.classList.add('border');
}

/**
 * remove the border to all buttons and icons which are able to mute the sounds
 */
function disableBorder() {
    const topIcon = document.getElementById('volumeTop')
    const bottemIcon = document.getElementById('volumeBottom')
    const icon = document.getElementById('volume');
    const iconDesktop = document.getElementById('volumeDesk');
    const mobileIcon = document.getElementById('mobileIcon');

    icon.src = './assets/images/volume_up.png';
    iconDesktop.src = './assets/images/volume_up.png';
    topIcon.classList.remove('border');
    bottemIcon.classList.remove('border');
    mobileIcon.classList.remove('border');
}

/**
 * UserFeedback for the muteButton
 */
function changeSoundButton(){
    let btn = document.getElementById('volumeBottom')
    if (!btn.classList.contains('border')) {
        btn.innerText = 'Sound enabled'
        btn.style.color = "black"
    } else{
        btn.innerText = 'Sound disabled'
        btn.style.color = "white"
    }
}