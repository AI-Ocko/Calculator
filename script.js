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

let a, b, c;

// default value for calculator display
var result = 0;
document.getElementById("output").innerHTML = result;

const buttons = document.querySelectorAll(
  // maybe put the operators in a separate function for display, purposes, not sure
  "#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero, #plus, #minus, #multiply, #divide, #equals"
);
buttons.forEach(button => {
  button.addEventListener("click", function() {
    // need to chnage this so display can properly output opreator signs
    a = +this.textContent;
    result = a;
    document.getElementById("output").innerHTML = result;
  });
});
