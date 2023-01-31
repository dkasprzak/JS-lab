class Weather{
  constructor(weatherIcon, city, temperature, humidity){
    this.weatherIcon = weatherIcon;
    this.city = city;
    this.temperature = temperature;
    this.humidity = humidity;
  }
}

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

    const newWeather = new Weather(weatherIcon, city, temperature, humidity);
    let weatherArr = JSON.parse(localStorage.getItem('weatherInfo')) || [];
    if(weatherArr.length >= 10){
      shift();
    }
    weatherArr.push(newWeather);

    localStorage.setItem('weatherInfo', JSON.stringify(weatherArr.slice(-10)));

    renderWeather(newWeather);  
  })
  .catch(error => {
    showError("Connect issue");
  });
};

const renderWeather = (weather) => {
const watherContentChild = document.createElement('div');
watherContentChild.className = "wetaher-content-child";
watherContentChild.innerHTML = `
  <div class="deleteBtn">
    <img src="./icons/icon-close.png" alt="close-icon"/>
  </div>
  <div class="city-title">
    <h2>${weather.city}</h2>
  </div>
  <div class="weather">
    <img  class="weatherIcon" src="" alt="icon"/>
    <span class="temperature">${weather.temperature} &#x2103;</span></br>
    <span class="humidity">Humidity: ${weather.humidity}&#x25;</span>
  </div>  
`
watherContentChild.querySelector('.weatherIcon').src=`http://openweathermap.org/img/wn/${weather.weatherIcon}@2x.png`

  watherContentChild.querySelector('.deleteBtn').addEventListener('click', (e) => {
    watherContentChild.remove();
    let weatherArr = JSON.parse(localStorage.getItem('weatherInfo')) || [];
    weatherArr = weatherArr.filter((w) => w.city !== weather.city);
    localStorage.setItem('weatherInfo', JSON.stringify(weatherArr.slice(-10)));
    });
    output.appendChild(watherContentChild);

}; 

const getWeatherFromLocalStorage = () => {
  let weatherArr = JSON.parse(localStorage.getItem('weatherInfo')) || [];
  weatherArr.forEach(weather => {
    renderWeather(weather);
  });
}

window.addEventListener("load", () => {
  getWeatherFromLocalStorage();
});

searchBtn.addEventListener('click', (e) => {  
  const city = searchCity.value;
   e.preventDefault();
   getWeather(city);
});