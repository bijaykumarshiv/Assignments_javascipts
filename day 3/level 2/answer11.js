var firstName = prompt('Enter your First Name','First Name');
var lastName = prompt('Enter your Last Name','Last Name');
var lenFirst = firstName.length;
var lenLast = lastName.length;

lenFirst > lenLast
   ? console.log('Your first Name,',firstName,'is longer than your family name,',lastName)
   : console.log('Your first Name,',firstName,'is shorter than your family name,',lastName);
