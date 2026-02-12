var x = 10;
function test(){
    var y = 20;
    //console.log(y); // This will work because x is in the global scope
}
test();
console.log(x); 

var printMe = "Hello World";
function print(){
    var insideStringVar = "This is from Inside the function";
    //console.log(insideStringVar);
}

print();

//console.log(printMe);


var browser = "Chrome";
var browser = "Firefox";
browser = "edge";

console.log(browser); // This will overwrite the previous value of browser

var g;
g = 456;
console.log(g);
var newFlag = "Hey Arun., Happy learning JS";
var num = 72; // This will print undefined because g is declared but not initialized
if(num > 100)
{
    var newFlag = "Hey Arun., Stay safe inside the condition";
}
console.log(newFlag);

let text = "Declared using let"
let value = 10;

if(value > 20)
{
    let insideText = "This is inside the if block";
    console.log(insideText); // This will work because insideText is in the block scope
}
//console.log(insideText);
console.log(text);
let len = 5;
len = 8;
console.log(len);
var car = "Omni"
let car = "Baleno"

//Difference between var & let with an example

var a = 10;
a = 14;
var a = 15; // This will work because var allows redeclaration
console.log("a = " + a); // This will print 14 because var allows redeclaration

//var allows redeclaration and reassigning, 
let b = 20;

b = 25;


console.log("b = " + b);
 
//let b = 30; // This will throw an error because let does not allow redeclaration

console.log("b = " + b);



const mg = "Hey Const,This is a constant variable.";

console.log(mg);

mg = 12; // This will throw an error because const does not allow reassignment.
const days = 7;

//const someEmpty; // This will throw an error because const must be initialized at the time of declaration.

days = 10;

console.log(100*days);

days = 10; // This will print 7 



