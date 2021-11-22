<<<<<<< HEAD
/*Do the below programs in anonymous function & IIFE
1.Print odd numbers in an array
2.Convert all the strings to title caps in a string array
3.Sum of all numbers in an array
4.Return all the prime numbers in an array
5.Return all the palindromes in an array
6.Return median of two sorted arrays of same size
7.Remove duplicates from an array
8.Rotate an array by k times*/


//1Print odd numbers in an array using anonymous & IIFE

var data = [1, 2, 3, 4, 6, 6, 7, 9, 7, 2, 8, 1, 6, 7,];

let odd = function () {
    let odds = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 != 0) {
            odds.push(data[i]);
        }

    }
    console.log(odds);
}
odd();

//Array(7) [ 1, 3, 7, 9, 7, 1, 7 ]

//IIFE (Immediately Invoked Function Expression) 
(function () {
    let odds = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 != 0) {
            odds.push(data[i]);
        }

    }
    console.log(odds);
})();
//Array(7) [ 1, 3, 7, 9, 7, 1, 7 ]








//2.Convert all the strings to title caps in a string array

var data1 = ['hello', 'guvi', 'geek'];


let Titlecap = function () {
    var upperCase = data1.map(([firstChar, ...rest]) => firstChar.toUpperCase() + rest.join("").toLowerCase()).join(" ")


    console.log(upperCase);

}

Titlecap();
//Out put >> Hello Guvi Geek

(function () {
    var upperCase = data1.map(([firstChar, ...rest]) => firstChar.toUpperCase() + rest.join("").toLowerCase()).join(" ")


    console.log(upperCase);
})();
//Out put >> Hello Guvi Geek






//3. Sum of all numbers in an array  

let sum = function () {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    console.log(sum);
}
sum();
//Output 69

(function () {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    console.log(sum);
})();
//Output 69








//4.Return all the prime numbers in an array(a number that is divisible only by itself and 1)

var prime = function () {
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
    const filterPrime = data => {
        const filtered = data.filter(el => !isPrime(el));
        return filtered;
    };
    console.log(filterPrime(data));
}
prime();
//output Array(8) [ 1, 4, 6, 6, 9, 8, 1, 6 ]

(function () {
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
    const filterPrime = data => {
        const filtered = data.filter(el => !isPrime(el));
        return filtered;
    };
    console.log(filterPrime(data));
})();
//Array(8) [ 1, 4, 6, 6, 9, 8, 1, 6 ]




// 5.Return all the palindromes in an array
let words = ['NITIN', 'RACERCAR', 'reviver', 'porcupine', 'pineenip', 'refer', 'radar'];
let palindrome = function () {
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

//output Array(5) [ "NITIN", "reviver", "pineenip", "refer", "radar" ]



(function () {
    let words = ['NITIN', 'RACERCAR', 'reviver', 'porcupine', 'pineenip', 'refer', 'radar'];
    let palindrome = function () {
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

})();



// 6.Return median of two sorted arrays of same size

let median = function (Array) {

    var Array = Array.sort((a, b) => a - b);
    if (Array.length % 2 !== 0) {
        return Array[Math.floor(Array.length / 2)];
    } else {

        let num1 = Array[Array.length / 2];
        let num2 = Array[Array.length / 2 - 1];
        return (num1 + num2) / 2;
    }


}

let arr1 = [9, 6, 8, 4, 8, 95]
let arr2 = [1, 2, 3, 5, 3, 2];
const Array = [...arr1, ...arr2];

console.log(median(Array));

//Output>> 4.5 we can floor or ceil if required.


(function () {
    let median = function (Array) {

        var Array = Array.sort((a, b) => a - b);
        if (Array.length % 2 !== 0) {
            return Array[Math.floor(Array.length / 2)];
        } else {

            let num1 = Array[Array.length / 2];
            let num2 = Array[Array.length / 2 - 1];
            return (num1 + num2) / 2;
        }


    }

    let arr1 = [9, 6, 8, 4, 8, 95]
    let arr2 = [1, 2, 3, 5, 3, 2];
    const Array = [...arr1, ...arr2];

    console.log(median(Array));
})();





//7.Remove duplicates from an array
/*Taken var = data from above..*/

let removeDup = function () {
    let remove = [...new Set(data)];
    console.log(remove);
}

removeDup();
//output Array(8) [ 1, 2, 3, 4, 6, 7, 9, 8 ]

(function () {
    let remove = [...new Set(data)];
    console.log(remove);
})();
// let remove = [...new Set(data)];




//8.rotate an array k times

var rotate = function (arrs, k) {
    var arrs = [10, 12, 14, 35, 89, 11];
    var k = 10;
    for (let i = 0; i < k; i++) {
        arrs.unshift(arrs.pop());
    }

    console.log(arrs);
}
rotate();

//outputArray(6) [ 14, 35, 89, 11, 10, 12 ]

(function () {
    var rotate = function (arrs, k) {
        var arrs = [10, 12, 14, 35, 89, 11];
        var k = 12;
        for (let i = 0; i < k; i++) {
            arrs.unshift(arrs.pop());
        }

        console.log(arrs);
    }
    rotate();

})();
// Array(6) [ 10, 12, 14, 35, 89, 11 ]




