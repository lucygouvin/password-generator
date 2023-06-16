// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  passwordText.value = password;

}

function generatePassword(){
  // prompt length of password 8-128
    // convert to number
    // validate that input is a number, and between 8 and 128
      // If yes, save value and proceed
      // If no, re-prompt


  // prompt lowercase
    // sanitize input
    // validate that input is either y, yes, n, no
     // If yes, save value and proceed
     // If no, re-prompt
  
  // prompt uppercase
    // sanitize input
    // validate that input is either y, yes, n, no
      // If yes, save value and proceed
      // If no, re-prompt
  
  // prompt numeric
    // sanitize input
    // validate that input is either y, yes, n, no
      // If yes, save value and proceed
      // If no, re-prompt
  
  // prompt special characters
    // sanitize input
    // validate that input is either y, yes, n, no
      // If yes, save value and proceed
      // If no, re-prompt

  // Handle case if all answers are no

  // start with randomly generated string with the first approved character type

  // pick a random index to add to reserved list
  // pick a random number of characters to replace (must be <= length-1)

  // randomly generate the new characters of the next approved character type
  // randomly generate the indices that they should go to 
    // make sure that at least one is replaced successfully
    //if a reserved index is selected, and one has already been replaced, discard
    //if a reserved index is selected, but one has not already been replaced, generate a new one
  // pick the first index as reserved to prevent it an entire character type being overwritten. Add to reserved index

  //repeat for each approved character type

  //return password



  return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

