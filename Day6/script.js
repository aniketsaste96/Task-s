/*//alert("I'm JavaScript!");
alert('Hello'); // this line is not having semicolon
alert(`World`)
alert(3 +
    1 +
    2); // this is multiple line code and its working


// SPACE is ignored by jvascript



*/

/*
var fname = "Guvi";
var lname = " geek"
var admin = fname + lname;
alert(admin); // "Guvi geek"
*/








/*
Fix the below to alert hello Guvi geek

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>

script.js

let fname=10.5;
fname = "Guvi";
lname = "geek"let name = fname+lname;alert( 'hello ${name}' );
*/


/*CORRECT CODE
HTML
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>

JS
var fname = "Guvi";
var lname = " geek"
let name = fname + lname;
alert(`hello ${name} `);


//out put hello Guvi geek
*/










// Fix the below to alert sum of two numbers
/*let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);*/

/* Correct Code
let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a + b);
*/





/*
var a = "2" > "12";//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused")
}
*/

/*
Diffused Code
var a = 2 > 12;//Don't touch below this
if (a) {
    console.log("Code is Blasted")
}
else {
    console.log("Diffused")
}

*/






// How to get the success in console.

/*
let a = prompt("Enter a number?");//Don't modify any code below thisif (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

*/


/*

let a = parseInt(prompt("Enter a number ?")) < 0;//Don't modify any code below this
if (a) {
    console.log('OMG it works for any number inc 0');
}
else {
    console.log("Success");
}

//SUCCESS
*/










/*
How to get the correct score in console.
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

*/

/*  CORRECT CODE
let value = parseInt(prompt('How many runs you scored in this ball'));
if (value === 4) {
    console.log("You hit a Four");
} else if (value === 6) {
    console.log("You hit a Six");
} else {
    console.log("I couldn't figure out");
}

*/










/*

Fix the code to welcome the Employee
let login = 'Employee';
let message = (login == 'Employee') ? :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';console.log(message);
  */
/*
var login = 'Employee';
var message = (login == 'Employee');
(login == 'Director') == 'Greetings';
(login == 'Greetings') == 'No login';
'Director';
console.log(message);*/







// Fix the code to welcome the boss

// You cant change the value of the msg
/*
let message;if (null || 2 || undefined )
{
 let message = "welcome boss";
}
else
{
 let message = "Go away";
}
  console.log(message);

*/



/*
    CORRECT CODE
var message;
if (null || 2 || undefined) {
    var message = "welcome boss";
}
else {

    var message = "Go away";
}
console.log(message);
// output welcome boss
*/








// Fix the code to welcome the boss
/*
let message;
let lock = 2;//Dont change any code below this if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

*/


/*
var message;
var lock = 0;//Dont change any code below this
if (null || lock || undefined) {
    message = "Go away";
}
else {
    message = "welcome";
}
console.log(message);
//output welcome

*/













// Fix the code to welcome the boss
/*
let message;
let lock = 2;//Dont change any code below thisif (lock && " " || undefined )
{
    message = "Go away";
}
else
{
    message = "welcome";
}
console.log(message);
*/




/*
CORRECT CODE
var message;
var lock = 0;//Dont change any code below this
if (lock && " " || undefined) {
    message = "Go away";
}
else {
    message = "welcome";
}
console.log(message);*/














/*
Change the code to print

3

2

1

//You can change only 2 characterslet
 i = 3;while (i) {
  console.log( --i );
}*/


//You can change only 2 characterslet
/* CORRECT CODE
i = 3;
while (i) {
    console.log(i--);
}
3

2

1
*/











// Change the code to print 1 to 10 in 4 lines

/*
var num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
*/
/*
var s = "";
for (var i = 1; i <= 10; i += 1) {
    s += i + " ";
}
console.log(s);
console.log(s);
console.log(s);
console.log(s);

*/
















// Change the code to print even numbers

//You are allowed to modify only one character 
/*
for (let num = 2; num <= 20; num += 1) {
    console.log(num)
}
*/


/*          CORRECT CODE
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
}

2 script.js:404:13
4 script.js:404:13
6 script.js:404:13
8 script.js:404:13
10 script.js:404:13
12 script.js:404:13
14 script.js:404:13
16 script.js:404:13
18 script.js:404:13
20




*/


// Change the code to print all the gifts
/*
let gifts = ["teddy bear", "drone", "doll"];for (let i = 0; i < 3; i++) {
    console.log('Wrapped ${'gifts[i]'} and added a bow!');
  }

*/

/*correct code
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
*/
/*
Wrapped teddy bear and added a bow! script.js:456:13
Wrapped drone and added a bow! script.js:456:13
Wrapped doll and added a bow!
*/









// Fix the code to disarm the bomb.
/*

let countdown = 100;while (countdown > 0) {
    countdown--;
    if(countdown == 0)
    {
     console.log("bomb triggered");
    }
  }*/


/*   DISARMED
let countdown = 100;

while (countdown > 0) {
    countdown++;
    if (countdown == 0) {
        console.log("bomb triggered");
    }
}*/








/*
var lemein = “0”;
var lemeout = 0;
var msg = “”;if (lemein) {
 msg += “hi”;
 }if (lemeout) {
 msg += ‘Hello’;
}console.log(msg);*/
// Whats the msg printed and why? Guess you answer before running it.
/*
var lemein = "0";
var lemeout = "0";
var msg = "";
if (lemein) {
    msg += "hi";
}
if (lemeout) {
    msg += "Hello";
}
console.log(msg);

//hihello*/