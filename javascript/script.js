import {
  BinaryToDecimal,
  BinaryToHexa,
  BinaryToOctal,
  DecimalToBinary,
  DecimalToHexa,
  DecimalToOctal,
  HexaToBinary,
  HexaToDecimal,
  HexaToOctal,
  OctalToBinary,
  OctalToDecimal,
  OctalToHexa,
} from "./Utils.js";

const Btncontainer = document.querySelector(".buttons");
const UserChoice = document.querySelectorAll(".conversion > div");
const userInput = document.querySelector(".input");

const Binary = document.getElementById("binary");
const Decimal = document.getElementById("decimal");
const Octal = document.getElementById("octal");
const Hexadecimal = document.getElementById("hexadecimal");

let inputs = "";
const letters = "ABCDEF";
const countsBtns = [];
let helper = ["CE", "DEL", "="];
let choice = "dec";

const lettersBtns = Array.from(letters).map((letter, i) => {
  return `<button class="input-btn">${letter}</button>`;
});

for (var i = 0; i < 10; i++) {
  countsBtns.push(`<button class="input-btn">${i}</button>`);
}

const helperBtns = helper.map((btn) => {
  return CreateBtn(btn);
});

Btncontainer.innerHTML =
  countsBtns.join("") + lettersBtns.join("") + helperBtns.join("");

Btncontainer.querySelectorAll(".input-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    inputs += btn.innerHTML;
    userInput.innerHTML = inputs;
  });
});

Btncontainer.querySelectorAll(".helper-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML == "DEL") {
      inputs = inputs.substring(0, inputs.length - 1);
    } else if (btn.innerHTML == "CE") {
      Decimal.innerHTML = "";
      Binary.innerHTML = "";
      Hexadecimal.innerHTML = "";
      Octal.innerHTML = "";
      inputs = "";
    } else if (btn.innerHTML == "=") {
      if (choice == "dec") {
        Decimal.innerHTML = userInput.innerHTML;
        Binary.innerHTML = DecimalToBinary(userInput.innerHTML);
        Hexadecimal.innerHTML = DecimalToHexa(userInput.innerHTML);
        Octal.innerHTML = DecimalToOctal(userInput.innerHTML);
      } else if (choice == "bin") {
        Binary.innerHTML = userInput.innerHTML;
        Decimal.innerHTML = BinaryToDecimal(userInput.innerHTML);
        Hexadecimal.innerHTML = BinaryToHexa(userInput.innerHTML);
        Octal.innerHTML = BinaryToOctal(userInput.innerHTML);
      } else if (choice == "oct") {
        Binary.innerHTML = OctalToBinary(userInput.innerHTML);
        Decimal.innerHTML = OctalToDecimal(userInput.innerHTML);
        Hexadecimal.innerHTML = OctalToHexa(userInput.innerHTML);
        Octal.innerHTML = userInput.innerHTML;
      } else {
        Binary.innerHTML = HexaToBinary(userInput.innerHTML);
        Decimal.innerHTML = HexaToDecimal(userInput.innerHTML);
        Hexadecimal.innerHTML = userInput.innerHTML;
        Octal.innerHTML = HexaToOctal(userInput.innerHTML);
      }
    }
    userInput.innerHTML = inputs;
  });
});

UserChoice.forEach((user) => {
  user.addEventListener("click", () => {
    choice = user.classList[0];
    disabledButton();
    user.classList.add("selected");
    UserChoice.forEach((item) => {
      if (item !== user) {
        item.classList.remove("selected");
      }
    });
  });
});

function CreateBtn(value) {
  return `<button class="helper-btn">${value}</button>`;
}

function disabledButton() {
  Btncontainer.querySelectorAll("button").forEach((btn) => {
    if (choice == "bin") {
      if (btn.innerHTML == "1" || btn.innerHTML == "0") {
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }
      inputs = Binary.innerHTML;
    } else if (choice == "oct") {
      if (btn.innerHTML < 8) {
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }
      inputs = Octal.innerHTML;
    } else if (choice == "dec") {
      if (btn.innerHTML < 10) {
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }
      inputs = Decimal.innerHTML;
    } else {
      btn.disabled = false;
      inputs = Hexadecimal.innerHTML;
    }
    if (helper.includes(btn.innerHTML)) {
      btn.disabled = false;
    }
    userInput.innerHTML = inputs;
    if (btn.disabled) {
      btn.classList.add("disabled");
      btn.classList.remove("enabled");
    } else {
      btn.classList.remove("disabled");
      btn.classList.add("enabled");
    }
  });
}

window.addEventListener("DOMContentLoaded", () => disabledButton());
