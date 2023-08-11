// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.


// function checkNumber(value){

//     if(value>0)
//     {
//         console.log("it's is positive number");
//     }
//     else if(value<0)
//     {
//         console.log("it's is negative number");
//     }
//     else{
//         console.log("its is a zero");
//     }
// }

// checkNumber(2);
// checkNumber(0);
// checkNumber(-345);



// Assignment 2:

// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.


// function positiveNumber(N)
// {
//     var factorial=1;
//     for(var i=1;i<=N;i++)
//     {
//       factorial=factorial*i;
//     }
//     console.log(factorial);
// }

// positiveNumber(4)


// Assignment 3:


// Write a JavaScript function that takes two numbers as parameters and returns the larger one.

// function greaterNumber(first,second)
// {

//     if(first>second)
//     {
//     console.log(`${first}`);
//     }
//     else{
//         console.log(`${second}`);
//     }

// }
// greaterNumber(200,3)


// Assignment 4:

// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).


// function validPalindrome(String)
// {
//     const len =String.length;
//     console.log(len);
//     for(var i=0;i<=len/2;i++)
//     {
//         if(String[i]!==String[len-i-1])
//         {
//             console.log("not a palindrome");
//             break;
//         }
//         else{
//             console.log("is a palindrome");
//             break;
//         }
//     }
// }

// validPalindrome("121")


// Assignment 5:


// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.



// function isprime(n)
// {
//     if(n<=1)
//     {
//         return false;
//     }

//     for(let i=2;i<n;i++)
//     {
//         if(n%i==0)
//         return false;

//         else
//         return true;
//     }

    
// }

// function printPrimeNumber(print)
// {
//     console.log(2);
//     for(let i=2;i<=print;i++)
//     {
//         if(isprime(i))
//         console.log(`${i}`);
//     }
// }

// printPrimeNumber(20)


// Assignment 6:



// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.


// function calculator(a,b)
// {
//     console.log(`adding the number ${a+b}`);
//     console.log(`divide the number ${a/b}`);
//     console.log(`multiply the number ${a*b}`);
//     console.log(`subtract the number ${a-b}`);
// }
// calculator(5,5)


// Assignment 7:



// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.


// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var i = 0; i < str1.length ; i++)
//   {
//     if (vowel_list.indexOf(str1[i])!== -1)
//     {
//       vcount++;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("raanu"));


// Assignment 8:


// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.


// function perfectNumber(n)
// {
//     var count=0;
//     for(let i=1;i<=n/2;i++)
//     {
//         if(n%i===0)
//         {
//             count=count+i;
//         }
//     }

//     if(count==n && count!=0)
//     {
//         console.log("perfect number");
//     }
//     else{
//         console.log("not a perfect number");
//     }
// }

// perfectNumber(0)

// Assignment 9:


// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.

// function FibonacciSum(n)
// {

//     var a=0,b=1,c;
//     console.log(a);
//     console.log(b);
//     for(let i=2;i<=n;i++)
//     {
//         c=a+b;
//         a=b;
//         b=c;
//         console.log(c);
//     }
  
// }

// FibonacciSum(10);

// Assignment 10:
// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.


// function writeTable(n)
// {
//    let result=1;
//     for(i=1;i<=10;i++)
//     {
//         result=n*i;
//     console.log(`${n}*${i}=${result}`);
 
//     }
// }
// writeTable(6)






