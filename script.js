// DECISION MAKING EXERCISE

// 1a
let randomNum = Math.floor(Math.random() * 5 + 1)
console.log(randomNum);

// 1b
if (5 >= 4){
    console.log("Greater than or equal to 4");
} else if (randomNum == 2 || randomNum == 3) {
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

// 1c
if (randomNum != 3) {
    console.log("Not equal");
}

// 1d
if (randomNum !==3 && randomNum !==5){
    console.log("NOT equal to 3 AND not equal to 5");
}

// 1e 
if (randomNum ===2 || randomNum === 4) {
    console.log("Equal to 2 or equal to 4");
}

// BONUS
// 2
randomNum >= 4 ? console.log("Greater than or equal to 4") : console.log("Less than 4");

// 3
// Switch Statement takes in a parameter/arguement and returns something based on the CASE (Or the match) that the parameter/arguemtn goes with
// In this example if randomNum is 1 it will run the console.log("one"); code, if randomNum is 2 it will run the console.log("Two"); code, etc.
switch (randomNum){
    case 1:
        console.log("One");
        // Break keywords are needed between each case so that the code for the case that follows is NOT run as well
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    // Default works like ELSE in a Conditional Statement (If the value does not match any of the cases, then it will run what it is in the default)
    // default:
    // console.log("Five")
    // There is no need for a BREAK at the end of the Switch Statement since there are no other cases/possibilities
}