const currentTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherCaption = document.querySelector("#weather-caption");
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#wind-chill");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.76&lon=-111.89&units=imperial&exclude=hourly,daily&appid=9e8d90bba9cda54ecc2cd9440020ee30"

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch(url);



function displayResults(weatherData) {

    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}°`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
    weatherCaption.innerHTML = weatherData.weather[0].description;
    windSpeed.innerHTML = weatherData.wind.speed.toFixed(0);

    windChill.textContent = calculateWindChill(weatherData.main.temp.toFixed(0), weatherData.wind.speed.toFixed(0));
}

function calculateWindChill(t, v) {

    if (t <= 50 && v > 3) {
        const windChill = (0.0817 * (3.71 * v ** 0.5 + 5.81 - 0.25 * v) * (t - 91.4) + 91.4).toFixed(0);
        return windChill;
    } else {
        return "N/A";
    }
}