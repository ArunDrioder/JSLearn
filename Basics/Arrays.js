//Declaration of an array

let myArray = [];
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
let lang = ["JavaScript", "Python", "Java", "C++", "Ruby"];

//1. push --> will add new elements to the end of the array

lang.push("Perl", "C#", "CL", "CA"); // This will add the new languages to the end of the lang array.

console.log(lang);

//2. pop --> will remove the last element from the array and return it

numbers.pop(); // This will remove the last element (5) from the numbers array and return it.

console.log(numbers);

//3. shift --> will remove the first element from the array and return it

let firstFruit = fruits.shift(); 
// This will remove the first element ("Apple") from the fruits array and return it.

console.log(firstFruit);

let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

//4. unshift --> will add new elements to the beginning of the array

colors.unshift("White","Pink");

console.log(colors); // This will print the updated colors array, which now contains "White" and "Pink" at the beginning, followed by the original colors.
//5. This will print the length of the colors array, which is now 7 after adding two new colors with unshift.

console.log(colors.length);
 

//6. splice-  This will remove 1 element at index 1 (which is "Honda") and add "Maserati" at that index.
 let cars = ["Toyota", "Honda", "Ford", "BMW", "Audi"];
 cars.splice(1, 1,"Maserati"); 
 console.log(cars);

 cars.splice(1, 4, "Civic"); // This will remove 4 elements starting from index 1 (which are "Maserati", "Ford", "BMW", and "Audi") and add "Civic" at index 1. After this operation, the cars array will only contain "Toyota" and "Civic".
 console.log(cars); // This will print the updated cars array, which now contains "Toyota" and "Civic".

 //7. slice- This will create a new array newPop that contains the elements from index 1 to index 3 (not including index 4) of the pop array. So, newPop will contain [12, 13, 14].

 let pop = [11,12,13,14,15];

 let newPop = pop.slice(1,4); // This will create a new array newPop that contains the elements from index 1 to index 3 (not including index 4) of the pop array. So, newPop will contain [12, 13, 14].
console.log(newPop); // This will print the newPop array, which contains [12, 13, 14].

//8. Concatenation- This will create a new array combined that contains all the elements of the arr1 and arr2 arrays. So, combined will contain [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

let carBrands = ["Maruti","Hyundai","Toyota"];
let CarNames = ["Baleno","i20","Glanza"];

let finalAutoArray = carBrands.concat(CarNames);

console.log(finalAutoArray); // This will create a new array combined that contains all the elements of the carBrands and CarNames arrays. So, combined will contain ["Maruti", "Hyundai", "Toyota", "Baleno", "i20", "Glanza"].

//9. indexOf- This will return the index of the first occurrence of the element "i20" in the finalAutoArray. Since "i20" is at index 4, it will return 4.

let colorsArray = ["Red", "Green", "Blue", "Yellow", "Purple", "Green"];

console.log(colorsArray.indexOf("Blue")); 
// This will return the index of the first occurrence of the element "Blue" in the colorsArray. Since "Blue" is at index 2, it will return 2.

console.log(colorsArray.indexOf("Green", 2));       
// 1st method: This will return the index of the first occurrence of the element "Green" in the colorsArray, starting the search from index 2. Since "Green" is at index 5, it will return 5.
console.log(colorsArray.indexOf("Green", colorsArray.indexOf("Green") + 1));
//2nd method: This will first find the index of the first occurrence of "Green" (which is 1) and then start the search for the next occurrence of "Green" from index 2. Since the next "Green" is at index 5, it will return 5.



//10. includes- This will check if the element "Yellow" is present in the colorsArray. Since "Yellow" is indeed present, it will return true.

let roles = ["Admin", "User", "Guest", "Moderator"];
console.log(roles.includes("User","naveen")); // This will check if the element "User" is present in the roles array. Since "User" is indeed present, it will return true.
console.log(roles.includes("SuperAdmin")); // This will check if the element "SuperAdmin" is present in the roles array. Since "SuperAdmin" is not present, it will return false.


//11. forEach- This will iterate over each element in the numbers array and print it to the console.

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
n.forEach((e) => {

    console.log(e * 2);

}); // This will iterate over each element in the n array and print it to the console. So, it will print the numbers from 1 to 10, each multiplied by 2.