function calculate() {
    // Get values from the inputs
    const firstNumber = Number(document.getElementById("firstNumber").value);
    const secondNumber = Number(document.getElementById("secondNumber").value);
    const operation = document.getElementById("operation").value;

    let result;

    switch (operation) {
        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "%":
            result = firstNumber % secondNumber;
            break;

        case "**":
    result = firstNumber ** secondNumber;
    break;

        case "/":
            if (secondNumber === 0) {
                document.getElementById("answer").textContent = "Answer: Cannot divide by zero";
                return;
            }
            result = firstNumber / secondNumber;
            break;

        default:
            result = "Invalid operation";
    }

    document.getElementById("answer").textContent = "Answer: " + result;
}

// Current Time
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);