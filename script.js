// Variable declarations
const minAge = 18;
const userAge = 20;
let canEnter = false;

// Conditional statement to check age
if (userAge >= minAge) {
  canEnter = true;
  console.log("Welcome! You are old enough to enter.");
} else {
  console.log("Sorry, you are not old enough to enter.");
}

// Function 1: Calculates the area of a circle
function calculateCircleArea(radius) {
  // Use Math.PI for an accurate value of Pi
  return Math.PI * radius * radius;
}

// Function 2: Creates a personalized greeting
function createGreeting(name) {
  return `Hello, ${name}! Welcome to the app.`;
}

// Call the functions and log the results
console.log(`The area of a circle with a radius of 5 is: ${calculateCircleArea(5)}`);
console.log(createGreeting("Alice"));

// For loop example: Iterating over an array of fruits
const fruits = ["Apple", "Banana", "Cherry", "Mango"];
console.log("Iterating through the fruits array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// While loop example: Simple countdown from 5
let countdown = 5;
console.log("Starting countdown:");
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Blast off!");

// Part 4: DOM Interactions
// 1. Change text content of an element
const pageTitle = document.getElementById("page-title");
pageTitle.textContent = "Welcome to My Interactive Page!";

// 2. Add an event listener to a button
const changeTextBtn = document.getElementById("change-text-btn");
const infoParagraph = document.getElementById("info-paragraph");

changeTextBtn.addEventListener("click", () => {
  infoParagraph.textContent = "This text has been changed by a button click!";
});

// 3. Create and append a new element
const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div created with JavaScript.";
newDiv.style.backgroundColor = "lightgreen";
newDiv.style.padding = "10px";
newDiv.style.marginTop = "10px";

const contentContainer = document.getElementById("content-container");
contentContainer.appendChild(newDiv);