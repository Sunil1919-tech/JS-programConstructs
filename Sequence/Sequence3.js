//Adding five two digit random values

let diceNumber1 = Math.floor(((Math.random() * 100)) + 10);
console.log("first dice Value is " + diceNumber1);
let diceNumber2 = Math.floor(((Math.random() * 100)) + 10);
console.log("The Second Dice Number is " + diceNumber2);
let diceNumber3 = Math.floor(((Math.random() * 100)) + 10);
console.log("The third Dice Number is " + diceNumber3);
let diceNumber4 = Math.floor(((Math.random() * 100)) + 10);
console.log("The Second Dice Number is " + diceNumber4);
let diceNumber5 = Math.floor(((Math.random() * 100) ) + 10);
console.log("The Second Dice Number is " + diceNumber5);

let diceSum = diceNumber1 + diceNumber2+diceNumber3+diceNumber4+diceNumber5;
console.log("The sum of Five dice numbers are: " + diceSum);