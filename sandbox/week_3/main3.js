//----------FUNCTIONS---------------------------------------------------------
show();

// function declaration
function show()
{
    console.log('Hello There');
}

console.log(square(5));

// function declaration
function square(number) 
{
    return number * number;
}

// function expression - can't hoist or call before function
// to create an anonymous functions assigned to constants or variables
const sq = function(number) 
{
    return number * number;
}

console.log(sq(3));

document.querySelector('#results').textContent = sq(64);


// function using the arrow syntax - still can't hoist.
let squ = (number) => 
{
    return number * number;
}

console.log(squ(16));

// even shorter arrow syntax
const squared = (number) => number * number;

console.log(squared(32));

//----------------------------------------------------------------------------


//----------ARRAY METHODS-----------------------------------------------------

const simple_array = ["a", "b", "c"];

//foreach method - with a declaration function
simple_array.forEach(show_array);

function show_array(item) 
{
    console.log(item);
    document.querySelector('#arrayResults').textContent += item + " ";
}

simple_array.forEach(function show_array(item) { console.log(item + "2")});

//foreach with arrow function
simple_array.forEach(item => console.log(item + "3"));

//----------------------------------------------------------------------------

// example 1
const steps = ["one", "two", "three", "four"];
// callback declaration
function makeList(item) {
  const listElement = document.getElementById("myList");
  listElement.innerHTML += `<li>${item}</li>`;
}
steps.forEach(makeList);

// example 2
// is the luckyNumber in the list?
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = -1;
myArray.forEach(function (item, index) {
  if (item === luckyNumber) {
    luckyIndex = index;
    console.log("lucky " + luckyIndex);
  }
});


// example 1
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("mySecondList").innerHTML = stepsHtml.join(' ');

const array1 = [1 ,5, 3, 9, 6, 2];
//pass a function to map
const map1 = array1.map(x => x * 2);

console.log(array1);
console.log(map1);