//Q 1
// let studentNames = [];
// console.log(studentNames)

//Q 2
let stringsArray = ['Abdullah', 'Habib', 'Ateeb'];
console.log(stringsArray)

//Q 3
let strings = ["hello", "hlo", "hi"];
console.log(strings)

//Q 4
const numbersArray = [10, 20, 30, 40, 50];
console.log(numbersArray)

//Q 5
let booleanArray = [true, false, true, false];
console.log(booleanArray)

//Q 6
let mixedArray = [1, 'Welcome', true, {key: 'value'}];
console.log(mixedArray)


//Q 7
const qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];


qualifications.forEach(qualification => {
	document.write(`- ${qualification}<br>`);
});

//Q 8
let studentNames = ["Abdullah", "Nehal", "Uzair"];
let scores = [420, 380, 440];

const totalMarks = 500;
let percentages = scores.map(score => ((score / totalMarks) * 100).toFixed(2));

for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i] + " score of  " + scores[i] + ", percentage: " + percentages[i] + "%");
}

//Q 9
let colors = ["red", "blue", "green"];
document.write(colors.join(", "));


let userColorStart = prompt("Enter color to add to beginning:");
colors.unshift(userColorStart);
document.write("<br>" + colors.join(", "));


let userColorEnd = prompt("Enter color to add to end:");
colors.push(userColorEnd);
document.write("<br>" + colors.join(", "));

colors.unshift("yellow", "purple");
document.write("<br>" + colors.join(", "));


colors.shift();
document.write("<br>" + colors.join(", "));

colors.pop();
document.write("<br>" + colors.join(", "));


let indexToAdd = prompt("Enter index to add color:");
let colorToAdd = prompt("Enter color to add at index:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<br>" + colors.join(", "));


let indexToRemove = prompt("Enter index to remove color(s) from:");
let numToRemove = prompt("Enter number of colors to remove:");
colors.splice(indexToRemove, numToRemove);
document.write("<br>" + colors.join(", "));


//Q 10
let studentScores = [87, 92, 78, 95, 83];
studentScores.sort(function(a, b) {
  return a - b;
});


//Q 11
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(0, 3);


//Q 12
var arr = ["This", " is ", " my ", " cat"];
var singleString = arr.join("");
console.log(singleString);


//Q 13



//Q 14
let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);


console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


//Q 15
const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
phoneManufacturers.forEach(manufacturer => {
    document.write(`<option value="${manufacturer}">${manufacturer}</option>`);
});
document.write("</select>");







