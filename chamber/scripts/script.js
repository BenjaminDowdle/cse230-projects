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
