let equal_pressed = 0;

// Access all button
let button_input = document.querySelectorAll(".input-button");
console.log(button_input);

// Access all input erase clear equal buttons
let input = document.getElementById("input");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let equal = document.getElementById("equal");

// on load clear everything
window.onload = () => {
  input.value = "";
};

// solve the user input when click on equal button
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    // evaluate user input
    let solution = eval(inp_val);

    // check whether number is integer or decimal
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    // if user input wrong input show textEmphasis:
    alert("Invalid input");
  }
});

// Access all classes of button using forEach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    // display value of each button
    input.value += button_class.value;
  });
});

// clear all input
clear.addEventListener("click", () => {
  input.value = "";
});
// erase one value by delete button
erase.addEventListener("click", () => {
  input.value = input.value.substring(0, input.value.length - 1);
});
