// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GLOBAL VALUES
// Define affirmative and negative responses separately so they can be modified later 
var affirmativeResponses = ['y', 'yes'];
// If the user clicks "Cancel" on the prompt (other than the length prompt), interpret that "null" response as "no".
var negativeResponses = ['n', 'no', null];
var responses = affirmativeResponses.concat(negativeResponses);

// Set values for prompts and starting values
var passLengthPrompt = "How long should your password be? Enter a value between 8 and 128.";
var passLength = "";
var lowerBoolPrompt = "Include lowercase characters? Enter Y/N";
var upperBoolPrompt = "Include uppercase characters? Enter Y/N";
var numberBoolPrompt = "Include numerical characters? Enter Y/N";
var specialBoolPrompt = "Include special characters? Enter Y/N";
var inputError = "Please try again. "

// Create an array of arrays for each character type to store information related to that prompt.
// [0] = user response, [1] = initial prompt, [2] = error re-prompt, [3] = values]
var charTypes = [
  ["", lowerBoolPrompt, inputError + lowerBoolPrompt, "abcdefghijklmnopqrstuvwxyz"], //lowercase
  ["", upperBoolPrompt, inputError + upperBoolPrompt, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"], //uppercase
  ["", numberBoolPrompt, inputError + numberBoolPrompt, "0123456789"], //numbers
  ["", specialBoolPrompt, inputError + specialBoolPrompt, ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~' + "'"] //special characters
]

var validValues = "";


// FUNCTIONS
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

function generatePassword() {
  // PROMPT FOR LENGTH OF PASSWORD
  // Keep prompting for length until the response is a number which is greater than 8 and less than 128
  while (passLength < 8 || passLength > 128 || Number.isNaN(passLength)) {
    //Turn the input into a number. If it is not a number, it will return NaN
    passLength = parseInt(prompt(passLengthPrompt));
    console.log(passLength);
    //If the first input does not satisfy the requirements, show the retry prompt
    passLengthPrompt = "Please try again. How long should your password be? Enter a value between 8 and 128.";
  }
  // Create an empty array of the specified length
  var password = Array(passLength).fill("");



  // PROMPT FOR BOOLEAN RESPONSES
  // If there are no valid values, prompt for criteria
  while (!validValues.length) {
    // For each character type, check that the user has entered a valid response, and if it is an affirmative response, add those character types to validValues    
    for (char of charTypes) {
      // Reset user's previous entry to avoid an infinite loop
      char[0] = "";

      // Keep prompting until the user provides a valid response
      while (!responses.includes(char[0])) {
        // Show the prompt stored in char[1]. Store the user's answer in char[0]. 
        char[0] = prompt(char[1]);
        // standardize char[0] entry. If it is null, keep it as null. If it is not null, convert it to lowercase for easier comparison with response array.
        if (char[0] != null) {
          dataStandardized = char[0].toLowerCase();
        } else {
          dataStandardized = char[0];
        }

        // If this is an affirmative answer, add those chacters to validValues. 
        if (affirmativeResponses.includes(dataStandardized)) {
          validValues += char[3];
          // To guarantee that at least one of this character type is in the password, randomly grab one and stick it at a random index in the password. If that index is already full, try again.
          randomPassInt = randomInteger(passLength)
          while (password[randomPassInt]){
            randomPassInt = randomInteger(passLength)
          }
          password[randomPassInt] = char[3][randomInteger(char[3].length)];
        }

        // Update the prompt to explain why the user is being re-prompted
        char[1] = char[2];
        console.log(char[0]);
      }
    }
    // Explain to user why the prompt cycle is starting again
    if (!validValues.length) {
      alert("You must select at least one character type. Please try again.");
    }
  }

  // Continue adding random values from validValues until the array is as long as user specified. Skip indices that have previously been filled, to ensure that there's at least one of each specified character trypes
  for (var i = 0; i <password.length; i++){
    if (!password[i]){
      password[i] = validValues[randomInteger(validValues.length)];
    }
  }

  // Convert array to string
  return password.join("");
}

// HELPER FUNCTIONS
// Returning random integers up to a maximum value
function randomInteger(max) {
  return Math.floor(Math.random() * max);
}