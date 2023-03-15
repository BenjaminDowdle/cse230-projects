const url = "data.json";



async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.businesses, "#spotlight1");
    displayData(data.businesses, "#spotlight2");
    displayData(data.businesses, "#spotlight3");
}

getData(url);

function displayData(businesses, container) {
    const rand = Math.random() * businesses.length;

    let name = document.querySelector(container).querySelector(".name");
    let logo = document.querySelector(container).querySelector(".spotlight-img");
    let email = document.querySelector(container).querySelector(".email");
    let phone = document.querySelector(container).querySelector(".phone-number");

    name.textContent = businesses[rand.toFixed(0)].name;
    logo.setAttribute('src', businesses[rand.toFixed(0)].imageurl);
    logo.setAttribute('alt', businesses[rand.toFixed(0)].name);
    email.textContent = businesses[rand.toFixed(0)].email;
    phone.textContent = businesses[rand.toFixed(0)].phonenumber;

}