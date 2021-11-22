<<<<<<< HEAD
/*Do the below programs in arrow functions
1.Print odd numbers in an array
2.Convert all the strings to title caps in a string array
3.Sum of all numbers in an array
4.Return all the prime numbers in an array
5.Return all the palindromes in an array*/


// Print odd numbers in an array
var Array = [10, 14, 56, 1, 2, 4, 5, 6, 7, 2, 5, 8, 21, 5, 7];
/*i am using this Array in below programme also*/

var odd = () => {
    let odds = [];
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] % 2 != 0) {
            odds.push(Array[i]);
        }

    }
    console.log(odds);
}

odd();

//output Array(7) [ 1, 5, 7, 5, 21, 5, 7 ]




// Convert all the strings to title caps in a string array
var str = ['hello', 'this', 'is', 'guvi', 'geek'];


let Titlecaps = () => {
    var upperCase = str.map(([firstChar, ...rest]) => firstChar.toUpperCase() + rest.join("").toLowerCase()).join(" ")


    console.log(upperCase);

}

Titlecaps();
//output Hello This Is Guvi Geek






// Sum of all numbers in an array

let sum = () => {
    let sum = 0;
    for (let i = 0; i < Array.length; i++) {
        sum += Array[i];
    }
    console.log(sum);
}
sum();

//output = 153




//Return all the prime numbers in an array

var numbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 51, 2, 6, 4, 3, 89, 7];
var Prime_num = () => {
    const isPrime = n => {
        if (n === 1) {
            return false;
        } else if (n === 2) {
            return true;
        } else {
            for (let x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        };
    };
    const filterPrime = numbers => {
        const filtered = numbers.filter(el => !isPrime(el));
        return filtered;
    };
    console.log(filterPrime(numbers));
}
Prime_num();

//output Array(9) [ 12, 1, 4, 6, 8, 9, 51, 6, 4 ]




// Return all the palindromes in an array


let words = ['NITIN', 'RACERCAR', 'reviver', 'porcupine', 'pineenip', 'refer', 'radar'];
let palindrome = () => {
    var arr = [];
    var str = words.slice(0);
    var pal = str.toString().split("").reverse().join("").split(",");
    console.log(pal);


    for (let i = 0; i < words.length; i++) {
        for (let k = 0; k < pal.length; k++) {
            if (words[i] == pal[k]) {
                arr.push(words[i])
            }
        }
    }


    console.log(arr);
}
palindrome();

=======


// Print odd numbers in an array
var Array = [10, 14, 56, 1, 2, 4, 5, 6, 7, 2, 5, 8, 21, 5, 7];
/*i am using this Array in below programme also*/



/*
hello = function() {
    return "Hello World!";
  } 
  hello = () => {
    return "Hello World!";
  } 
  */

var odd = () => {
    let odds = [];
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] % 2 != 0) {
            odds.push(Array[i]);
        }

    }
    console.log(odds);
}

odd();

//output Array(7) [ 1, 5, 7, 5, 21, 5, 7 ]




// Convert all the strings to title caps in a string array
var str = ['hello', 'this', 'is', 'guvi', 'geek'];


let Titlecaps = () => {
    var upperCase = str.map(([firstChar, ...rest]) => firstChar.toUpperCase() + rest.join("").toLowerCase()).join(" ")


    console.log(upperCase);

}

Titlecaps();
//output Hello This Is Guvi Geek






// Sum of all numbers in an array

let sum = () => {
    let sum = 0;
    for (let i = 0; i < Array.length; i++) {
        sum += Array[i];
    }
    console.log(sum);
}
sum();

//output = 153




//Return all the prime numbers in an array

var numbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 51, 2, 6, 4, 3, 89, 7];
var Prime_num = () => {
    const isPrime = n => {
        if (n === 1) {
            return false;
        } else if (n === 2) {
            return true;
        } else {
            for (let x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        };
    };
    const filterPrime = numbers => {
        const filtered = numbers.filter(el => !isPrime(el));
        return filtered;
    };
    console.log(filterPrime(numbers));
}
Prime_num();

//output Array(9) [ 12, 1, 4, 6, 8, 9, 51, 6, 4 ]




// Return all the palindromes in an array


let words = ['NITIN', 'RACERCAR', 'reviver', 'porcupine', 'pineenip', 'refer', 'radar'];
let palindrome = () => {
    var arr = [];
    var str = words.slice(0);
    var pal = str.toString().split("").reverse().join("").split(",");
    console.log(pal);


    for (let i = 0; i < words.length; i++) {
        for (let k = 0; k < pal.length; k++) {
            if (words[i] == pal[k]) {
                arr.push(words[i])
            }
        }
    }


    console.log(arr);
}
palindrome();

>>>>>>> daeb88688d36940d60f8b8f618886ad272d1e995
//output Array(5) [ "NITIN", "reviver", "pineenip", "refer", "radar" ]
