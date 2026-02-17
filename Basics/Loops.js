//for loop

console.log("Using for loop:");

for (let i = 1; i <=10; i++) {
    console.log(i);
}

//for of loop

console.log("Using for of loop:");

let nums = [1,2,3,4,5];

for(const e of nums)
{
    console.log(e);
}

for(let i = 0; i < nums.length; i++) {

    console.log(nums[i]);
}

//while loop

console.log("Using while loop:");

let count = 1;

while(count <= 10) {
    console.log(count);
    count++;
    //++count;
    //count = count + 1;
     
    //for increment, we can use any of the above three statements. They all do the same thing, which is to increase the value of count by 1 in each iteration of the loop.
}

//printing first 50 even numbers using while loop

let value =2;
while(value <= 50) {
    console.log(value);
    value = value+2;// This will print all the even numbers from 2 to 50. We start with value = 2, and in each iteration of the loop, we add 2 to value, which gives us the next even number. The loop continues until value exceeds 50.
}

//do-while loop

// The do-while loop is similar to the while loop, but it guarantees that the loop body will be executed at least once, even if the condition is false. In this example, we initialize h to 1, and the loop will print the value of h and then increment it by 1. The loop will continue as long as h is less than or equal to 10. 


console.log("Using do-while loop:");

let h = 1;
do {
    console.log(h);
    h++;
} 

while(h <= 10);

//break

// The break statement is used to exit a loop prematurely when a certain condition is met. In this example, we have a for loop that iterates from 1 to 10. If the value of i is equal to 5, the break statement is executed, which causes the loop to terminate immediately. As a result, the numbers 1 through 4 will be printed, but the loop will stop before printing 5 and any subsequent numbers.

let numm = 5;

while (numm <= 100) {
    console.log(numm);
    if (numm%5==0){
        console.log("" + numm + " is a multiple of 5. Stopping the loop., Hence Hi is printed");
        break;
    }

    numm++;
}

const browserArray = ["Chrome", "Firefox", "Safari", "Edge"];

for (const eachBrowser of browserArray) {
    console.log(eachBrowser);

    if (eachBrowser === "Edge") {
        console.log("Edge browser is found...");
        break;
    }
}

//for in loop on objects

const carDetail = {

    Brand: "Maruti Suzuki MSIL",
    Model: "Baleno",
    Year: 2020
}

for (const key in carDetail) {
    console.log(key + ": " + carDetail[key]);
}

const br = ["Chrome", "Firefox", "Safari", "Edge"];
for (const eachBr in br) {
    //console.log(eachBr);
    console.log(eachBr+":" +br[eachBr]); // This will print the values of the array. The for in loop iterates over the indices of the array, and we can access the corresponding values using br[eachBr]. 
}

//The difference between in and of loop is that for in loop is used to iterate over the properties of an object, while for of loop is used to iterate over the values of an iterable object such as an array. In the above example, we have used for in loop to iterate over the properties of the carDetail object, and for of loop to iterate over the values of the br array.
// for (const eachBr of br) - This will print the values of the array
// for (const eachBr in br) - Thi will print the index of the array.

// for (const eachBr in br) {
//     //console.log(eachBr);
//     console.log(br[eachBr]); // By this way., we can also print the values of the array using this syntax:-> console.log( arrayName[const variable] )
// }
