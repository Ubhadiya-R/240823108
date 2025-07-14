
// program 1
// function EvenOrOdd(number) {
//     if (number % 2 === 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   }

//   const input = 7;
//   console.log(EvenOrOdd(input));  
  
// program 2

// const input1 = 5;
// const input2 = 9;
// console.log(Math.max(input1, input2));  

// program 3

// function checkLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     return "Leap Year";
//   } else {
//     return "Not a Leap Year";
//   }
// }

// const inputYear = 2020;
// console.log(checkLeapYear(inputYear)); 

// program 4

// function sumOfNaturalNumbers(n) {
//   return (n * (n + 1)) / 2;
// }

// const input = 5;
// console.log(sumOfNaturalNumbers(input));  

// program 5

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// const input = 4;
// console.log(factorial(input));  

// program 6

// function printMultiplicationTable(number) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
//   }
// }
// const input = 3;
// printMultiplicationTable(input);

// program 7
// function reverseNumber(number) {
 
//   return parseInt(number.toString().split('').reverse().join(''));
// }

// const input = 1234;
// console.log(reverseNumber(input)); 

// program 8

// function isPalindrome(number) {
//   const str = number.toString();
//   const reversed = str.split('').reverse().join('');
//   return str === reversed ? "Palindrome" : "Not a Palindrome";
// }

// const input = 121;
// console.log(isPalindrome(input));  

// program 9

// function isPrime(number) {
//   if (number <= 1) return "Not Prime";
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return "Not Prime";
//   }
//   return "Prime";
// }

// const input = 11;
// console.log(isPrime(input)); 

// program 10

// function countDigits(number) {
//   return number.toString().length;
// }

// const input = 5023;
// console.log(countDigits(input));  
