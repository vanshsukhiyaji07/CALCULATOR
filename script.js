// const display = document.querySelector('.current-operand');
// const previousOperand = document.querySelector('.previous-operand');
// const buttons = document.querySelectorAll('button');

// let firstOperand = '';
// let secondOperand = '';
// let currentOperator = null;
// let shouldResetDisplay = false;

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const buttonText = button.textContent;

//     // Handle numbers
//     if (buttonText >= '0' && buttonText <= '9' || buttonText === '.') {
//       if (shouldResetDisplay) {
//         display.textContent = '';
//         shouldResetDisplay = false;
//       }
//       display.textContent += buttonText;
//     }

//     // Handle operators
//     if (['+', '-', '*', '/'].includes(buttonText)) {
//       if (currentOperator !== null) {
//         calculate();
//       }
//       firstOperand = display.textContent;
//       currentOperator = buttonText;
//       previousOperand.textContent = firstOperand + ' ' + currentOperator;
//       shouldResetDisplay = true;
//     }

//     // Handle equal sign
//     if (buttonText === '=') {
//       secondOperand = display.textContent;
//       calculate();
//       currentOperator = null;
//       previousOperand.textContent = '';
//       shouldResetDisplay = true;
//     }

//     // Handle clear button
//     if (buttonText === 'C') {
//       clearDisplay();
//     }
//   });
// });

// function calculate() {
//   let result = parseFloat(firstOperand);
//   switch (currentOperator) {
//     case '+':
//       result += parseFloat(secondOperand);
//       break;
//     case '-':
//       result -= parseFloat(secondOperand);
//       break;
//     case '*':
//       result *= parseFloat(secondOperand);
//       break;
//     case '/':
//       result /= parseFloat(secondOperand);
//       break;
//   }
//   display.textContent = result;
//   firstOperand = result.toString();
// }

// function clearDisplay() {
//   display.textContent = '';
//   previousOperand.textContent = '';
//   firstOperand = '';
//   secondOperand = '';
//   currentOperator = null;
//   shouldResetDisplay = false;
// }

const buttons = [
  "C",
  "+",
  "*",
  "/",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  ".",
  "1",
  "2",
  "3",
  
  "0",
  ".",
  "=",
  
  
];

function appendChild(value) {
  const display = document.getElementById("display");
  if (value === "=") {
    try {
      display.value = evaluate(display.value);
    } catch (error) {}
  } else if (value === "C") {
    display.value = "";
  } else {
    display.value += value;
  }
}
// function to evaluate a simple arithmetic expression
function evaluate(expression) {
  expression = expression.replace(`\s+/g`, "");

  let result = 0;
  let operator = "+";
  let currentNumber = "";

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    123;
    if (/\d/.test(char) || char === ".") {
      currentNumber += char; // build current number
    } else if (["+", "-", "*", "/", "%"].includes(char)) {
      if (currentNumber) {
        result = performOperation(result, parseFloat(currentNumber), operator);
        currentNumber = ""; // reset current number
      }
      operator = char;
    }
  }
  // last number
  if (currentNumber) {
    result = performOperation(result, parseFloat(currentNumber), operator);
  }
  return result;
}

function performOperation(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "error";
  }
}

function createButton(value) {
  const button = document.createElement("button");
  button.textContent = value;
  button.addEventListener("click", () => appendChild(value));
  return button;
}

function setUpCalculator() {
  const buttonContainer = document.getElementById("buttons"); // div buttons

  buttons.forEach((value) => {
    const button = createButton(value);
    buttonContainer.appendChild(button);
  });
}

setUpCalculator();
