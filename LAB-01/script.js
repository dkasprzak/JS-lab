document.querySelector("#calculate").addEventListener('click', shame);

// Utwórz w html cztery pola tekstowe i przycisk "Przelicz"
// Po naciśnięciu "Przelicz" pokaż na stronie sumę, średnią, min i max z wartości wpisanych do pól tekstowych.

function shame(){
    const a = parseInt(document.querySelector("#field1").value);
    const b = parseInt(document.querySelector("#field2").value);
    const c = parseInt(document.querySelector("#field3").value);
    const d = parseInt(document.querySelector("#field4").value);

    const sum = a + b + c + d;
    const avg = (a + b + c + d)/4;
    const minimum = Math.min(a, b, c, d)
    const maximum = Math.max(a, b, c, d);

    document.querySelector("#sum").innerHTML = sum; 
    document.querySelector("#avg").innerHTML = avg; 
    document.querySelector("#min").innerHTML = minimum; 
    document.querySelector("#max").innerHTML = maximum; 
}

//Wyliczone wartości pokazuj live gdy tylko użytkownik zmieni wartość w polu tekstowym



const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

const liczby = document.querySelector(".calculator");
const a1 = document.querySelector("#sum"); 
const a2 = document.querySelector("#avg");
const a3 = document.querySelector("#min");
const a4 = document.querySelector("#max");

liczby.addEventListener('change', zieww);

function zieww(e){
    const a = parseInt(document.querySelector("#field1").value);
    const b = parseInt(document.querySelector("#field2").value);
    const c = parseInt(document.querySelector("#field3").value);
    const d = parseInt(document.querySelector("#field4").value);

    const sum = a + b + c + d;
    const avg = (a + b + c + d)/4;
    const minimum = Math.min(a, b, c, d)
    const maximum = Math.max(a, b, c, d);

    a1 = document.querySelector("#sum").innerHTML = sum;
    a1.textContent = e.target.value;


}