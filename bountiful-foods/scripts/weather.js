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
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let p = document.createElement("p");
    let current = document.createElement("h2");
    let condition = document.createElement("p");
    let humidity = document.createElement("p");
    
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");

    div1.setAttribute('class', 'current-temp');
    div2.setAttribute('class', 'forecast');
    div3.setAttribute('class', 'forecast');
    div4.setAttribute('class', 'forecast');

    let d1 = document.createElement("p");
    let d1High = document.createElement("h2");
    let d1Low = document.createElement("h3");
    let d2 = document.createElement("p");
    let d2High = document.createElement("h2");
    let d2Low = document.createElement("h3");
    let d3 = document.createElement("p");
    let d3High = document.createElement("h2");
    let d3Low = document.createElement("h3");

    p.textContent = "Current"
    current.textContent = `${forecast.list[0].main.temp.toFixed(0)}°`;
    condition.textContent = forecast.list[0].weather[0].description;
    humidity.textContent = `Humidity: ${forecast.list[0].main.humidity}%`

    date1 = new Date(forecast.list[8].dt_txt)
    d1.textContent = days[date1.getDay()]
    d1High.textContent = `${forecast.list[8].main.temp_max.toFixed(0)}°`
    d1Low.textContent = `${forecast.list[12].main.temp_min.toFixed(0)}°`

    date2 = new Date(forecast.list[16].dt_txt)
    d2.textContent = days[date2.getDay()]
    d2High.textContent = `${forecast.list[16].main.temp_max.toFixed(0)}°`
    d2Low.textContent = `${forecast.list[20].main.temp_min.toFixed(0)}°`

    date3 = new Date(forecast.list[24].dt_txt)
    d3.textContent = days[date3.getDay()]
    d3High.textContent = `${forecast.list[24].main.temp_max.toFixed(0)}°`
    d3Low.textContent = `${forecast.list[28].main.temp_min.toFixed(0)}°`
    
    div1.appendChild(p);
    div1.appendChild(current);
    div1.appendChild(condition);
    div1.appendChild(humidity);

    div2.appendChild(d1);
    div2.appendChild(d1High);
    div2.appendChild(d1Low);

    div3.appendChild(d2);
    div3.appendChild(d2High);
    div3.appendChild(d2Low);

    div4.appendChild(d3);
    div4.appendChild(d3High);
    div4.appendChild(d3Low);

    container.appendChild(div1);
    container.appendChild(div2);
    container.appendChild(div3);
    container.appendChild(div4);
    

}