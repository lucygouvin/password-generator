# Password Generator

## Description

The goal of this project was to use Javascript to intake, validate, and use data provided by a user to generate a random, unique password.
This project practiced the following skills:
- Intaking data from a user via browers prompt window
- Validating the data to ensure it was within accepted values
- Using that validated data to control the flow of the program
- Using Math.random to randomly select values

## Installation

The application is available at this site:[https://lucygouvin.github.io/password-generator/](https://lucygouvin.github.io/password-generator/)

## Usage

1. To use, click on the "Generate Password" button. 
2. The site will prompt you for various criteria for your password, starting with how long the password should be. The user must input an integer between 8 and 128 in order to proceed. 
    1. Non-integer numbers will be rounded down.
3. The site will prompt the user for what kinds of characters should be included in the password. The user will havde to indicate yes or no for lowercase, uppercase, numerical, and special characters. If a user indicates an affirmative response, that character type is guaranteed to be in the returned password.
    1. The following answers are interpreted as affirmative responses for inclusion of that character: "y", "yes" (not case sensitive)
    2. The following answers are interpreted as negative responses, indicating not to include that character: "n", "no" (not case sensitive)
    3. Additionally, if the user clicks "Cancel" on the prompt, that is also interpreted as a negative response, and that character type is not included.
4. If the user does not apply affirmatively to any character types, the site will alert them that at least one character type must be chosen, and then re-prompt for each character type.
5. Once the user has provided valid values a password string matching those criteria will be written to the webpage. 
6. Pressing the "Generate Password" button again will generate a new password with the previously entered criteria.
7. Refreshing the page and then pressing the "Generate Password" will prompt the user to enter criteria again. 

![Screenshot of password generator page with a browser prompt asking for password length](assets/images/password_generator1.png)

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## Tests

- Enter a number less than 8 in the length prompt
    - Expected result: The browser prompt will alert the user to "Please try again" and show the length prompt again.
- Enter a number greater than 128 in the length prompt
    - Expected result: The browser prompt will alert the user to "Please try again" and show the length prompt again.
- Enter a decimal in the length prompt
    - Expected result: The browser will round down the decimal to the nearest integer
- Enter a string in the length prompt
    - Expected result: The browser prompt will alert the user to "Please try again" and show the length prompt again.
- Click "Cancel" on the length prompt
    - Expected result: The browser prompt will alert the user to "Please try again" and show the length prompt again.
- Enter a number between 8 and 128 for length prompt
    - Expected result: The application will accept the answer and move on to prompting for the next criterion.
- Enter affirmative response for only lowercase characters
    - Expected result: The returned password will have at least one lowercase character
- Enter affirmative response for only uppercase characters
    - Expected result: The returned password will have at least one uppercase character
- Enter affirmative response for only numerical characters
    - Expected result: The returned password will have at least one numerical character
- Enter affirmative response for only special characters
    - Expected result: The returned password will have at least one special character
- Enter affirmative response for only a subset of characters
    - Expected result: The returned password will have at least one of each approved character type, and no instances of any of the other character types
- Enter affirmative response for all character types
    - Expected result: The returned password will have at least one one of each character type

- Enter negative response for only lowercase characters
    - Expected result: The returned password will have no instances of lowercase characters
- Enter negative response for only uppercase characters
    - Expected result: The returned password will have no instances of uppercase characters
- Enter negative response for only numerical characters
    - Expected result: The returned password will have no instances of numerical characters
- Enter negative response for only special characters
    - Expected result: The returned password will have no instances of special characters

- Enter negative response for all character types
    - Expected result: The browswer will alert the user that "You must select at least one character type. Please try again." and restart the character type prompt loop. It will not re-prompt for length.
- Enter capitalized version of affirmative response
    - Expected result: It should be accepted as an affirmative reponse regardless of capitalization
- Enter capitalized version of negative response
    - Expected result: It should be accepted as a negative reponse regardless of capitalization
- Click "Cancel" on the character prompt
    - Expected result: It should be accepted as a negative reponse, including re-triggering the prompt loop if a user clicks "cancel" on all character type prompts.
- Enter a non-valid response
    - Expected result: The browser prompt will alert the user to "Please try again" and show the prompt again.




