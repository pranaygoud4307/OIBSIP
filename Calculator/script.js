let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let clearBtn = document.getElementById("clear");

let current = "";

// Handle numbers & operators
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.getAttribute("data-val");

        if (value) {
            current += value;
            display.value = current;
        }
    });
});

// Evaluate
document.querySelector(".equal").addEventListener("click", () => {
    try {
        if (current === "") return;
        let result = eval(current);
        display.value = result;
        current = result.toString();
    } catch {
        display.value = "Error";
        current = "";
    }
});

// Clear
clearBtn.addEventListener("click", () => {
    current = "";
    display.value = "";
});
