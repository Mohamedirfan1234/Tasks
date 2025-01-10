console.log("SAM");
let a = 1;
if (a == 10) {
  console.log("a is 10");
} else {
  console.log("a is not 10");
}
let d = "l";
switch (d) {
  case "a":
    console.log("character is a or A");
    break;
  case "e":
    console.log("Character is e or E");
    break;
  case "i":
    console.log("Character is i or I");
    break;
  case "o":
    console.log("Character is o or O");
    break;
  case "u":
    console.log("Character is u or U");
    break;
  default:
    console.log("Character is constant");
}
let gradeCategory = Math.floor(score / 10);
switch (gradeCategory) {
  case 10:
  case 9:
    alert("Grade: A");
    break;
  case 8:
    alert("Grade: B");
    break;
  case 7:
    alert("Grade: C");
    break;
  case 6:
    alert("Grade: D");
    break;
  case 5:
  case 4:
    alert("Grade: E");
    break;
  default:
    if (score >= 0 && score <= 39) {
      alert("Grade: F (Fail)");
    } else {
      alert("Invalid score! Please enter a value between 0 and 100.");
    }
}
let i;
for (i = 0; i <= 5; i++) {
  console.log("*".repeat(i));
}
let a = 5;
for (i = 0; i <= 15; i++) {
  console.log(i, "* 5 =", i * 5);
}

let sum = 0;
for (i = 0; i <= 50; i++) {
  sum = sum + i;
}
console.log("Sum of numbers from 1 - 50 is ", sum);

console.log("Pattern printing");
for (i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
function add(a, b) {
  return a + b;
}
console.log(add(5, 6));
function print() {
  let a = prompt("Enter the name: ");
  console.log("My name is ", a);
}
print();
