

let url = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=33.1581&lon=-117.3506&units=imperial&cnt=3&appid=9e8d90bba9cda54ecc2cd9440020ee30"

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // displayResults(data);
            console.log(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch(url);

// function displayResults(weatherData) {

//     currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}°`;
//     weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
//     weatherCaption.innerHTML = weatherData.weather[0].description;
//     windSpeed.innerHTML = weatherData.wind.speed.toFixed(0);

//     windChill.textContent = calculateWindChill(weatherData.main.temp.toFixed(0), weatherData.wind.speed.toFixed(0));
// }