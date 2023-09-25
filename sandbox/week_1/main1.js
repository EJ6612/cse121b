'use strict' //this is the same as IsImplicit = false in C#

console.log('wheeeeeeeeee');

console.log(typeof "abc");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof { a: 1 });
console.log(typeof [1, 2, 3]);
console.log(typeof function hello() {});

let adult = true; 
let myName = "";
let age = 0;
const PROFESSION = 'instructor'; //constant variables can only be set once, and never changed after that

if (adult) 
{
    let myName = "Bob"
    let age = 24;
}

console.log(myName);

console.log(age);

console.log(PROFESSION);

//JS will automatically convert a string to an int if the user attempts to do math with a string and an int (ex: "2" * 1 would equal 2)


let combo = 'foo' + 3; //shows as foo3 


const myArray = [1,2,3,4,5];

output(myArray)

function output(myArray)
{
    const outputElement = document.querySelector(".output");
    outputElement.innerHTML += `<p>${myArray}</p>`
}