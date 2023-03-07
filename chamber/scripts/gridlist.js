let json = 'data.json';

async function getData(json) {
    const response = await fetch(json);
    const data = await response.json();
    console.table(data.businesses);
    displayData(data.businesses);
}

getData(json);

const displayData = (businesses) => {
    const cards = document.querySelector("#cards");

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let email = document.createElement('a');
        let website = document.createElement('a');
        let membership = document.createElement('p');

        logo.setAttribute('src', business.imageurl);
        logo.setAttribute('alt', `Logo for ${business.name}`)
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200')

        website.setAttribute('href', business.website);
        website.textContent = (`${business.website}`);

        membership.textContent = (`${business.membershiplevel} Member`)

        name.textContent = (`${business.name}`);

        address.textContent = (`${business.address}`);

        phoneNumber.textContent = (`${business.phonenumber}`);

        email.textContent = (`${business.email}`);

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(website);
        card.appendChild(email);
        card.appendChild(membership);

        cards.appendChild(card);
    });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");



gridbutton.addEventListener("click", () => {
    display.classList.add("grid_cards");
    display.classList.remove("list_cards");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list_cards");
    display.classList.remove("grid_cards");
});



