//Q 1
const multiDimArray = [[]];
console.log (multiDimArray)


//Q 2
const matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, ],
    [2, 1, 0, 1]
];
console.log(matrix)

//Q 3
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//Q 4
// Prompt the user for the number they want the multiplication table for
const number = parseInt(prompt('Enter the number for which you want the multiplication table: '));

// Prompt the user for the length of the multiplication table
const length = parseInt(prompt('Enter the length of the multiplication table: '));

// Print the multiplication table
for (let i =  1; i <= length; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}


//Q 5
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


//Q 6
console.log("Counting:");
for (let i = 1; i <= 15; i++) {
    console.log(i);
}

console.log("Reverse counting:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Even:");
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

console.log("Odd:");
for (let i = 1; i <= 19; i += 2) {
    console.log(i);
}

console.log("Series:");
for (let i = 1; i <= 10; i++) {
    console.log(i * 2 + "k");
}


//Q 7
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

const userSearch = (item) => {
    if (A.includes(item)) {
        console.log(`"${item}" is found in the list.`);
    } else {
        console.log(`"${item}" is not found in the list.`);
    }
};

const userInput = "cookie";
userSearch(userInput);


//Q 8
function findLargestNumber(arr) {
    return Math.max(...arr);
}

const B = [24, 53, 78, 91, 12];
const largestNumber = findLargestNumber(B);
console.log("The largest number is: " + largestNumber);


//Q 9
const C = [24, 53, 78, 91, 12];
const smallestNumber = Math.min(...C);
console.log("The smallest number is: " + smallestNumber);


//Q 10
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}