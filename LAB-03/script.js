const playBtn = document.querySelector(".play1");
const stopBtn = document.querySelector(".stop1");
const recordBtn = document.querySelector(".record1");

const playBtn2 = document.querySelector(".play1");
const stopBtn2 = document.querySelector(".stop1");
const recordBtn2 = document.querySelector(".record1");

const playBtn3 = document.querySelector(".play1");
const stopBtn3 = document.querySelector(".stop1");
const recordBtn3 = document.querySelector(".record1");

const playBtn4 = document.querySelector(".play1");
const stopBtn4 = document.querySelector(".stop1");
const recordBtn4 = document.querySelector(".record1");

document.addEventListener('keypress', onKeyPress);

const KeyToSound = {
    'a': document.querySelector('#clap'),
    'A': document.querySelector('#clap'),
    's': document.querySelector('#boom'),
    'S': document.querySelector('#boom'),
    'd': document.querySelector('#hihat'),
    'D': document.querySelector('#hihat'),
    'f': document.querySelector('#kick'),
    'F': document.querySelector('#kick'),
    'g': document.querySelector('#openhat'),
    'G': document.querySelector('#openhat'),
    'h': document.querySelector('#ride'),
    'H': document.querySelector('#ride'),
    'j': document.querySelector('#snare'),
    'J': document.querySelector('#snare'),
    'k': document.querySelector('#tink'),
    'K': document.querySelector('#tink'),
    'l': document.querySelector('#tom'),
    'L': document.querySelector('#tom')
}

let recordedCh1 =[];
let recordedCh2 =[];
let recordedCh3 =[];
let recordedCh4 =[];


recordBtn.addEventListener('click', () => {
    if(playBtn){
        recordedCh1 = [];
    }
    if(playBtn2){
        recordedCh2 = [];
    }
    if(playBtn3){
        recordedCh3 = [];
    }
    if(playBtn4){
        recordedCh4 = [];
    }
    document.addEventListener('keypress', onKeyPress);
});

function onKeyPress(event){
    const sound = KeyToSound[event.key];
    playSound(sound);
    recorded.push(sound);
}

function playSound(sound){
    const audio = new Audio(sound.src);
    audio.currentTime = 0;
    audio.play();
}

stopBtn.addEventListener('click', () => {
    document.removeEventListener('keypress', onKeyPress);
});

playBtn.addEventListener('click', () => {
    for (let i = 0; i < recorded.length; i++) {
    setTimeout(() => {
        playSound(recorded[i]);
        }, i * 500); // opóźnienie w milisekundach
    }
    });