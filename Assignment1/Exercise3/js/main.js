import {reverseString} from "../utils/string.js";

const userInput = document.getElementById("user-input");
const p = document.getElementById("result");
function onKeyUp() {
    p.textContent = reverseString(userInput.value);
}

window.onKeyUp = onKeyUp;
