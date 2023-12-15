// Array of special characters to be included in password
let specialCharacters = [
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
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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
let upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
  let length = prompt("Length of password (8-128 characters):");
  if (length < 8 || length > 128) {
    alert("Invalid length. Please choose between 8 and 128 characters.");
    return null;
  }

  let includeLower = confirm("Include lowercase characters?");
  let includeUpper = confirm("Include uppercase characters?");
  let includeNumeric = confirm("Include numeric characters?");
  let includeSpecial = confirm("Include special characters?");

  if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return null;
  }

  return {
    length: length,
    includeLower: includeLower,
    includeUpper: includeUpper,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial,
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return 'd';

}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  if (!options) {
    return "";
  }

  let password = "";
  let possibleCharacters = getPossibleCharacters(options);

  for (let i = 0; i < options.length; i++) {
    password += getRandom(possibleCharacters);
  }

  return password;
}


function getPossibleCharacters(options)
{
  let  possibleCharacters = [];

  if (options.includeLower) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }
  if (options.includeUpper) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }
  if (options.includeNumeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (options.includeSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  return possibleCharacters;
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);