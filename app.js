//Addition Function
let x = 12;
let y = 13;

function Addition(x, y) {
  let add = x + y;
  console.log(add);
}

Addition(x, y);

//Subtraction Function
let p = 25;
let q = 10;

function subtract(p, q) {
  let subtract = p - q;
  console.log(subtract);
}
subtract(p, q);

//Multiplication Function
let m = 20;
let n = 10;

function multiply(m, n) {
  let multiply = m * n;
  console.log(multiply);
}
multiply(m, n);

//Division Function
let r = 20;
let s = 2;

function divide(r, s) {
  let divide = r / s;
  console.log(divide);
}
divide(r, s);

//Question 2
let CheckRandomNum = Math.random() * 15;
console.log("Current Randomnum", CheckRandomNum);
let convertedCheckRandomNum = Math.floor(CheckRandomNum + 1);
console.log("Current converted CheckRandomNum=>", convertedCheckRandomNum);

switch (convertedCheckRandomNum) {
  case 1:
    console.log("one is the current random number");

    break;

  case 2:
    console.log("two is the current random number");

    break;

  case 3:
    console.log("three is the current random number");

    break;

  case 4:
    console.log("four is the current random number");

    break;

  case 5:
    console.log("five is the current random number");

    break;
  case 6:
    console.log("six is the current random number");

    break;

  case 7:
    console.log("seven is the current random number");

    break;

  case 8:
    console.log("eight is the current random number");

    break;

  case 9:
    console.log("nine is the current random number");

    break;

  case 10:
    console.log("ten is the current random number");
    break;
  case 11:
    console.log("eleven is the current random number");
    break;
  case 12:
    console.log("twelve is the current random number");
    break;
  case 13:
    console.log("thirteen is the current random number");
    break;
  case 14:
    console.log("fourteen is the current random number");
    break;
  case 15:
    console.log("fifteen is the current random number");
    break;
}
