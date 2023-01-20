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

class Channel {
    constructor(playBtn, stopBtn, recordBtn) {
      this.playBtn = playBtn;
      this.stopBtn = stopBtn;
      this.recordBtn = recordBtn;
      this.audio = new Audio();
      this.recorded = [];
      this.isRecording = false;

     this.onKeyPress = (event) => {
        const sound = KeyToSound[event.key];
        this.playSound(sound);
        this.recorded.push(sound);
    };
       
     this.playSound = (sound) =>{
        this.audio.src = sound.src;
        this.audio.currentTime = 0;
        this.audio.play();
    }  
       
  
     this.recordBtn.addEventListener('click', () => {
        if (!this.isRecording) {
            this.recorded = [];
            this.isRecording = true;
            document.addEventListener('keypress', this.onKeyPress.bind(this));
        } else {
            this.isRecording = false;
            document.removeEventListener('keypress', this.onKeyPress.bind(this));
        }
        });
  
      this.stopBtn.addEventListener('click', () => {
        document.removeEventListener('keypress', this.onKeyPress.bind(this));
      });
  
      this.playBtn.addEventListener('click', () => {
        for (let i = 0; i < this.recorded.length; i++) {
          setTimeout(() => {
            this.playSound(this.recorded[i]);
          }, i * 500); // opóźnienie w milisekundach
        }
      });
    }  
}

const chanel1 = new Channel(
    document.querySelector(".play1"),
    document.querySelector(".stop1"),
    document.querySelector(".record1"),
);

const chanel2 = new Channel(
    document.querySelector(".play2"),
    document.querySelector(".stop2"),
    document.querySelector(".record2"),
);

const chanel3 = new Channel(
    document.querySelector(".play3"),
    document.querySelector(".stop3"),
    document.querySelector(".record3"),
);

const chanel4 = new Channel(
    document.querySelector(".play4"),
    document.querySelector(".stop4"),
    document.querySelector(".record4"),
);
