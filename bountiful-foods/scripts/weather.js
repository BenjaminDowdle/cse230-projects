const url = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=9e8d90bba9cda54ecc2cd9440020ee30";

let container = document.querySelector("#weather-container");

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch(url);

function displayWeather(forecast){
    let current = document.createElement("h2");
    let condition = document.createElement("p");
    let humidity = document.createElement("p");
    
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");

    let d1High = document.createElement("h4");
    let d1Low = document.createElement("h4");
    let d2High = document.createElement("h4");
    let d2Low = document.createElement("h4");
    let d3High = document.createElement("h4");
    let d3Low = document.createElement("h4");

    current.textContent = forecast.list[0].main.temp.toFixed(0);
    

    container.appendChild(current)


}