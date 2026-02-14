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

// round number if larger than 10 digits
function formatResult(value) {
  if (value === null || !Number.isFinite(value)) return value; // double check for edge cases
  return Number(value.toPrecision(10));
}

let arithmeticOperator = null;
let firstNum = "";
let secondNum = "";

// update display
function updateDisplay() {
  if (arithmeticOperator === "/" && secondNum === "0") { // edge case for dividing by zero
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
  const rawResult = operate(arithmeticOperator, Number(firstNum), Number(secondNum));
  const result = formatResult(rawResult);
  // reset variables for next operation
  firstNum = String(result);
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
      const rawResult = operate(arithmeticOperator, Number(firstNum), Number(secondNum));
      const result = formatResult(rawResult);
      firstNum = String(result);
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
