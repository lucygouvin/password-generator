// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var affirmativeResponses = ['y', 'yes',];
var negativeResponses = ['n', 'no', null];
var responses = affirmativeResponses.concat(negativeResponses);


// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  passwordText.value = password;

}

function generatePassword(){
var passLengthPrompt = "How long should your password be? Enter a value between 8 and 128.";
var passLength = 0;

var lowerBoolPrompt = "Include lowercase characters? Enter Y/N";
var lowerBool;

var upperBoolPrompt = "Include uppercase characters? Enter Y/N";
var upperBool;

var numberBoolPrompt = "Include special characters? Enter Y/N";
var numberBool;

var specialBoolPrompt = "Include special characters? Enter Y/N";
var specialBool;

var password = '';


  // prompt length of password 8-128
    // convert to number
    // validate that input is a number, and between 8 and 128
      // If yes, save value and proceed
      // If no, re-prompt
  

  while (passLength<8 || passLength>128 || Number.isNaN(passLength)){
  passLength = parseInt(prompt(passLengthPrompt));
  passLengthPrompt = "Please try again. How long should your password be? Enter a value between 8 and 128.";
  }
  console.log(passLength);



  // prompt lowercase
    // sanitize input
    // validate that input is either y, yes, n, no
     // If yes, save value and proceed
     // If no, re-prompt

  while (!responses.includes(lowerBool)){
    lowerBool = prompt(lowerBoolPrompt);
    lowerBool = sanitizeData(lowerBool);
    lowerBoolPrompt = "Please try again. Include lowercase characters? Enter Y/N";
    console.log(lowerBool);
  }

  lowerBool = validateData(lowerBool);

  console.log(lowerBool);
  
  // prompt uppercase
    // sanitize input
    // validate that input is either y, yes, n, no
      // If yes, save value and proceed
      // If no, re-prompt
  
  while (!responses.includes(upperBool)){
    upperBool = prompt(upperBoolPrompt);
    console.log(upperBool);
    upperBool = sanitizeData(upperBool);
    upperBoolPrompt = "Please try again. Include uppercase characters? Enter Y/N";
  }

  upperBool = validateData(upperBool);

  console.log(upperBool);
  
  // prompt numeric
    // sanitize input
    // validate that input is either y, yes, n, no
      // If yes, save value and proceed
      // If no, re-prompt
  
  while (!responses.includes(numberBool)){
    numberBool = prompt(numberBoolPrompt);
    numberBool = sanitizeData(numberBool);
    numberBoolPrompt = "Please try again. Include special characters? Enter Y/N";
  }

  numberBool = validateData(numberBool);

  console.log(numberBool);

  // prompt special characters
    // sanitize input
    // validate that input is either y, yes, n, no
      // If yes, save value and proceed
      // If no, re-prompt

  while (!responses.includes(specialBool)){
      specialBool = prompt(specialBoolPrompt);
      specialBool = sanitizeData(specialBool);
      specialBoolPrompt = "Please try again. Include special characters? Enter Y/N";
  }

  specialBool = validateData(specialBool);
  console.log(specialBool);
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

function sanitizeData(data){
  if (data!=null){
    dataLower = data.toLowerCase();
    return dataLower;
  }
  return data;
}


function validateData (data){
if (affirmativeResponses.includes(data)){
  data = true;
} else{
  data = false;
}
return data
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

