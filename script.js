// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var lowercase;
var uppercase;
var numeric;
var special;
var inputLength;
function characterValidation() {
  lowercase = confirm("Would you like your password to contain lowercase characters?");
  uppercase = confirm("Would you like your password to contain upercase characters?");
  numeric = confirm("Would you like your password to contain numeric characters?");
  special = confirm("Would you like your password to contain special characters?");
  if (lowercase == false && uppercase == false && numeric == false && special == false) {
    alert("Password should contain at least one character type. Please try again!");
    characterValidation();
  }
}
// Function to prompt user for password options
function getPasswordOptions() {
  inputLength = Number(prompt("Please choose the length of your password, between 8 and 128 characters."));
  if (inputLength < 8 || inputLength > 128 || isNaN(inputLength)) {
    alert("Invalid password size, please try again.");
    getPasswordOptions();
  } else {
  characterValidation();
  }
}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[(Math.floor(Math.random() * arr.length))];
}

// Function to generate password with user input
function generatePassword() {
  var passwordContent = "";
  while (passwordContent.length !== inputLength && passwordContent.length < inputLength) {
    if (uppercase == true) {
        passwordContent += getRandom(upperCasedCharacters);
    }
    if (lowercase == true) {
      passwordContent += getRandom(lowerCasedCharacters);
    }
    if (numeric == true) {
      passwordContent += getRandom(numericCharacters);
    }
    if (special == true) {
      passwordContent += getRandom(specialCharacters);
    }
  }
  return passwordContent;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input

function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

