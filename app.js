///   CHAPTER 21-25  STRING METHODS   ///

// Q NO. 1

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + lastName;
// document.write("Assalam Alaikum " + fullName);


// Q NO. 2

// var favMobile = prompt("Enter Your Favourite Mobile Phone");
// document.write("Your Favourite Phone Is: " + favMobile);
// document.write("<br><br>Length Of String: " + favMobile.length);


// Q NO. 3

// var nationality = "Pakistani";
// document.write("String: " + nationality);
// var index = nationality.indexOf("n");
// document.write("<br>Index of 'n':" + index);


// Q NO. 4

// var hi = "Hello World";
// var index = hi.lastIndexOf("l");

// document.write("String: " + hi);
// document.write("<br>Last index of 'l': " + hi.lastIndexOf("l"));


// Q NO. 5

// var nationality = "Pakistani";
// document.write("String: " + nationality);
// document.write("<br>Character at index 3: " + nationality.charAt(3));


// Q NO. 6

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(lastName);
// document.write("Assalam Alaikum " + fullName);


// Q NO. 7

// var city = "Hyderabad";
// document.write("City: " + city);
// var replacemet = city.replace("Hyder", "Islam");
// document.write("<br>After Replacemet: " + replacemet);


// Q NO. 8

// var para = "Ali and Sami are best friends. They play cricket and football together."
// var uptPara = para.replace(/and/g, "&");

// document.write("<strong>String: </strong> " + para);
// document.write("<br><strong>After Replacement: </strong> " + uptPara);


// Q NO. 9

// var string = "472";
// var number = parseInt(string);
// document.write("value: " + string);
// document.write("<br>Type: " +typeof string);
// document.write("<br>value: " + number);
// document.write("<br>Type: " +typeof number);


// Q NO. 10

// var userInput = prompt("Enter Something");
// document.write("User Input: " + userInput);
// document.write("<br>UPPER CASE: " + userInput.toUpperCase());


// Q NO. 11
/*
var userInput = prompt("Enter an Alphabet");
document.write("User Input: " + userInput);

var firstChar = userInput.slice(0,1);
var capWord = firstChar.toUpperCase();

var uptPara = userInput.slice(1);
document.write("<br>Title case: " + capWord.concat(uptPara));
*/


// Q NO. 12

// var num = 35.36 ;
// var str = num.toString();
// var uptPara = str.replace(".", "")
// document.write(typeof num + " " + num);
// document.write("<br>" + typeof uptPara + " " + uptPara);


// Q NO. 13


// Q NO. 14

/*
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userItem = prompt("Welcome To Marvel Bakery.What do you want to order Sir/Maam");
var flag = false
for (var i = 0; i < items.length; i++) {
    if (userItem.toLowerCase() === items[i]) {
        document.write(userItem + " is <strong>Available</strong> at index " + i + " is " + items[i] + "<br>");
        flag = true
    }

}
if (flag === false) {
    document.write("We are Sorry " + userItem + " is <strong>Not Available</strong> in our bakkery" + "<br>");
}
*/


// Q NO. 15

// var userPassword = prompt("Enter Your Password");

// for(var i = 65; i < 90; i++){
//     var password = String.fromCharCode(i);
//     if(userPassword == password){
//         console.log("OK");
//     }
// }


// Q NO. 16

// var university = "University of Karachi";
// var uptUniversity = university.split("");
// document.write(uptUniversity);


// Q NO. 17

// var userInput = "Pakistan";
// document.write("User Input: " + userInput);
// document.write("<br>Last character: " + userInput.lastIndexOf("n"));


// Q NO. 18

// var para = "The quick brown fox jumps over The lazy dog";
// document.write("Text: " + para);
// var uptPara = para.match(/The/g);
// document.write("<br>" + uptPara);



///   CHAPTER 26-30  MATH METHODS   ///

// Q NO. 1

// var num = +prompt("Enter a Number:");
// document.write("Number: " + num);
// document.write("<br>Round off value: " + Math.round(num));
// document.write("<br>Floor value: " + Math.floor(num));
// document.write("<br>Ceil value: " + Math.ceil(num));


// Q NO. 2

// var num = -prompt("Enter a Number:");
// document.write("Number: " + num);
// document.write("<br>Round off value: " + Math.round(num));
// document.write("<br>Floor value: " + Math.floor(num));
// document.write("<br>Ceil value: " + Math.ceil(num));


// Q NO. 3

// var num = +prompt("Enter a Negative Number:");
// document.write("Value: " + num);
// document.write("<br>Absolute Value: " +Math.abs(num));


// Q NO. 4

// var diceValue = Math.round((Math.random() *6) + 1);
// document.write("Random dice value: " + diceValue);
// document.write("<br>Random dice value: " + diceValue);


// Q NO. 5

// var coin = Math.round((Math.random() *1) + 1);
// if (coin === 2) {
//     document.write(coin + "<br>" + "Random Coin Value: <strong>Heads</strong>");
// }
// else{
//     document.write(coin + "<br>" + "Random Coin Value: <strong>Tails</strong>");
// }

// Q NO. 6

// var number = Math.round((Math.random() *100) + 1);
// document.write("Random number between 1 and 100: " + number);


// Q NO. 7

// var userWeight= Number(prompt("Enter Your Weight"));
// if (userWeight==Math.round(userWeight) || userWeight==Math.floor(userWeight)) {
//     document.write("<br><br>The weight of the user is"+userWeight +"");
//     document.write("<br><br>The weight of the user is"+userWeight +"Kilograms");
//     document.write("<br><br>The weight of the user is"+userWeight +"KG");
// } else {
//     document.write("Wrong");
// }


// Q NO. 8

// var secretNum = Math.round((Math.random() *10) + 1);
// var userNum = prompt("Enter a number between 1 to 10:");

// if (userNum === secretNum) {
//     document.write("Congrats!");
// }
// else{
//     alert("Try Again!");
// }