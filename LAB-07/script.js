const searchCity = document.querySelector("#searchCity");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener('click', function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity.value + "&units=metric" + "&APPID=565e4d8719359b6e425d0db62d742927")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => alert("Wrong city name"));
});