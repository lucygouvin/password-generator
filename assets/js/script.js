// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  passwordText.value = password;

}

function generatePassword(){
  // 

  

  return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

