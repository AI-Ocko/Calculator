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

function operate(operator, a, b) {
  switch(operator) {
    case ("+"):
      return add(a, b);
      break;
    case("-"):
      return subtract(a, b);
      break;
    case("*"):
      return multiply(a, b);
      break;
    case("/"):
      return divide(a, b);
      break;
    default:
      console.log("error");
      break;
  }

}
let a, b, c;

b = parseInt(b);
c = parseInt(c);

a = prompt("Enter what operation you wish to perform");
b = prompt("Enter the first number");
c = prompt("Enter the second number");

let y = operate(a, b, c); 
console.log("%d\n", y);
