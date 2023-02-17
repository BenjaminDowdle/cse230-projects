const temperature = document.querySelector("#temp");
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#wind-chill");

const degreesF = 39.0;
const speedMPH = 4.5;


temperature.innerHTML = degreesF + "° F";
windSpeed.innerHTML = "Wind Speed: " + speedMPH;

if (degreesF <= 50 && speedMPH > 3.0) {
    let chillTemp = 35.74 + 0.6215 * degreesF - 35.75 * speedMPH ** 0.16 + 0.4275 * degreesF * speedMPH ** 0.16;
    chillTemp = chillTemp.toFixed(1);

    windChill.innerHTML = "Wind Chill: " + chillTemp + "° F";
}

else {
    windChill.innerHTML = "Wind Chill: N/A"
}

