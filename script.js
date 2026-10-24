const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let firstNumber = "";
let secondNumber = "";
let operator = "";

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        if (button.textContent == "c") {
            display.textContent = ""
        }

        else if (button.textContent == "⌫") {
            display.textContent = display.textContent.slice(0, -1);
        }

        else if (["+", "-", "×", "÷"].includes(button.textContent)) {
            firstNumber = display.textContent;
            operator = button.textContent;
            display.textContent = "";
        }

        else if (button.textContent === "=") {
            secondNumber = display.textContent;

                if (operator === "+") {
                    display.textContent = Number(firstNumber) + Number(secondNumber);
                }
                else if (operator === "-") {
                    display.textContent = Number(firstNumber) - Number(secondNumber);
                }
                else if (operator === "×") {
                    display.textContent = Number(firstNumber) * Number(secondNumber);
                }
                else {
                    if ( secondNumber == 0){
                        display.textContent = "Can't Divide By the Zero"
                    }
                    else {
                        display.textContent = Number(firstNumber) / Number(secondNumber);
                    }
                }
        }

        else {
            if(button.textContent === ".") {
                if (!display.textContent.includes(".")) {
                    display.textContent += ".";
                }
                
            }
            else {
                display.textContent += button.textContent;
            }
            
        }
    });
});