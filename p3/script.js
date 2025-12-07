const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let input = "";
buttons.forEach(button => {
    button.addEventListener("click", () => {
        input += button.textContent;
        display.value = input;
    });
});

clearBtn.addEventListener("click", () => {
    input = "";
    display.value = "";
});

equalsBtn.addEventListener("click", () => {
    try {
        input = eval(input).toString();
        display.value = input;
    } catch (e) {
        display.value = "Error";
        input = "";
    }
});
