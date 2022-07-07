// Assignment code 
var generateBtn = document.querySelector('#generate');

//creating a set of optional characters for User 
var special = ['!','@','#','$','%','^','&','*',]
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];

// set of  questions to fit user password criteria 
function userOptions () {
    var validChoice = true;
// add a parameter for length of password
var pwLength = prompt('How long do you want your password?');{
  if(pwLength < 8 || pwLength > 128) {
    alert('Your password must meet requirements between 8 - 128 characters')
    return userOptions();
  } 
  else {
    var specialPrompt = confirm('Do you want to include special characters?');
    var capitalPrompt = confirm('Do you want to include capital letters?');
    var lowerPrompt = confirm('Do you want to include lowercase letters?');
    var numbersPrompt = confirm('Do you want to include numbers?');
  }
}
    var promptResponses = {
        pwLength: pwLength,
        specialPrompt: specialPrompt,
        capitalPrompt: capitalPrompt,
        lowerPrompt: lowerPrompt,
        numbersPrompt: numbersPrompt
    };
    // user pick option for password 
    if ((!specialPrompt && !capitalPrompt && !lowerPrompt && !numbersPrompt)){
        alert('You must choose at least one character class!')
    }
    else {
        console.log(promptResponses);
        return promptResponses;
    }
}

// this function grabs the answers from userOptions /arrange into a array bases on chioces 
function generatePassword() {
    var options = userOptions();
    var passCharacters = [];
    var generatePassword = '';
    //use if and for loops to select random characters
    if(options.specialPrompt){
        for(var x of special) {
            passCharacters.push(x);}
    }
    if (options.capitalPrompt){
        for(var x of upperCase){
            passCharacters.push(x);
        }
    }
    if (options.lowerPrompt){
        for(var x of lowerCase){
            passCharacters.push(x);
        }
    }
    if (options.numbersPrompt){
        for(var x of numbers){
        passCharacters.push(x);
        }
    }
    for( var x = 0; x < options.pwLength; x++) {
        generatePassword = generatePassword + passCharacters[Math.floor(Math.random() * passCharacters.length)];
    }
    return generatePassword;
    };

function  writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);