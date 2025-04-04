//Returns the day of the week for the given date. 
/*
function dayName(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    return daysOfTheWeek[date.getDay()];
}
let date = new Date(); 
*/

let reverseString = (string) => {
    let reversedString = string.split("").reverse().join(''); 
    return reversedString;
}

console.log(reverseString("abc"));

function palindrome(string) {
    return string === reverse(string); 
}

console.log(palindrome("abc"));


/*
1. create a reverse function
a. first get the string, split the string into an array. 