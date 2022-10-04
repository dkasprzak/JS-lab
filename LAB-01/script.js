// Utwórz w html cztery pola tekstowe i przycisk "Przelicz"
// Po naciśnięciu "Przelicz" pokaż na stronie sumę, średnią, min i max z wartości wpisanych do pól tekstowych.
const btn = document.querySelector(".calculate");
const field1 = parseInt(document.querySelector(".field1").value);
const field2 = parseInt(document.querySelector(".field2").value);
const field3 = parseInt(document.querySelector(".field3").value);
const field4 = parseInt(document.querySelector(".field4").value);

function shame(){
  let sum = field1 + field2 + field3 + field4;
  let avg = (field1 + field2 + field3 + field4)/4;
  let minimum = Math.min(field1, field2 ,field3, field4)
  let maximum = Math.max(field1, field2, field3, field4);
    
  document.querySelector(".sum").innerHTML = sum; 
  document.querySelector(".avg").innerHTML = avg; 
  document.querySelector(".min").innerHTML = minimum; 
  document.querySelector(".max").innerHTML = maximum; 
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

// numbers.addEventListener('change', zieww);