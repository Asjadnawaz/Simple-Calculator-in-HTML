// const display = document.getElementById('display');
// const buttons = document.querySelectorAll('button');

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;

//         if (value == "C") {
//             display.value = "";
//         }
//         else if (value == "=") {
//             display.value = eval(display.value);
//         }
//         else {
//             display.value += value;
//         }
//     }

//     )
// });





let display = document.getElementById('display');

function appendValue(value) {
    let last_char = display.value[display.value.length - 1];

    if(display.value == "" && (value == "+" || value == "-" || value == "*" || value == "/")){
        alert("Starts With Operator is not Allowed!");
        return;
    }

    // if last is operator AND new one is also operator → block it
    if ((last_char == "+" || last_char == "-" || last_char == "/" || last_char == "*") &&
        (value == "+" || value == "-" || value == "*" || value == "/")) {
        alert("Invalid Operation!");
    } 
    else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

