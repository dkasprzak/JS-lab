const searchCity = document.querySelector("#searchCity");
const searchBtn = document.querySelector("#searchBtn");
const output = document.querySelector(".wather-section");

const API_KEY = "70a93eb9cb351bc0b11a03f8778d2dd6";

const getWeather = async (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    output.innerHTML = `${temperature}`;
  })
  .catch(error => {
    showError("Connect issue")
  });
};
  
 

searchBtn.addEventListener('click', () => {
    const city = searchCity.value;
    getWeather(city);
});