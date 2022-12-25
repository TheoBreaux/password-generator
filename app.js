const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

console.log(characters.length)
// grabbing generate password button
let generateBtn = document.getElementById("generate-btn");
// grabbing password option 1 element
let passwordOption1 = document.getElementById("password-option1-populated");
// grabbing password option 1 element
let passwordOption2 = document.getElementById("password-option2-populated");

// define 2 empty string variables to build 2 passwords of 15 characters each
let passwordOne = "";
let passwordTwo = "";

// function to create passwords defined
function generatePassword() {
    for (let i = 0; i < characters.length; i++) {
        // generate random Index and store in variable
        let randIndexOne = Math.floor(Math.random() * characters.length);
        let randIndexTwo = Math.floor(Math.random() * characters.length);
        //loop through characters array adding random characters to each password
        passwordOne += characters[randIndexOne];
        passwordTwo += characters[randIndexTwo];
        // check if generated passwords are 15 in length
        if (passwordOne.length === 15 && passwordOne.length === 15) {
            // render each password in the privded text content of each respective div
            passwordOption1.textContent = passwordOne;
            passwordOption2.textContent = passwordTwo;
        }
    }
}

function reset() {
    passwordOption1.textContent = "";
    passwordOption2.textContent = "";
}