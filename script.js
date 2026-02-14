// TODO:
//    What currently works:
//        add, subtract, multiply, and divide functions,
//        function for calculator operation with three variables called "operate",
//        HTML calculator with buttons for each digit and operator,
//            display for the calculator
//            clear button
//    What I need to work on:
//        figure out how to update the display properly,
//        make the calculator work,
//            store the variables,
//
// basic arithmetic functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    display = "Funny guy huh?";
  }
  return a / b;
}

// operate function
function operate(operator, a, b) {
  switch (operator) {
    case ("+"): return add(a, b);
    case ("-"): return subtract(a, b);
    case ("*"): return multiply(a, b);
    case ("/"): return divide(a, b);
    default:
      console.log("error");
      break;
  }

}

let arithmeticOperator = null;
let firstNum = "";
let secondNum = "";

// default display
let display = 0;
document.getElementById("output").innerHTML = display

// set firstNum
const buttonNumberOne = document.querySelectorAll(
  "#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero"
);
buttonNumberOne.forEach(button => {
  button.addEventListener("click", function() {
    const buttonPress = this.textContent; // set firstNum to clicked button
    // checks whether an operation button has been pressed
    if (arithmeticOperator === null) { // if not, store the pressed button in numOne, and append it to the display
      firstNum += buttonPress;
      display = firstNum;
    } else { // if so, store all subsequent numberbtn presses in secondNum
      secondNum += buttonPress;
    }

    display = firstNum + (arithmeticOperator ?? "") + secondNum;
    document.getElementById("output").textContent = display;

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
