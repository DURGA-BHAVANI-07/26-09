// 1.take two strings with spaces at starting of one string and 
// at the ending of another string remove the spaces and 
// concat the both string and 
// convert the combined string into uppercase string
 var str1="  hi how";
 var str2="are you  ";
 var trim1=str1.trimStart(str1);
 console.log(trim1);
 var trim2=str2.trimEnd(str2);
 console.log(trim2);
 var resultstr=trim1.concat(" ",str2);
 console.log(resultstr.toUpperCase(resultstr));

//  2.Extract Middle Portion of the string and
//  get the last index of char of extracted string and
//  Convert the portion to Lowercase

let middleString = "howareyounaNNA";
let middlePortion = middleString.slice(5, 11); 
let lastIndexOfChar = middlePortion.lastIndexOf('A');
let lowerCasePortion = middlePortion.toLowerCase(lastIndexOfChar);
console.log(middlePortion); 
console.log(lastIndexOfChar); 
console.log(lowerCasePortion); 


// 3.take a single char and concat string to that char and 
// convert the resulted string to uppercase and 
// then extract the last second char 

let singleChar = 'a';
let concatenatedString = singleChar + 'HelloWorld';
let upperCaseString = concatenatedString.toUpperCase(concatenatedString);
let secondLastChar = upperCaseString[upperCaseString.length - 2]; 
console.log(secondLastChar);

// 4.we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatenated string should as uppercase

let firstString = "JavaScript";
let secondString = "Programming";
let firstThreeChars = firstString.slice(0, 3);
let lastThreeChars = secondString.slice(-3);
let concatestring = firstThreeChars + lastThreeChars;
let finalString = concatestring.charAt(0).toUpperCase(concatestring) + 
concatestring.slice(1, -1) 
console.log(finalString);

// 5.You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase, 
let str3 = "   hello world  ";
let str4 = "Nice Day";
let trimmedString = str3.trim(str3);
let modifiedString = trimmedString.charAt(0).toUpperCase(trimmedString) +
trimmedString.slice(1, -1) +
trimmedString.charAt(trimmedString.length - 1).toUpperCase(trimmedString);
let extractedPart = modifiedString.slice(1, 5)
let finalResult = extractedPart + " "+str4;
console.log(finalResult);

// 6."hello there , how are you " find the index of “are” word in the sentence
let sentece="hello there , how are you ";
let indexofAre = sentece.indexOf("are");
console.log(indexofAre);

// Multiple Methods Questions:
// Question 7:
// Create an object representing a smartphone with properties brand, model, and price. Seal the object using Object.seal(), modify the price, and then check if the object is sealed using Object.isSealed().
var smartphone={
    brand:"MI",
    model:"redminote9",
    price:"15000"

}
smartphone.price="20000";
Object.seal(smartphone);
console.log(Object.isSealed(smartphone));

// Question 8:
// Create an object representing a book with properties title, author, and publishedYear. Freeze the object using Object.freeze(), then try to modify the publishedYear and check if the object is frozen using Object.isFrozen().
var book={
    title:"mahabharatham",
    author:"ved vyasa",
    publishedyear:"3rd century BCE"
}
Object.freeze(book);
book.publishedyear="2rd century BCE";
console.log(Object.isFrozen(book));

// Question 9:
// Create an object representing a person with properties firstName, lastName, and age. Use both Object.keys() and Object.values() to retrieve and display all keys and values of the object.
var person={
    firstName:"Kalisetti",
    lastName:"Durga Bhavani",
    age:21
}
Object.keys(person);
 Object.values(person);
console.log(Object(person));

// Question 10:
// Create an object representing a course with properties title, instructor, and duration. Use Object.entries() to get the key-value pairs, and then modify the object using the delete operator to remove the duration property.
var course={
    title:"full stack development",
    instructor:"vamsi sir",
    duration:"6 months"
}
delete course.duration;
console.log(Object.entries(course));

// Question 11:
// Create an object representing an employee with properties name, position, and salary. Seal the object using Object.seal(), modify the position, and then use Object.keys() to list all properties and verify that no new properties can be added.
var employee={
    name:"bhavani",
    position:"Full stack development",
    salary:4500
}
console.log(Object.seal(employee));
employee.position="Frontend developer"
// console.log(Object.seal(employee));

// Question:12
// Write a program where you need to extract the middle part of the string and converted it to uppercase

let string1="programming";
let middle=string1.slice(3,7);
let uppercase=middle.toUpperCase(middle);
console.log(uppercase);

// Question:13
// Write a program that converts a string to uppercase and then calculates the length of the resulting string.
var string="computer";
var uppercase2=string.toUpperCase(string);
console.log(uppercase2);
var length= string.length;
console.log(length);

// Question:14
// Write a program that retrieves the character at a specific position in a string, and then finds the ASCII value (character code) of that character.
let str5="morning";
let charq=str5.charAt(3);
console.log(charq.charCodeAt(0)); //ASCII value

// Question:15
// Write a program that removes extra spaces from the start and end of a string, and then slices a portion of the string starting from the second character to the fourth character.
let string5=" hello world ";
let trimmed= string5.trim();
console.log(trimmed.slice(1,4));

// Question:16
// Write a program that concatenates two strings where the first string is in its original case and the second string is converted to lowercase before concatenation.
let strr1="happy";
let strr2="birthday";
console.log(strr1+" ",strr2.toLowerCase());

// Question:17
// Write a program that removes leading spaces from a string, and then slices the string starting from the second character to the end.

let strr=" hello";
let result= strr.trimStart (strr);
console.log(result);
let sliced=result.slice(1)
console.log(sliced);

// Question:18
// Write a program that retrieves a specific character from a string and converts it to uppercase.
let str="hello";
let char= strr.charAt(2);
console.log(char.toUpperCase());

// Question 19:
// Write a program that uses arithmetic operators to calculate the result of a * b + c, where a = 5, b = 10, and c = 20. Then, compare the result to 100 using comparison operators.
let a=5, b=10, c=20;
let ressult=a*b+c;
console.log(ressult>100);

// Question 20:
// Given two variables, x = 8 and y = 12, use logical operators to check if both x is greater than 5 and y is less than 20. Print the result.
let x=8,y=12;
console.log(x>5 && y<20);

// Question 21:
// Create two numbers, num1 = 25 and num2 = 35. Use the ternary operator to check which number is larger and return the appropriate message.
let num1=25, num2=35;
let larger=num1>num2? "num1 is larger" : "num2 is larger";
console.log(larger);

// Question 22:
// Define two variables, m = 15 and n = 10. Perform subtraction and division operations, and then check whether the result is an even or odd number using a comparison operator.
let m=15, n=10;
let o=m/n
console.log(0)
let resullt=m-1;
console.log(resullt);
console.log(resullt %2 ===0? "Even" :"odd");

// Question 23:
// Write a program that declares age = 18 and checks whether the age is equal to or greater than 18 using both the equality (==) and strict equality (===) comparison operators.
let age=18;
console.log(age>=18, age===18);