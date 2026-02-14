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
  if (b === 0) return null;
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

// update display
function updateDisplay() {
  // edge case for dividing by zero
  if (arithmeticOperator === "/" && secondNum === "0") {
    document.getElementById("output").textContent = "Funny guy huh?";
  } else
    document.getElementById("output").textContent =
      firstNum + (arithmeticOperator ?? "") + secondNum || "0";
}

updateDisplay();

// equals button
const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", function() {
  // in case number and arithmeticbuttons have not been set
  if (firstNum === "" || secondNum === "" || arithmeticOperator === null) return;

  // calculate
  const result = operate(arithmeticOperator, Number(firstNum), Number(secondNum));
  // reset variables for next operation
  firstNum = result;
  secondNum = "";
  arithmeticOperator = null;

  document.getElementById("output").textContent = result;
});

// set firstNum
const numberButton = document.querySelectorAll(
  "#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero"
);
numberButton.forEach(button => {
  button.addEventListener("click", function() {
    const buttonPress = this.textContent; // set firstNum to clicked button
    // checks whether an operation button has been pressed
    if (arithmeticOperator === null) { // if not, store the pressed button in numOne, and append it to the display
      firstNum += buttonPress;
      updateDisplay();
    } else { // if so, store all subsequent numberbtn presses in secondNum
      secondNum += buttonPress;
    }
    updateDisplay();

  });
});

// set arithmeticOperator 
const arithmeticOperatorButton = document.querySelectorAll(
  "#plus, #minus, #multiply, #divide"
);
arithmeticOperatorButton.forEach(button => {
  button.addEventListener("click", function() {
    // edge case for no first number
    if (firstNum === "") return;
    // if there's already a second num, then evaluate the current expression
    if (secondNum) {
      const result = operate(arithmeticOperator, Number(firstNum), Number(secondNum));
      firstNum = result;
      secondNum = "";
    }

    arithmeticOperator = this.textContent;

    updateDisplay();
  });
});

// clear display
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function() {
  arithmeticOperator = null;
  firstNum = "";
  secondNum = "";
  updateDisplay();
});
