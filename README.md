# Greatest Common Divisor (gcd) Calculator

The program calculates the Greatest Common Divisor of 2 numbers using the Euclidean Algorithm. 

It calculates the remainder of the division between the two numbers, and then, iteratively, between the previous divisor and the last remainder. When one of these remainders is 0, the calculations can stop, since the greatest common divisor will be the last divisor that did not give a 0 as the remainder (because the greatest common divisor between a number and 0 is the number):\
b % a = r1\
a % r1 = r2\
r1 % r2 = r3\
r2 % r3 = r4\
(…)\

Some numbers to try out the code are the following: a = 10 and b = 4 (the result is 2); a = 1071 and b = 1029 (the result must be 21); a = 64 and b = 310 (the result is 2).

## How to use it
1. Initialize a node project: `npm init -y`
2. Install the prompt-sync package: `npm install prompt-sync`
3. Run the program: `node gcd.js`
4. Write the two numbers in the terminal.
