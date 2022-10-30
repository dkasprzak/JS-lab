document.addEventListener('keypress', onKeyPress);

const KeyToSound = {
    'a': document.querySelector('#clap'),
    's': document.querySelector('#boom'),
    'd': document.querySelector('#hihat'),
    'f': document.querySelector('#kick'),
    'g': document.querySelector('#openhat'),
    'h': document.querySelector('#ride'),
    'j': document.querySelector('#snare'),
    'k': document.querySelector('#tink'),
    'l': document.querySelector('#tom')
}

function onKeyPress(event){
    const sound = KeyToSound[event.key];
    playSound(sound);
}

function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}