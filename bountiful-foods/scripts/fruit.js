let json = "https://brotherblazzard.github.io/canvas-content/fruit.json";

let fname = document.querySelector("#fname");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let fruit1 = document.querySelector("#fruit1");
let fruit2 = document.querySelector("#fruit2");
let fruit3 = document.querySelector("#fruit3");
let instructions = document.querySelector("#instructions");
let drink = document.querySelector("#drink");

async function apiFetch(json) {
    try {
        const response = await fetch(json);
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

apiFetch(json)

function displayResults(fruits){
    fruits.forEach(fruit => {
        
        let option1 = document.createElement('OPTION');
        let option2 = document.createElement('OPTION');
        let option3 = document.createElement('OPTION');

        option1.textContent = `${fruit.name}`
        option2.textContent = `${fruit.name}`
        option3.textContent = `${fruit.name}`

        fruit1.appendChild(option1);
        fruit2.appendChild(option2);
        fruit3.appendChild(option3);
    });
}

document.querySelector("#order-button").addEventListener("click", function(){

    let n = document.createElement('h2');
    let e = document.createElement('p');
    let p = document.createElement('p');
    let f1 = document.createElement('h2');
    let f2 = document.createElement('h2');
    let f3 = document.createElement('h2');

    n.textContent = `Name: ${fname.value}`
    e.textContent = `Email: ${email.value}`
    p.textContent = `Phone: ${phone.value}`
    f1.textContent = `${fruit1.value}`
    f2.textContent = `${fruit2.value}`
    f3.textContent = `${fruit3.value}`

    drink.appendChild(n);
    drink.appendChild(e);
    drink.appendChild(p);
    drink.appendChild(f1);
    drink.appendChild(f2);
    drink.appendChild(f3);
});