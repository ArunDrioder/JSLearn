function checkAgeToVote(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}

checkAgeToVote(10);

function checkNumber(num) {
    if (num > 0) {
        console.log(num + " is a positive number.");
    } else if (num < 0) {
        console.log(num + " is a negative number.");
    } else {
        console.log("The number is zero.");
    }
}

checkNumber(5);
checkNumber(-3);
checkNumber(0);

// Example of nested if-else
function checkGrade(score) {
    let grade;
    if (score >= 90) {
        grade = "A";
    }
    else {
        if (score >= 80) {
            grade = "B";
        }

        else {
            if (score >= 70) {
                grade = "C";
            }
            else {
                grade = "F";
            }
    }
}

console.log("Grade: " + grade);

}

checkGrade(95);
checkGrade(85);
checkGrade(75);
checkGrade(65); 

// Example of if-elseif

let brwoser = "Chrome";
if (brwoser === "Chrome") {
    console.log("You are using Chrome browser.");
}

else if (brwoser === "Firefox") {
    console.log("You are using Firefox browser.");
}
else if (brwoser === "Edge") {
    console.log("You are using Edge browser.");
}
else {
    console.log("Unknown browser., Please pass a valid browser name");
}