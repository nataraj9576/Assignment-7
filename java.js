let display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  let lastChar = display.value.slice(-1);
  if ("+-*/".includes(lastChar)) return; 
  display.value += op;
}

function appendDot() {
  let parts = display.value.split(/[\+\-\*\/]/);
  let lastPart = parts[parts.length - 1];
  if (!lastPart.includes(".")) {
    display.value += ".";
  }
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function square() {
  if (display.value) {
    display.value = Math.pow(eval(display.value), 2);
  }
}

function cube() {
  if (display.value) {
    display.value = Math.pow(eval(display.value), 3);
  }
}