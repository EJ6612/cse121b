/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
let add = (n1, n2) => n1 + n2;
let subtract = (n1, n2) => n1 - n2;
let multiply = (n1, n2) => n1 * n2;
let divide = (n1, n2) => n1 / n2;
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

const sumButton = document.getElementById("addNumbers");

function addNumbers()
{
    let addend1 = document.querySelector("#addend1").value;
    let addend2 = document.querySelector("#addend2").value;
    let sumText = document.querySelector("#sum");

    sumText.value = add(Number(addend1), Number(addend2));
}

sumButton.addEventListener("click", addNumbers);

//subtract
const subtractButton = document.getElementById("subtractNumbers");

function subtractNumbers()
{
    let subFirst = document.querySelector("#minuend").value;
    let subSecond = document.querySelector("#subtrahend").value;
    let diffText = document.querySelector("#difference");

    diffText.value = subtract(Number(subFirst), Number(subSecond));
}

subtractButton.addEventListener("click", subtractNumbers);

//multiply
const multiplyButton = document.getElementById("multiplyNumbers");

function multiplyNumbers()
{
    let multFirst = document.querySelector("#factor1").value;
    let multSecond = document.querySelector("#factor2").value;
    let productText = document.querySelector("#product");

    productText.value = multiply(Number(multFirst), Number(multSecond));
}

multiplyButton.addEventListener("click", multiplyNumbers);

//division
const divideButton = document.getElementById("divideNumbers");

function divideNumbers()
{
    let divFirst = document.querySelector("#dividend").value;
    let divSecond = document.querySelector("#divisor").value;
    let quotientText = document.querySelector("#quotient");

    quotientText.value = divide(Number(divFirst), Number(divSecond));
}

divideButton.addEventListener("click", divideNumbers);


// Step 4: Assign the return value to an HTML form element with an ID of sum
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

let today = new Date();
console.log(today);

let year = today.getFullYear();
console.log(year);

document.querySelector("#year").textContent = year;

// Step 1: Declare and instantiate a variable of type Date to hold the current date
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
// Step 4: Assign the current year variable to an HTML form element with an ID of year


/* ARRAY METHODS */

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
            21, 22, 23, 24, 25];

document.getElementById("array").textContent = array1;

let oddsOnly = array1.filter(n => n%2);
document.getElementById("odds").textContent = oddsOnly;

let evensOnly = array1.filter(n => n%2 === 0);
document.getElementById("evens").textContent = evensOnly;

let reducedArray = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

document.getElementById("sumOfArray").textContent = reducedArray;


let map1 = array1.map(x => x * 2);
document.getElementById("multiplied").textContent = map1;

let reducedMap1 = map1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById("sumOfMultiplied").textContent = reducedMap1;


// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"