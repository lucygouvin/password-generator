// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Define affirmative and negative responses separately so they can be modified later without having to update the validateData function
var affirmativeResponses = ['y', 'yes',];
var negativeResponses = ['n', 'no', null];
// Concatenate the arrays to get a list of all valid responses
var responses = affirmativeResponses.concat(negativeResponses);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

}

function generatePassword(){
  var password = '';
  var criteria = [];
  // Flag variable to track whether this is the fist time the user has been prompted
  var firstRound = true;

  // Prompt user for password criteria. Keep prompting until they reply "yes" to at least one character type.
  while (!criteria.includes(true)){
    if (!firstRound){
      // Tell the user why the loop is repeating
      alert("You must select at least one character type. Please try again.")
    }
    criteria = prompts();
    firstRound = false;
    console.log(criteria);
  }

  // // start with randomly generated string with the first approved character type

  // // pick a random index to add to reserved list
  // // pick a random number of characters to replace (must be <= length-1)

  // // randomly generate the new characters of the next approved character type
  // // randomly generate the indices that they should go to 
  //   // make sure that at least one is replaced successfully
  //   //if a reserved index is selected, and one has already been replaced, discard
  //   //if a reserved index is selected, but one has not already been replaced, generate a new one
  // // pick the first index as reserved to prevent it an entire character type being overwritten. Add to reserved index

  // //repeat for each approved character type

  // //return password



  return password

}

function prompts(){
// Set values for prompting for password length
var passLengthPrompt = "How long should your password be? Enter a value between 8 and 128.";
var passLength = 0;

// Set prompts for each character type
var lowerBoolPrompt = "Include lowercase characters? Enter Y/N";
var upperBoolPrompt = "Include uppercase characters? Enter Y/N";
var numberBoolPrompt = "Include numerical characters? Enter Y/N";
var specialBoolPrompt = "Include special characters? Enter Y/N";

// If the input is not valid, this string will be appended when the user is re-prompted, to explain.
var inputError = "Please try again. "

// Create an array for each character type to store information related to that prompt.
// The user response will start as a string when it captures the user's input but eventually be converted into a boolean in the validateData function.
// [0] = user response, [1] = initial prompt, [2] = error re-prompt]
var lower = ["", lowerBoolPrompt, inputError + lowerBoolPrompt]
var upper = ["", upperBoolPrompt, inputError + upperBoolPrompt]
var number = ["", numberBoolPrompt, inputError + numberBoolPrompt]
var special = ["", specialBoolPrompt, inputError + specialBoolPrompt]

// Create an array to store the arrays of each character type, so we can iterate through them in a for loop
var charTypes = [lower, upper, number, special];
// This array will store the results of each prompt, to be passed back to the generatePassword function
var promptResponses = [];

// PROMPT FOR LENGTH OF PASSWORD
// Keep prompting until the response is a number which is greater than 8 and less than 128
while (passLength<8 || passLength>128 || Number.isNaN(passLength)){
  //Turn the input into a number. If it is not a number, it will return NaN
  passLength = parseInt(prompt(passLengthPrompt));
  //If the first input does not satisfy the requirements, show the retry prompt
  passLengthPrompt = "Please try again. How long should your password be? Enter a value between 8 and 128.";
  }
  // Add the length to the promptResponses array, which will contain all password criteria
  promptResponses.push(passLength)
  console.log(passLength);

// PROMPT FOR BOOLEAN RESPONSES
// All boolean prompts follow the same flow and therefore can be prompted via for loop to avoid repeating code.    
for (char of charTypes){
  // Keep prompting until the user provides a valid response
  while (!responses.includes(char[0])){
    // Show the prompt for this character type
    char[0] = prompt(char[1]);
    // Call the sanitizeData function to standardize the users's input to better evaluate whether it is a valid response
    char[0] = sanitizeData(char[0]);
    // If the first input does not satisfy the requirements, show the retry prompt
    char[1] = char[2];
    console.log(char[0]);
  }
  // Once the user's input is determined to be a valid response, turn it into a boolean for future use
  char[0] = validateData(char[0]);
  // Add this boolean to the promptResponses array, which will contain all password criteria
  promptResponses.push(char[0]);
  console.log(char[0]);
}
// Return the password criteria
return promptResponses;

}

function sanitizeData(data){
  // If the user clicked "Cancel" on the prompt, it will return null. This is a valid "no" response, but cannot be converted to lowercase. Return it without chaning it.
  if (data!=null){
    // all other inputs should be converted to lowercase. Return the result.
    dataLower = data.toLowerCase();
    return dataLower;
  }
  return data;
}


function validateData (data){
// Converts the user's responses from strings to booleans. If the response is in the affirmativeResponse array, it becomes true, if not, it is false.
if (affirmativeResponses.includes(data)){
  data = true;
} else{
  data = false;
}
return data
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

