


// 1. every --> will test whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value (true or false).

let numbers = [2, 4, 6, 8, 110];

let checkNumFalg = numbers.every((e) => e < 20); // This will test whether every element in the numbers array is less than 20. Since all elements are less than 20, it will return true.
console.log(checkNumFalg); // This will print the Boolean value true, indicating that every element in the numbers array is less than 20.


// 2. some --> will test whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value (true or false).

let someAnotherNumbers = [1, 2, 3, 4, 5];
let someResult = someAnotherNumbers.some((e) => e % 2 === 0); // This will test whether at least one element in the someAnotherNumbers array is even. Since there are elements (2, 4) that are even, it will return true.
console.log(someResult); // This will print the Boolean value true, indicating that at least one element in the someAnotherNumbers array is even.


let oneMoreNumbers = [10, 30, 500, 720, 910];
let oneMoreResult = oneMoreNumbers.some((e) => e > 20); // This will test whether at least one element in the oneMoreNumbers array is greater than 20. Since there are elements (30, 500, 720, 910) that are greater than 20, it will return true.
console.log(oneMoreResult); // This will print the Boolean value true, indicating that at least one element in the oneMoreNumbers array is greater than 20.


// 3. find --> will return the value of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns undefined.

let findNumbers = [5, 10, 15, 20, 25];
let findResult = findNumbers.find((e) => e %2===0); // This will return the value of the first element in the findNumbers array that is even. Since 10 is the first even number in the array, it will return 10.
console.log(findResult); // This will print the value 10, which is the first even number in the findNumbers array.

//4. indexOf --> will return the first index at which a given element can be found in the array, or -1 if it is not present.

let arrayOfFruits = ["apple", "banana", "cherry", "date", "fig", "grape", "honeydew", "Pear", "kiwi", "lemon", "apple"];
let indexOfResult = arrayOfFruits.indexOf("cherry");

//5. lastIndexOf --> will return the last index at which a given element can be found in the array, or -1 if it is not present.

let lastIndexOfResult = arrayOfFruits.lastIndexOf("apple"); // This will return the last index at which the element "apple" can be found in the arrayOfFruits array. Since "apple" appears at index 0 and index 10, it will return 10, which is the last index of "apple" in the array.
console.log(lastIndexOfResult); // This will print the value 10, which is the last index of "apple" in the arrayOfFruits array.


//6 reverse --> will reverse the order of the elements in the array in place. The first element becomes the last, and the last element becomes the first.

let reverseFruits = ["apple", "banana", "cherry", "date", "fig"];
let reversedVersion = reverseFruits.reverse(); // This will reverse the order of the elements in the reverseFruits array. After this operation, the array will be ["fig", "date", "cherry", "banana", "apple"].
console.log(reversedVersion); // This will print the reversed array ["fig", "date", "cherry", "banana", "apple"] to the console.

//7. sort --> will sort the elements of the array in place and return the sorted array. By default, it sorts the elements as strings in ascending order.

let Brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"];
let sortedBrands = Brands.sort(); // This will sort the elements of the Brands array in ascending order. After this operation, the array will be ["Adidas", "Nike", "Puma", "Reebok", "Under Armour"].
console.log(sortedBrands); // This will print the sorted array ["Adidas", "Nike", "Puma", "Reebok", "Under Armour"] to the console.