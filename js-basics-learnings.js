// 00:00 What is JavaScript
// JavaScript is a programming language that allows you to implement complex features on web pages.

console.log("Hello, JavaScript!");

// 04:41 Setting Up the Development Environment
// You can write JavaScript code in any text editor and run it in a web browser or with Node.js.
// For example, you can use VSCode, Sublime Text, or even Notepad++.

// 07:52 JavaScript in Browsers
// JavaScript can be embedded directly in HTML pages using the <script> tag.
if (typeof document !== 'undefined') {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is running in the browser!");
  });
}

// 11:41 Separation of Concerns
// It's a good practice to keep your HTML, CSS, and JavaScript in separate files.
let message = "Keep HTML, CSS, and JS separate for clarity!";
console.log(message);

// 13:47 JavaScript in Node
// Node.js allows you to run JavaScript on the server-side.
if (typeof require !== 'undefined') {
  const os = require('os');
  console.log("Running JavaScript with Node.js on", os.platform());
}

// 16:11 Variables
// Variables are used to store data. You can declare a variable using var, let, or const.
let age = 25; // Using let
var name = "Alice"; // Using var (older syntax, generally avoid)
const birthYear = 1999; // Using const (for constants)
console.log("Name:", name, "Age:", age, "Birth Year:", birthYear);

// 21:49 Constants
// Constants are variables that cannot be reassigned.
const pi = 3.14159;
console.log("The value of pi is", pi);

// 23:35 Primitive Types
// JavaScript has several primitive types: string, number, boolean, null, undefined, symbol.
let isStudent = true; // boolean
let score = 98.5; // number
let greeting = "Hello"; // string
let value = null; // null
let notDefined; // undefined
console.log(typeof isStudent, typeof score, typeof greeting, typeof value, typeof notDefined);

// 26:47 Dynamic Typing
// JavaScript is dynamically typed, meaning you can change the type of a variable.
let dynamicVar = "I am a string";
console.log(dynamicVar);
dynamicVar = 42;
console.log(dynamicVar);

// 30:06 Objects
// Objects are collections of key-value pairs.
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.firstName + " " + this.lastName);
  }
};
person.greet();
console.log(person);

// 35:22 Arrays
// Arrays are ordered collections of values.
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
console.log("First fruit:", fruits[0]);

// 39:41 Functions
// Functions are reusable blocks of code.
function add(a, b) {
  return a + b;
}
console.log("5 + 3 =", add(5, 3));

// 44:22 Types of Functions
// There are several types of functions: function declarations, function expressions, arrow functions.

// Function declaration
function multiply(x, y) {
  return x * y;
}
console.log("2 * 3 =", multiply(2, 3));

// Function expression
const divide = function(x, y) {
  return x / y;
};
console.log("10 / 2 =", divide(10, 2));

// Arrow function
const subtract = (x, y) => x - y;
console.log("9 - 4 =", subtract(9, 4));
