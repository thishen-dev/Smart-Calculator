const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

function calculate(expression) {
    expression = expression.replaceAll(" ", "");
    expression = expression.replaceAll("×", "*");
    expression = expression.replaceAll("÷", "/");
    expression = expression.replace(/√(\d+(\.\d+)?)/, "sqrt($1)");

    if (/[+*/]{2}|-{2}/.test(expression)) {
        throw new Error("Invalid expression");
    }

    return math.evaluate(expression);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.textContent === "AC") {
            display.value = "0"
        }

        else if (button.textContent === "⌫") {
            display.value = display.value.slice(0, -1);
            if (display.value === "") {
                display.value = "0"
            }
        }

        else if (button.textContent === "=") {
            try {
                display.value = calculate(display.value);
            }
            catch {
                display.value = "Error"
            }
            
        }

        else if (display.value === "0"){
            display.value = button.textContent;
        }

        else if (button.textContent === "√") {
            display.value += "√"
        }

        else {
            display.value += button.textContent;
        }
    })
})


document.addEventListener("keydown", event => {
    if (event.ctrlKey || event.altKey || event.metaKey) return;

    const key = event.key;

    if ("0123456789.+-*/".includes(key)) {
        display.value = display.value === "0" ? key : display.value + key;
    }
    else if (key === "Enter") {
        event.preventDefault();
        try {
            display.value = calculate(display.value);
        } catch {
            display.value = "Error";
        }
    }
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1) || "0";
    }
    else if (key === "Escape") {
        display.value = "0";
    }
    else if (key.toLowerCase() === "r") {
        display.value = display.value === "0" ? "√" : display.value + "√";
    }
});
