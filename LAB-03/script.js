document.addEventListener('keypress', playSound);

const KeyToSound = {
    'a': document.querySelector('#s1'),
    'b': document.querySelector('#s2')
}

function onKeyPress(event){
    const sound = KeyToSound[event.key];
    playSound(sound);
}

function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}