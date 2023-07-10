"use strict";

const passwordDisplay = document.querySelector("#result");
const length = document.querySelector("#range_input");
const lengthDisplay = document.querySelector("#range_result");
const generateBtn = document.querySelector("#generate_btn");
const copyBtn = document.querySelector("#copy_btn");
const upperLettersCheck = document.querySelector("#checkbox_upper");
const numbersCheck = document.querySelector("#checkbox_number");
const specialsCheck = document.querySelector("#checkbox_special");
const message = document.querySelector('#msg');

// SET PASSWORD LENGTH

let value = 14;

length.addEventListener("input", (e) => {
  value = length.value;

  lengthDisplay.textContent = "Length: " + value;
});

// OPTIONAL CHARS TO PICK

const numbersChar = "0123456789";
const specialChar = "!@#$%^&*().,";
const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// GENERATE AND DISPLAY PASSWORD

function generator(value) {
  return Math.floor(Math.random() * value);
}

generateBtn.addEventListener("click", (e) => {
  let password = "";
  let upperLetters = upperLettersCheck.checked;
  let numbers = numbersCheck.checked;
  let specials = specialsCheck.checked;
  let characters = "abcdefghijklmnopqrstuvwxyz";

  function createOptionalPassword(number, special, upper) {
    if (number) {
      characters += numbersChar;
    }
    if (special) {
      characters += specialChar;
    }
    if (upper) {
      characters += lettersUpper;
    }
  }

  createOptionalPassword(numbers, specials, upperLetters);

  for (let i = 0; i < value; i++) {
    password += characters[generator(characters.length)];
  }

  passwordDisplay.value = password;
});

// COPY TO CLIPBOARD

function msgDissapear() {
  message.style.opacity = 1
    setTimeout(() =>{
      message.style.opacity = 0
    }, 2000)
}

copyBtn.addEventListener("click", () => {
  let text = passwordDisplay.value;

  if (text !== "") {
    navigator.clipboard.writeText(text);
    message.textContent = "Copied !";
    msgDissapear();
  } else {
    message.textContent = "Nothing to copy :(";
    msgDissapear();
  }
});

