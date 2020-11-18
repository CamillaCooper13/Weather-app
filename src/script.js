function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
    let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response){
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let precipitationElement = document.querySelector("#precipitation");
  let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  precipitationElement.innerHTML = response.data.precipitation;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute = ("src", `https://ssl.gstatic.com/onebox/weather/64/${response.data.weather[0].icon}sunny.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}
let apiKey  = "8c03abbdd5f78bfba8c1df25fce030aa";
let city = "Paris"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?=Singapore&appid=${apiKey}&units=metric`;



axios.get(apiUrl).then(displayTemperature);