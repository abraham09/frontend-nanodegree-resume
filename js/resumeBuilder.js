/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
 var email = "abraham@udacity.com";

 var newEmail = email.replace("udacity", "gmail");

console.log(email);
console.log(newEmail);

var awesomeThoughts = "My name is Abraham and I am AWESOME!";

var funThoughts = awesomeThoughts.replace("AWESOME!","FUN");

$("#main").append(funThoughts);
*/
var name = "Abraham Alvarez"
var role = "Product Manager"

console.log(name);
console.log(role);

var formattedName =  HTMLheaderName.replace("%data%", name);
var formattedRole =  HTMLheaderRole.replace("%data%", role);

console.log(formattedName);
console.log(formattedRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
