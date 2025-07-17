
// program 1 Check Even or Odd 
// function EvenOrOdd(number) {
//     if (number % 2 === 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   }

//   const input = 7;
//   console.log(EvenOrOdd(input));  
  
// program 2 Find the Maximum of Two Numbers 

// const input1 = 5;
// const input2 = 9;
// console.log(Math.max(input1, input2));  

// program 3 Check Leap Year 

// function checkLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     return "Leap Year";
//   } else {
//     return "Not a Leap Year";
//   }
// }

// const inputYear = 2020;
// console.log(checkLeapYear(inputYear)); 

// program 4 Sum of Natural Numbers 

// function sumOfNaturalNumbers(n) {
//   return (n * (n + 1)) / 2;
// }

// const input = 5;
// console.log(sumOfNaturalNumbers(input));  

// program 5 Factorial of a Number 

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

// program 6 Print Multiplication Table 

// function printMultiplicationTable(number) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
//   }
// }
// const input = 3;
// printMultiplicationTable(input);

// program 7 Reverse a Number 
// function reverseNumber(number) {
 
//   return parseInt(number.toString().split('').reverse().join(''));
// }

// const input = 1234;
// console.log(reverseNumber(input)); 

// program 8 Palindrome Check (Number) 

// function isPalindrome(number) {
//   const str = number.toString();
//   const reversed = str.split('').reverse().join('');
//   return str === reversed ? "Palindrome" : "Not a Palindrome";
// }

// const input = 121;
// console.log(isPalindrome(input));  

// program 9 Check Prime Number 

// function isPrime(number) {
//   if (number <= 1) return "Not Prime";
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return "Not Prime";
//   }
//   return "Prime";
// }

// const input = 11;
// console.log(isPrime(input)); 

// program 10 Count Digits in a Number 

// function countDigits(number) {
//   return number.toString().length;
// }

// const input = 5023;
// console.log(countDigits(input));  

// program 10 Count Digits in a Number

// function countDigits(number) {
//   return number.toString().length;
// }

// const input = 5023;
// console.log(countDigits(input));  

// program 11 Sum of Digits

// function sumOfDigits(number) {
//     return number
//         .toString()
//         .split('')
//         .map(Number)
//         .reduce((sum, digit) => sum + digit, 0);
// }

// const input = 123;
// const result = sumOfDigits(input);
// console.log(result); 

// program 12 Check Armstrong Number

// function isArmstrongNumber(number) {
//     const digits = number.toString().split('');
//     const numDigits = digits.length;

//     const sum = digits
//         .map(digit => Math.pow(Number(digit), numDigits))
//         .reduce((acc, val) => acc + val, 0);

//     return sum === number ? "Armstrong" : "Not Armstrong";
// }

// const input = 153;
// const result = isArmstrongNumber(input);
// console.log(result); 

// program 13 Generate Fibonacci Series

// function generateFibonacci(n) {
//     const fib = [];

//     for (let i = 0; i < n; i++) {
//         if (i === 0) {
//             fib.push(0);
//         } else if (i === 1) {
//             fib.push(1);
//         } else {
//             fib.push(fib[i - 1] + fib[i - 2]);
//         }
//     }

//     return fib;
// }

// const input = 5;
// const result = generateFibonacci(input);
// console.log(result.join(' ')); 

// program 14 Check Vowel or Consonant

// function checkVowelOrConsonant(char) {
//      const lowerChar = char.toLowerCase();

//     if (!/^[a-z]$/.test(lowerChar)) {
//         return "Invalid input"; 
//     }

//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return vowels.includes(lowerChar) ? "Vowel" : "Consonant";
// }

// const input = 'a';
// const result = checkVowelOrConsonant(input);
// console.log(result); 
 
// program 15 Simple Calculator

// function simpleCalculator(num1, operator, num2) {
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
//         default:
//             return "Invalid operator";
//     }
// }

// const input1 = 4;
// const input2 = 2;
// const operator = '+';

// const result = simpleCalculator(input1, operator, input2);
// console.log(result); 

// program 16 Find GCD (HCF)

// function findGCD(a, b) {
//     while (b !== 0) {
//         const temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// const num1 = 20;
// const num2 = 28;
// const result = findGCD(num1, num2);
// console.log(result); 

// program 17 Check Perfect Number

// function isPerfectNumber(number) {
//     if (number <= 0) return "Not Perfect";

//     let sum = 0;

//     for (let i = 1; i <= number / 2; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }

//     return sum === number ? "Perfect" : "Not Perfect";
// }


// const input = 28;
// const result = isPerfectNumber(input);
// console.log(result); 

// program 18 Print All Divisors

// function printAllDivisors(number) {
//     const divisors = [];

//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             divisors.push(i);
//         }
//     }

//     return divisors.join(' ');
// }


// const input = 10;
// const result = printAllDivisors(input);
// console.log(result); 

// program 19 Number is Positive, Negative or Zero
 
// function checkNumberSign(number) {
//     if (number > 0) {
//         return "Positive";
//     } else if (number < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }

// const input = -5;
// const result = checkNumberSign(input);
// console.log(result);

// program 20 Find Power (Exponentiation)

// function power(a, b) {
//     return Math.pow(a, b);
// }

// const base = 2;
// const exponent = 3;
// const result = power(base, exponent);
// console.log(result); 
