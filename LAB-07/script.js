const searchCity = document.querySelector("#searchCity");
const searchBtn = document.querySelector("#searchBtn");
const output = document.querySelector(".weather-content");

const API_KEY = '5e126d96c061c518602f08ff5a8fe77e';

const getWeather = (city) => {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)
  .then(response => response.json())
  .then(data => {

    let weatherIcon = data.weather[0].icon;
    let city = data.name;
    let temperature = Math.round(data.main.temp - 272.15);
    let humidity = data.main.humidity;
    const watherContentChild = document.createElement('div');
    watherContentChild.className = "wetaher-content-child";
    watherContentChild.innerHTML = `
      <div class="delete">
        <img src="./icons/icon-close.png" alt="close-icon"/>
      </div>
      <div class="city-title">
        <h2>${city}</h2>
      </div>
      <div class="weather">
        <img  class="weatherIcon" src="" alt="icon"/>
        <span class="temperature">${temperature} &#x2103;</span></br>
        <span class="humidity">Humidity: ${humidity}&#x25;</span>
      </div>  
    `
    watherContentChild.querySelector('.weatherIcon').src=`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    output.appendChild(watherContentChild);  

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