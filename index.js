//Looping Through Student Names
const students = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("Students List:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

//Looping Through Numbers and Checking Even or Odd
const numbers = [10, 15, 20, 25, 30];
console.log(`\n"Even and Odd Number:"`);
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        console.log(numbers[i] + " is even number");
    }
    else {
        console.log(numbers[i] + " is odd number");
    }
}

//Checking Passing Scores
const scores = [45, 62, 85, 30, 75];
console.log(`\n"Score Status:"`);
for (let i = 0; i < scores.length; i++) {
    if(scores[i] >= 60) {
        console.log( "Score " + scores[i] + " is a pass");
    }
    else {
        console.log("Score " + scores[i] + " is a fail");
    }
}

//Using a While Loop to Double a Value
let value = 10;
console.log(`\n"Value Doubling Loop:"`);
while (value < 100) {
    console.log("Value is: " + value);
    value *= 2;
}