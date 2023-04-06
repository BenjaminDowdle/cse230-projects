let json = "https://brotherblazzard.github.io/canvas-content/fruit.json";

let fname = document.querySelector("#fname");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let fruit1 = document.querySelector("#fruit1");
let fruit2 = document.querySelector("#fruit2");
let fruit3 = document.querySelector("#fruit3");
let drink = document.querySelector("#drink");

let counter = document.querySelector("#counter");

async function apiFetch(json, func) {
    try {
        const response = await fetch(json);
        if (response.ok) {
            const data = await response.json();
            func(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch(json, displayFruits)

function displayFruits(fruits){
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

    
    let time = document.createElement('p');
    let n = document.createElement('h2');
    let e = document.createElement('p');
    let p = document.createElement('p');
    let pIns = document.createElement('p');
    let fruits = document.createElement('h2');

    let month = new Date().getMonth();
    let day = new Date().getDate();
    let year = new Date().getFullYear();

    time.textContent = `${month}/${day}/${year}`
    
    n.textContent = `Name: ${fname.value}`
    e.textContent = `Email: ${email.value}`
    p.textContent = `Phone: ${phone.value}`
    pIns.textContent = `Special Instructions: ${document.getElementById("instructions").value}`
    fruits.textContent = `${fruit1.value}, ${fruit2.value} and ${fruit3.value}`

    drink.appendChild(time);

    drink.appendChild(n);
    drink.appendChild(e);
    drink.appendChild(p);
    drink.appendChild(pIns);
    drink.appendChild(fruits);

    apiFetch(json, getNutrition);

    if (localStorage.count == null){
        localStorage.count = 0;
        localStorage.count++;
    } else {
        localStorage.count++;
    }

    counter.textContent = localStorage.count;
});

function getNutrition(fruits){

    const selectedFruits = [fruit1.value, fruit2.value, fruit3.value];
    let totalCarbs = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalSugar = 0;
    let totalCal = 0;

    selectedFruits.forEach(selectedFruit =>{
        fruits.forEach(fruit => {
            if (fruit.name == selectedFruit){

                let carbs = fruit.nutritions.carbohydrates;
                let protein = fruit.nutritions.protein;
                let fat = fruit.nutritions.fat;
                let sugar = fruit.nutritions.sugar;
                let calories = fruit.nutritions.calories;

                totalCarbs += carbs;
                totalProtein += protein;
                totalFat += fat;
                totalSugar += sugar;
                totalCal += calories;
            }
        });
        
    });

    let nutritionalFacts = document.createElement('div');
    nutritionalFacts.setAttribute('id', 'nutritional-facts')
    
    let h2 = document.createElement('h2');
    let pCal = document.createElement('p');
    let pCarb = document.createElement('p');
    let pSugar = document.createElement('p');
    let pFat = document.createElement('p');
    let pProtein = document.createElement('p');

    h2.textContent = "Nutritional Facts"
    pCal.textContent = `Calories: ${totalCal.toFixed(1)}`;
    pCarb.textContent = `Carbohydrate: ${totalCarbs.toFixed(1)}`;
    pSugar.textContent = `Sugar: ${totalSugar.toFixed(1)}`;
    pFat.textContent = `Fat: ${totalFat.toFixed(1)}`;
    pProtein.textContent = `Protein: ${totalProtein.toFixed(1)}`;

    nutritionalFacts.appendChild(h2);
    nutritionalFacts.appendChild(pCal);
    nutritionalFacts.appendChild(pCarb);
    nutritionalFacts.appendChild(pSugar);
    nutritionalFacts.appendChild(pFat);
    nutritionalFacts.appendChild(pProtein);

    drink.appendChild(nutritionalFacts);
}