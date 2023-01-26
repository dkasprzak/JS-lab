const searchCity = document.querySelector("#searchCity");
const searchBtn = document.querySelector("#searchBtn");
const output = document.querySelector(".wather-section");

const API_KEY = '5e126d96c061c518602f08ff5a8fe77e';

const getWeather = (city) => {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)
  .then(response => response.json())
  .then(data => {

    const temperature = Math.round(data.main.temp - 272.15);
    const city = data.name;
    output.innerHTML = `
    City: ${city} <br>
    Temperature: ${temperature} &#8451   
    `;
  })
  .catch(error => {
    showError("Connect issue")
  });
};
  
 

searchBtn.addEventListener('click', (e) => {  
  const city = searchCity.value;
   e.preventDefault();
   getWeather(city);
});