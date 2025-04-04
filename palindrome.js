// Reverses a string 
let reverseString = (string) => {
    let reversedString = Array.from(string).reverse().join(''); 
    return reversedString.toLowerCase();
}
console.log(reverseString('Racecar👺'));

// Returns true for a palindrom, returns true otherwise 
let palindrome = (string) => {
    return string.toLowerCase() === reverseString(string);
}

console.log(palindrome('Racecar')) 

// Splits the emails into parts
function emailParts(email) {
    let emailArray = email.toLowerCase();
    return emailArray.split(""); 
}

let parts = emailParts("intalooper@gmail.com"); 

for (i = 0; i < parts.length; i++) {
    let character = parts[i];
    console.log(character); 
}
let element = [1, 2, 3, 4];
Array.forEach(function(element) {
    console.log(element); 
})
/* Main Points 
-forEach
-functional programming
--techniques for building my own functions 
*/ 