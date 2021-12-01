// Write a code to print the numbers in the array
/*var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < 11; i++) {
    new_string += numsArr[i]
}
console.log(new_string);

output 1234567891011*/









//Write a code to print the numbers in the array

/*
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < 11; i++) {
    new_string += numsArr[i] + ",";

}
console.log(new_string.slice(0, -1));
*/
//1,2,3,4,5,6,7,8,9,10,11














// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
/*
var new_string = “”;
 
for (var i = 11; i > 0; i — ) {
 new_string += numsArr[i] + “ “ 
}
console.log(new_string);
var new_string = "";*/



/*
        CORRECT CODE
for (var i = 11; i > 0; i--) {
    new_string += i + " ";

}
console.log(new_string.trim());
*/
//11 10 9 8 7 6 5 4 3 2 1 











// Write a code to replace the array value — If the number is even, replace it with ‘even’.

/*
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];for (var i = 0; i <=10; i++) {
    if(numsArr[i] %2 == 0 )
    {
    numsArr[i] = odd
    }
   }
   console.log(numsArr);

*/




/*   CORRECT CODE
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 == 0) {
        numsArr[i] = "even";
    } else {
        numsArr[i] = "odd";

    }
}
console.log(numsArr);*/

// [ "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", … ]





// Write a code to replace the array value — If the index is even, replace it with ‘even’.
/*
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];for (var i = 0; i <=10; i++) {
    if(numsArr[i] %2 == 0 )
    {
    numsArr[i] = even
    }
   }
   console.log(numsArr);
*/

/*
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 != 0) {
        numsArr[i] = "even"
    }
}
console.log(numsArr);*/

//[ "even", 2, "even", 4, "even", 6, "even", 8, "even", 10, … ]











// Write a code to add all the numbers in the array



/*
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <= 10; i++) {
    sum += numsArr[i];
}
console.log(sum);
*/
//66













/*
// Write a code to add the even numbers only
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;


for (var i = 0; i < 11; i++) {
    if ([i] % 2 === 0);
    sum = sum + numsArr[i];
}


console.log(sum);













//Write a code to add the even numbers and subract the odd numbers


/*

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!=0);
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);*/




/*
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 != 0) {
        sum -= numsArr[i];
    }
    else {
        sum += numsArr[i]
    }
}
console.log(sum);*/

// OUTPUT 94









// Write a code to print inner arrays
/*var numsArr = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++); {
 console.log( numsArr[i])
}*/



/*
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
    console.log(numsArr[i])
}

/*

OUTPUT
Array(5) [ 1, 2, 3, 4, 5 ]

Array(6) [ 6, 7, 8, 9, 10, 11 ]*/








/*

Write a code to replace the array value — If the index is even, replace it with ‘even’.

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
      if(numsArr[i] %2 == 0 )
      {
         numsArr[i] = even
       }
}
console.log(numsArr);*/


var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];


for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];
    for (var j = 0; j < inner_array.length; i++)
        if (i % 2 == 0) {
            numsArr[i] += "even";
        }
}
console.log(numsArr);