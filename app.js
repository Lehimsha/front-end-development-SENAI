// JavaScript code to fetch weather data and update the web application

// Replace with your own weather data or API call
const weatherData = {
  temperature: '35°C',
  location: 'CHENNAI',
  time: '12:00 PM',
  date: 'AUG 13, 2023',
  humidity: 'Humidity:70%',
  wind: 'Wind:20 km/h',
  rain: '5 mm'
};

function updateWeather() {
  const temperatureElement = document.querySelector('.temperature');
  const locationElement = document.querySelector('.location');
  const timeElement = document.querySelector('.time');
  const dateElement = document.querySelector('.date');
  const humidityElement = document.querySelector('.info:nth-of-type(1)');
  const windElement = document.querySelector('.info:nth-of-type(2)');
  const rainElement = document.querySelector('.info:nth-of-type(3)');

  temperatureElement.textContent = weatherData.temperature;
  locationElement.textContent = weatherData.location;
  timeElement.textContent = weatherData.time;
  dateElement.textContent = weatherData.date;
  humidityElement.textContent = weatherData.humidity;
  windElement.textContent = weatherData.wind;
  rainElement.textContent = weatherData.rain;
}

// Call the function to update the weather information
updateWeather();
