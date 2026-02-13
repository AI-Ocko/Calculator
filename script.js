// TODO:
// add functionality to clear button
// figure out how to store secondNum without duplicating numbers in the display
// append secondNum to the display
// add functionality to equals sign, I'm thinking:
//  on click
//  operate()
//  print to display
//  stop all function
// 
// basic arithmetic functions
function add(a, b) {
  let c = a + b;
  return c;
}

function subtract(a, b) {
  let c = a - b;
  return c;
}

function multiply(a, b) {
  let c = a * b;
  return c;
}

function divide(a, b) {
  let c = a / b;
  return c;
}

// operate function
function operate(operator, a, b) {
  switch (operator) {
    case ("+"):
      return add(a, b);
      break;
    case ("-"):
      return subtract(a, b);
      break;
    case ("*"):
      return multiply(a, b);
      break;
    case ("/"):
      return divide(a, b);
      break;
    default:
      console.log("error");
      break;
  }

}
// default display
var display = 0;
document.getElementById("output").innerHTML = display;

let firstNum, secondNum, arithmeticOperator, result;

// set firstNum
const buttonNumberOne = document.querySelectorAll(
  "#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero"
);
buttonNumberOne.forEach(button => {
  button.addEventListener("click", function() {
    firstNum = this.textContent; // set firstNum to clicked button
    if (display == 0) { // check if display is 0, if so, changed to firstNum
      display = firstNum;
    } else { // if not, append numbers

      display = display + firstNum;
    }
    document.getElementById("output").innerHTML = display;
  });
});

// set arithmeticOperator 
const operatorButtons = document.querySelectorAll(
  "#plus, #minus, #multiply, #divide"
);
operatorButtons.forEach(button => {
  button.addEventListener("click", function() {
    arithmeticOperator = this.textContent; // set arithmeticOperator to clicked button
    display = display + arithmeticOperator;
    document.getElementById("output").innerHTML = display;
  })
});
