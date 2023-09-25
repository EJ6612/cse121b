/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let userName = "Elijah";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = userName;

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = "2023";

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let userImage = "images/2022-trash.jpg";

// Step 6: copy your image into the "images" folder
//check

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#photo').setAttribute('src', userImage);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favFoods = ["burger", "crepe", "lemonade", "steamed carrots"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
let newFood1 = "seafood";

// Step 4: add the variable holding another favorite food to the favorite food array
favFoods.push(newFood1);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = favFoods;

// Step 6: remove the first element in the favorite foods array
favFoods.splice(0,1);

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favFoods;

// Step 8: remove the last element in the favorite foods array
favFoods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favFoods;


