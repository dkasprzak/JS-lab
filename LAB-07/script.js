const searchCity = document.querySelector("#searchCity");
const searchBtn = document.querySelector("#searchBtn");
const output = document.querySelector(".wather-section");

const API_KEY = "70a93eb9cb351bc0b11a03f8778d2dd6";

const getWeather = (city) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          const temperature = response.main.temp;
          output.innerHTML = `${temperature}`;
        } else {
          showError("An error occurred while getting the weather data.");
        }
    };
    xhr.open(
      "GET",
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    xhr.send();
  };
  
 

searchBtn.addEventListener('click', () => {
    const city = searchCity.value;
    getWeather(city);
});