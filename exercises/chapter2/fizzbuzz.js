/*
a)
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

b)
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible
by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

// --- MY WAY ---  //
for (let i = 1; i < 100; i++) {
  if (i%3 == 0 && i%5 != 0) {
    console.log("Fizz");
    continue;
  }
  if (i%3 != 0 && i%5 == 0) {
    console.log("Buzz");
    continue;
  }
  /* b)
  if (i%3 == 0 && i%5 == 0) {
    console.log("FizzBuzz");
    continue;
  }*/
  console.log(i);
}

// --- SOLUTION --- //
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n); // The empty string is equal to false.
}
