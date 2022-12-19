//tablica zdjęć
const photos = ['./photos/photo1.jpg', './photos/photo2.jpg', './photos/photo3.jpg', './photos/photo4.jpg'];
const slider = document.querySelector('.slider');
const buttons = document.querySelector('.buttons');
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const pauseBtn = document.querySelector('.pause');

//tworzy zdjęcia na stronie z tablicy
photos.forEach(image => {
   const img = document.createElement('img');
   img.src = image;
   img.alt = "photo"
   img.width = "600"
   img.height = "400";
   slides.appendChild(img);
});

//tworzy kropki
const dots = document.createElement('div');
dots.className = "dots";
buttons.appendChild(dots);

for(let i = 0; i < photos.length; i++){
   const dot = document.createElement('button');
   dot.className = "dot";
   dots.appendChild(dot);
}

const imgTag = document.querySelector('img');

let currentPhoto = 0;

const nextPhoto = () => {
   currentPhoto++;
   if(currentPhoto >= photos.length){
      currentPhoto = 0;
      imgTag.src = photos[currentPhoto];
   }else{
      imgTag.src = photos[currentPhoto];
   }
   activeDot();
}

const prevPhoto = () => {
   currentPhoto--;
   if(currentPhoto < 0){
      currentPhoto = photos.length - 1;
      imgTag.src = photos[currentPhoto];
   }else{
      imgTag.src = photos[currentPhoto];
   }
   activeDot();
}

const allDots = document.querySelectorAll('.dot');

const activeDot = () => {
   for (let i = 0; i < allDots.length; i++) {
   allDots[i].classList.remove('active');
  }
  allDots[currentPhoto].classList.add('active');
}



let intervalId;

const startSlideShow = () => {
   clearInterval(intervalId);
   intervalId = setInterval(nextPhoto, 3000);
}

const stopSlideShow = () => {
   clearInterval(intervalId);
   setTimeout(startSlideShow, 10000)
}


nextBtn.addEventListener('click',  () => {
   nextPhoto();
   activeDot();
   stopSlideShow();
 });

prevBtn.addEventListener('click', () => {
   prevPhoto();
   activeDot();
   stopSlideShow();
 });

pauseBtn.addEventListener('click', () => {
   stopSlideShow();
});

 allDots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
     currentPhoto = index;
     imgTag.src = photos[currentPhoto];
     activeDot();
     stopSlideShow();
   });
 });
 

 startSlideShow();