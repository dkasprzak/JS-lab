// Utwórz w html cztery pola tekstowe i przycisk "Przelicz"
// Po naciśnięciu "Przelicz" pokaż na stronie sumę, średnią, min i max z wartości wpisanych do pól tekstowych.
const btn = document.querySelector(".calculate");

const field1 = document.querySelector(".field1");
const field2 = document.querySelector(".field2");
const field3 = document.querySelector(".field3");
const field4 = document.querySelector(".field4");

const sumField = document.querySelector(".sum"); 
const avgField = document.querySelector(".avg"); 
const minField = document.querySelector(".min"); 
const maxField = document.querySelector(".max"); 

const shame = () =>{
  let sum = +field1.value + +field2.value + +field3.value + +field4.value;
  
  let avg = sum / 4;
  
  let minimum = Math.min(
    field1.value, 
    field2.value,
    field3.value, 
    field4.value
  );

  let maximum = Math.max(
    field1.value, 
    field2.value,
    field3.value, 
    field4.value
  );

  sumField.innerHTML = sum;
  avgField.innerHTML = avg;
  minField.innerHTML = minimum;
  maxField.innerHTML = maximum;
  
}

//Wyliczone wartości pokazuj live gdy tylko użytkownik zmieni wartość w polu tekstowym
// function zieww(e){
//     const sum = a + b + c + d;
//     const avg = (a + b + c + d)/4;
//     const minimum = Math.min(a, b, c, d)
//     const maximum = Math.max(a, b, c, d);

//     a1 = document.querySelector(".sum").innerHTML = sum;
//     a1.textContent = e.target.value;
// }

btn.addEventListener('click', shame);
// numbers.addEventListener('change', zieww);