// 01. Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

function calculateDifference(a, b) {
    return a - b;
}
console.log(calculateDifference(10, 5)); 
console.log(calculateDifference(5, 10)); 

//02. Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(3)); 
console.log(isOdd(4)); 
console.log(isOdd(-7)); 

// 3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.
function findMin(arr) {
    
    return Math.min(...arr);
}
console.log(findMin([3, 5, 1, 7, 2]));
console.log(findMin([10, 20, 5, 15])); 

// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(filterEvenNumbers([10, 15, 20, 25]));   

// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(arr) {
    
    return arr.slice().sort((a, b) => b - a);
}

console.log(sortArrayDescending([3, 1, 4, 1, 5, 9, 2, 6])); 
console.log(sortArrayDescending([10, 2, 15, 5]));   

// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str) {   
    if (str.length === 0) return str;
    return str[0].toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("Hello")); 
console.log(lowercaseFirstLetter("JavaScript")); 

// 7) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(arr) {   
    if (arr.length === 0) return 0;      
    const sum = arr.reduce((acc, num) => acc + num, 0);   
    return sum / arr.length;
}
console.log(findAverage([1, 2, 3, 4, 5]));
console.log(findAverage([10, 20, 30, 40])); 

// 8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.

function isLeapYear(year) {
   
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

console.log(isLeapYear(2024));
console.log(isLeapYear(1900)); 

