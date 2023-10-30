let displayValue = "0";
let calculadoraApagada = false;

function addToDisplay(value) {
  if (calculadoraApagada) return;
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  if (calculadoraApagada) return;
  displayValue = "0";
  document.getElementById("display").value = displayValue;
}

function calculate() {
  if (calculadoraApagada) return;
  try {
    displayValue = eval(displayValue);
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function encenderCalculadora() {
  calculadoraApagada = false;
  displayValue = "0";
  document.getElementById("display").value = displayValue;
}

function apagarCalculadora() {
  calculadoraApagada = true;
  displayValue = " ";
  document.getElementById("display").value = displayValue;
}
