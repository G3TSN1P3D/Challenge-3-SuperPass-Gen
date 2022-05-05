//Assignment code here
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lower = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '!@#$%^&*_-/+';
function makeid(length, characters) {
  let result = '';
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function generatePassword(passLeng, charOp) {
  let lenght = passLeng;
  let characters = charOp;
  let password = makeid(lenght, charOp);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passLenght = lengthCrit();
  let charOp = passCrit();
  var password = generatePassword(passLenght, charOp);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function lengthCrit () {
  let passLeng = window.prompt("Choose the lenght of the password between 8-128 characters: ");
  if (passLeng < 8 || passLeng > 128) {
    window.alert(`${passLeng} is not a valid lenght!`);
    return;
  } else {
    return passLeng;
  }
}
function passCrit () {
  let upperCase = window.confirm('Do you wish to include upper case characters?');
  let lowerCase = window.confirm('Do you wish to include lower case characters?');
  let numericChar = window.confirm('Do you wish to include numeric characters?');
  let specialChar = window.confirm('Do you wish to include special characters?');

  if (upperCase && lowerCase && numericChar && specialChar) {
    characters = `${upper}${lower}${numbers}${symbols}`;
    return characters;
  } else if (upperCase && lowerCase && numericChar) {
    characters = `${upper}${lower}${numbers}`;
    return characters;
  } else if (upperCase && lowerCase && specialChar) {
    characters = `${upper}${lower}${symbols}`;
    return characters;
  } else if (upperCase && specialChar && numericChar) {
    characters = `${upper}${numbers}${symbols}`;
    return characters;
  } else if (lowerCase && numericChar && specialChar) {
    characters = `${lower}${symbols}`;
    return characters;

  } else if (upperCase && lowerCase) {
    characters = `${upper}${lower}`;
    return characters;
  } else if (upperCase && specialChar) {
    characters = `${upper}${symbols}`;
    return characters;
  } else if (upperCase && numericChar) {
    characters = `${upper}${numbers}`;
    return characters;

  } else if (lowerCase && numericChar) {
    characters = `${lower}${numbers}`;
    return characters;
  } else if (lowerCase && specialChar) {
    characters = `${lower}${symbols}`;
    return characters;
  } else if (numericChar && specialChar) {
    characters = `${numbers}${symbols}`;
    return characters;
  } else if (upperCase) {
    characters = `${upper}`;
    return characters;
  } else if (lowerCase) {
    characters = `${lower}`;
    return characters;
  } else if (numericChar) {
    characters = `${numbers}`;
    return characters;
  } else if (specialChar) {
    characters = `${symbols}`;
    return characters;
  } else {
    window.alert("You did not select a criteria!\nTry Again!")
    return;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

