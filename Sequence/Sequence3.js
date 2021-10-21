//Add two Random Dice Number and Print the Result 

let diceNumber1 = Math.floor(((Math.random() * 10) % 6) + 1);
console.log("first dice Value is " +diceNumber1);
let diceNumber2 = Math.floor(((Math.random() * 10) % 6) + 1);
console.log("The Second Dice Number is " +diceNumber2);
let diceSum = diceNumber1 + diceNumber2;
console.log("The sum of Two dice numbers are: " + diceSum);