function checkDayOfTheWeek(dayNumber) 
{
    let day;

    switch (dayNumber) 
    {
        case 0:
            day = "Monday";
            break;
        case 1:
            day = "Tuesday";
            break;  
        case 2:
            day = "Wednesday";
            break;
        case 3:
            day = "Thursday";
            break;
        case 4:
            day = "Friday";
            break;
        case 5:
            day = "Saturday";
            break;
        case 6:
            day = "Sunday";
            break;
            
        default:
            console.log("Invalid day number. Please enter a number between 0 and 6.");
            break;
    }

    return day;
}

console.log(checkDayOfTheWeek(2));
console.log(checkDayOfTheWeek(4));
console.log(checkDayOfTheWeek(10)); // Output: Invalid day number. Please enter a number between 0 and 6.


let browser = "Chrome";
switch (browser) {
   
    case "Chrome":
        console.log("You are using Chrome browser.");
        //break;

    case "Firefox":
        console.log("You are using Firefox browser.");
        //break;

    case "Edge":
        console.log("You are using Edge browser.");
        //break;

    default:
        console.log("You are using an unsupported browser." + browser);
        //break;

}