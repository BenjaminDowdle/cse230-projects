let json = "https://brotherblazzard.github.io/canvas-content/fruit.json";

let fruit1 = document.querySelector("#fruit1");
let fruit2 = document.querySelector("#fruit2");
let fruit3 = document.querySelector("#fruit3");

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