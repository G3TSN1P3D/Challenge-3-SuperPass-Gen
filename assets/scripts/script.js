//Assignment code here
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
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_-/+';
    return characters;
  } else if (upperCase && lowerCase && numericChar) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return characters;
  } else if (upperCase && lowerCase && specialChar) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*_-/+';
    return characters;
  } else if (upperCase && specialChar && numericChar) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-/+';
    return characters;
  } else if (lowerCase && numericChar && specialChar) {
    characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*_-/+';
    return characters;

  } else if (upperCase && lowerCase) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return characters;
  } else if (upperCase && specialChar) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_-/+';
    return characters;
  } else if (upperCase && numericChar) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return characters;

  } else if (lowerCase && numericChar) {
    characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return characters;
  } else if (lowerCase && specialChar) {
    characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*_-/+';
    return characters;
  } else if (numericChar && specialChar) {
    characters = '0123456789!@#$%^&*_-/+';
    return characters;
  } else if (upperCase) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return characters;
  } else if (lowerCase) {
    characters = 'abcdefghijklmnopqrstuvwxyz';
    return characters;
  } else if (numericChar) {
    characters = '0123456789';
    return characters;
  } else if (specialChar) {
    characters = '!@#$%^&*_-/+';
    return characters;
  } else {
    window.alert("You did not select a criteria!\nTry Again!")
    return;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

