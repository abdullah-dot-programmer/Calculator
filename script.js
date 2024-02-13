let string = "";
let buttons = document.querySelectorAll("button");
const input = document.querySelector(".input-box");
// console.log(buttons);
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == "←") {
            input.value = input.value.slice(0, -1);
        }
        else if (e.target.innerHTML == "%") {
            input.value = input.value*1/100;
        }
         else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else {
            // console.log(e.target);
            string = string + e.target.innerHTML;
            input.value = string;
        };
    });
});
