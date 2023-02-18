// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navbar')
const hambutton = document.querySelector('#menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

// What does toggle mean? Instead of add and remove, toggle means add the class name (the parameter, which in this case is named 'responsive') if it does not currently exist, and remove the 
const currentDate = new Date();

const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(currentDate);

document.querySelector(".date").innerHTML = fullDate


document.querySelector(".last-modified").innerText = new Date(document.lastModified)


// ----------Generate date message----------
const newDay = new Date();
const day = newDay.getDay();

let dayOutput = document.querySelector("#date-message");

let message = "";
switch (day) {
    case 1:
        message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
        break;
    case 2:
        message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
        break;
    default:
        message = "";
}

dayOutput.innerHTML = message;

// ------Find Days since last visit------
// Get the current date
const newCurrentDate = new Date();

// Get the last visit date from LocalStorage or set to null if not found
const lastVisitDate = localStorage.getItem('lastVisitDate') || null;

if (lastVisitDate) {
    // Calculate the number of days since the last visit
    const timeDiff = Math.abs(newCurrentDate.getTime() - new Date(lastVisitDate).getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    document.querySelector("#viewed").innerHTML = diffDays;
}