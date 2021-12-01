
// 1.  let were used insted we have to use var which has global scope
//remove unnecessary console.logs
/*
aa = (f, s, t) => {
    var f, s, t;

    if (f > s && f > t) {

    }
    else if (s > f && s > t) {
        console.log(s)
    }
    else {
        console.log(t)
    }
}
aa(1, 2, 3);

*/



//2.Shift the call function after writing function not before that..
/*
let n = 123;

function add(n) {
    let sum = 10;
    for (var i = 0; i < n.length; i++) {
        sum += n[i]
    }
    return sum;
}
console.log(add(n));

*/


//3.romoved simicolon and use < instead of <= bring console.log outside loop to print only one value
/*
const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(function () {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
})();
//output 38

*/




//Fix the code to gen Title caps.
/*
Code:

var arr = [“guvi”, “geek”, “zen”, “fullstack”];var ano = function(arro) {
 for (var i = 0; i <= arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano();

*/

/*
var ano = function (arr) {
    var arr = ['guvi', 'geek', 'zen', 'fullstack'];
    for (var i = 0; i <= arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
}
ano();


//OUTPUT
// Guvi
// Geek
// Zen
// Fullstack


*/
/*
const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter(num => {
    for (let i = 2; i <= num; i++) {
        if (num[i] % num[i] === 0) {
            return num[i];
        }
    }

});
console.log(myPrime);*/

// Swap the odd and even digits
/*
aa = data => {
    var a = data;
    for (let i = 0; i < a.length - 1; i++) {
        var l = '';//21
        var s = a[i + 1]
        var b = a[i]
        l += s
        l += b
        i = i - 1
    }
    if ((a.length % 2) != 0) {
        l += a[a.length + 1]
    }
    console.log(l);
}
aa('1234');


function swap_adjacent_digits(n) {
    if (n.toString().length % 2 != 0) {
        return false;
    }
    var result = 0,
        x = 1;
    while (n != 0) {
        var dg1 = n % 10,
            dg2 = ((n - dg1) / 10) % 10;
        result += x * (10 * dg1 + dg2);
        n = Math.floor(n / 100);
        x *= 100;
    }
    return result;
}

console.log(swap_adjacent_digits(1234));*/


// Sum of odd numbers in an array

// Code:


// var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
// var s = as.reduce(function (a, c) {
//     if (c % 2 > 0) {
//         return a + c;
//     } else {
//         return a;
//     }

// });
// console.log(s);
/*
let as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
s = as.reduce((a, c) => {
    if (a % 2 > 0) {
        return a + c;
    } // or use else here
    return a;
});

console.log(s);
*/




// Expected Output:

// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]



// Fix the code to reverse.

// Code:
/*
(function (str) {
    str1 = str.split("").reverse().join("");
    console.log(str1);
})(abcd)

*/
///Correct Code str1 was not declared

/*
(function (str) {
    var str1 = str.split("").reverse().join("");
    console.log(str1);
})("abcd")  //Output: dcba


*/







// print all odd numbers in an array using IIFE function

// Code:
//Correct Code 
/*
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4]; (function () {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})();

*/
/*Output
1
3
5
7
79
7 script3.js:229:21
9

*/




