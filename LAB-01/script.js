// Utwórz w html cztery pola tekstowe i przycisk "Przelicz"
// Po naciśnięciu "Przelicz" pokaż na stronie sumę, średnią, min i max z wartości wpisanych do pól tekstowych.
const btn = document.querySelector(".calculate");
const addField = document.querySelector(".addField");

const form = document.querySelector(".calculator");
const field1 = document.querySelector(".field1");
const field2 = document.querySelector(".field2");
const field3 = document.querySelector(".field3");

const sumField = document.querySelector(".sum"); 
const avgField = document.querySelector(".avg"); 
const minField = document.querySelector(".min"); 
const maxField = document.querySelector(".max"); 

const shame = () =>{
  let sum = +field1.value + +field2.value + +field3.value;
  
  let avg = sum / 3;
  
  let minimum = Math.min(
    field1.value, 
    field2.value,
    field3.value, 
  );

  let maximum = Math.max(
    field1.value, 
    field2.value,
    field3.value, 
  );

  sumField.innerHTML = sum;
  avgField.innerHTML = avg;
  minField.innerHTML = minimum;
  maxField.innerHTML = maximum;
  
}

// Wyliczone wartości pokazuj live gdy tylko użytkownik zmieni wartość w polu tekstowym

const fields = document.querySelector(".calculator");

const zieww = () =>{
  let sum = +field1.value + +field2.value + +field3.value;
  
  let avg = sum / 3;
  
  let minimum = Math.min(
    field1.value, 
    field2.value,
    field3.value, 
  );

  let maximum = Math.max(
    field1.value, 
    field2.value,
    field3.value, 
  );

    sumField.textContent = sum;
    avgField.textContent = avg;
    minField.textContent = minimum;
    maxField.textContent = maximum;
}

const normal = () =>{
  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  form.appendChild(createInput);
}

//btn.addEventListener('click', shame);
addField.addEventListener('click', normal)
fields.addEventListener('change', zieww);