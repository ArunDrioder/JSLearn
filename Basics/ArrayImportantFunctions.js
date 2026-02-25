//1. map --> will create a new array by applying a function to each element of the original array

let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map((e)=> e*2); // This will create a new array by applying the function (e) => e * 2 to each element of the numbers array. The resulting array will be [2, 4, 6, 8, 10].

console.log(doubledNumbers); // This will print the new array doubledNumbers, which contains [2, 4, 6, 8, 10].

let fahTemp = [32, 68, 100, 214, 451];

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9); // This function converts a temperature from Fahrenheit to Celsius using the formula (F - 32) * 5/9.
}

let celCiusfahTemp = fahTemp.map(fahrenheitToCelsius); // This will create a new array by applying the fahrenheitToCelsius function to each element of the fahTemp array. The resulting array will contain the corresponding Celsius temperatures for each Fahrenheit temperature in the fahTemp array.

console.log(celCiusfahTemp); // This will print the new array celCiusfahTemp, which contains the Celsius temperatures corresponding to the Fahrenheit temperatures in the fahTemp array.


//2. filter --> will create a new array with all elements that pass the test implemented by the provided function

let ages = [12, 17, 20, 25, 30, 35];

let evenAges = ages.filter((e) => e%2 === 0); // This will create a new array with all elements from the ages array that are even numbers. The resulting array will be [12, 20, 30].

console.log(evenAges); // This will print the new array evenAges, which contains [12, 20, 30].


let employees = [
    { name: "Alice", age: 28, department: "HR", gender: "Male"},
    { name: "Bob", age: 35, department: "Engineering", gender: "Female"},
    { name: "Charlie", age: 22, department: "Marketing", gender: "Female"},
    { name: "David", age: 30, department: "Engineering", gender: "Female"},
    { name: "Eve", age: 27, department: "HR", gender: "Male"}

];

let femaleEmpWithAge = employees.filter((employee) => {
    return employee.gender === "Male" && employee.age <= 30;
});

console.log(femaleEmpWithAge); // This will print the new array femaleEmpWithAge, which contains all employee objects from the employees


//3. reduce --> will apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

let numArray = [1, 2, 3, 4, 5];

let SumOFtheArray = numArray.reduce((acc, num)=> acc + num, 0); // This will apply the function (acc, num) => acc + num against an accumulator (acc) and each element (num) in the numArray from left to right to reduce it to a single value. The initial value of the accumulator is set to 0. The resulting value will be the sum of all the numbers in the numArray, which is 15.

console.log(SumOFtheArray);


let maxNumberInArray = [1, 5, 3, 9, 2];

let maxNum = maxNumberInArray.reduce((max, num) => {

    if (num > max) {
        return num; // If the current number (num) is greater than the current maximum (max), return num as the new maximum.
    }

    else {
        return max; // If the current number (num) is not greater than the current maximum (max), return max to keep it as the maximum.
    }
}, maxNumberInArray[0]);

console.log(maxNum);// This will print the maximum number in the maxNumberInArray, which is 9.


let CartItems = [
    { name: "Laptop", price: 50000},
    { name: "Phone", price: 45000},
    { name: "Headphones", price: 6000},
    { name: "Monitor", price: 12000},
    { name: "Keyboard", price: 1200}
];

let totalCost = CartItems.reduce((total, item) => total+ item.price, 0); // This will calculate the total cost of all items in the CartItems array by applying the function (total, item) => total + item.price against an accumulator (total) and each item in the CartItems array from left to right. The initial value of the accumulator is set to 0. The resulting value will be the sum of the prices of all items in the CartItems array, which is 114200.
console.log(totalCost); // This will calculate the total cost of all items in the CartItems array by applying the function (total, item) => total + item.price against an accumulator (total) and each item in the CartItems array from left to right. The initial value of the accumulator is set to 0. The resulting value will be the sum of the prices of all items in the CartItems array, which is 114200.

