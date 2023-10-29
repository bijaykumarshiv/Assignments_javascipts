var birthYear = prompt('Enter birth year','Birth Year');
birthYear = parseInt(birthYear);
const year = new Date(); 
var userAge = year.getFullYear() - birthYear;

userAge > 18
  ? console.log("Your are",userAge,", You are old enough to drive")
  : console.log("Your are",userAge,", You will be allowed to drive after ",18-userAge,"years");