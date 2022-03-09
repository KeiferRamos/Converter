function BinaryToDecimal(input) {
  const userInput = input.toString();
  const Binary = [1];
  let answer = 0;

  let tempVal = Binary[0];
  for (var i = 1; i < userInput.length; i++) {
    const n = tempVal * 2;
    Binary.push(n);
    tempVal = n;
  }

  Binary.reverse().forEach((bin, i) => {
    if (userInput.charAt(i) == 1) {
      answer += bin;
    }
  });

  return answer;
}

function BinaryToOctal(input) {
  const answer = BinaryToDecimal(input);
  return DecimalToOctal(answer);
}

function BinaryToHexa(input) {
  const answer = BinaryToDecimal(input);
  return DecimalToHexa(answer);
}

function DecimalToBinary(input) {
  let userInput = input;
  const Binary = [1];
  const sortedNum = [];
  let answer = "";

  let tempVal = Binary[0];
  while (true) {
    const ToAdd = tempVal * 2;
    if (ToAdd > userInput) {
      break;
    }
    Binary.push(ToAdd);
    tempVal = ToAdd;
  }

  for (var i = Binary.length - 1; i > -1; i--) {
    let tempVal = userInput - Binary[i];
    if (tempVal >= 0) {
      sortedNum.push(Binary[i]);
      userInput = tempVal;
    }
  }

  Binary.reverse().forEach((bin) => {
    answer += sortedNum.includes(bin) ? "1" : "0";
  });

  return answer;
}

function DecimalToOctal(input) {
  let userInput = input;
  const Octal = [];

  while (userInput / 8 > 0) {
    Octal.push(((userInput / 8) % 1) * 8);
    userInput = Math.floor(userInput / 8);
  }
  return Octal.reverse().join("");
}

function DecimalToHexa(input) {
  let userInput = input;
  const Hexa = [];

  while (userInput / 8 > 0) {
    Hexa.push(((userInput / 16) % 1) * 16);
    userInput = Math.floor(userInput / 16);
  }

  for (var i = 0; i < Hexa.length; i++) {
    if (Hexa[i] == 10) {
      Hexa[i] = "A";
    } else if (Hexa[i] == 11) {
      Hexa[i] = "B";
    } else if (Hexa[i] == 12) {
      Hexa[i] = "C";
    } else if (Hexa[i] == 13) {
      Hexa[i] = "D";
    } else if (Hexa[i] == 14) {
      Hexa[i] = "E";
    } else if (Hexa[i] == 15) {
      Hexa[i] = "F";
    }
  }

  return Hexa.reverse().join("");
}

function HexaToDecimal(input) {
  const userInput = Array.from(input);
  let answer = 0;

  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i] == "A") {
      userInput[i] = 10;
    } else if (userInput[i] == "B") {
      userInput[i] = 11;
    } else if (userInput[i] == "C") {
      userInput[i] = 12;
    } else if (userInput[i] == "D") {
      userInput[i] = 13;
    } else if (userInput[i] == "E") {
      userInput[i] = 14;
    } else if (userInput[i] == "F") {
      userInput[i] = 15;
    }
  }

  let index = 0;
  for (var i = userInput.length - 1; i > -1; i--) {
    answer += userInput[index] * 16 ** i;
    index++;
  }
  return answer;
}

function HexaToBinary(input) {
  const answer = HexaToDecimal(input);
  return DecimalToBinary(answer);
}

function HexaToOctal(input) {
  const answer = HexaToDecimal(input);
  return DecimalToOctal(answer);
}

function OctalToBinary(input) {
  const answer = OctalToDecimal(input);
  return DecimalToBinary(answer);
}

function OctalToDecimal(input) {
  const userInput = input.toString();
  let answer = 0;

  let index = 0;
  for (var i = userInput.length - 1; i > -1; i--) {
    answer += userInput[index] * 8 ** i;
    index++;
  }
  return answer;
}

function OctalToHexa(input) {
  const answer = OctalToDecimal(input);
  return DecimalToHexa(answer);
}

export {
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
};
