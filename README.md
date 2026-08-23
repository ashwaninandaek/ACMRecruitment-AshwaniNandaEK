#Palindrome
1. The 3 test cases are checked whether they are palindrome or not. If palindrome it returns "true" else "false".
2. First initialize a variable, 'rev' to 0.
3. The last digit is obtained by dividing the number by 10 and taking the remainder.
4. Add the last digit obtained to rev after multiplying rev with 10.
5. Then the number is divided by 10 to get the absolute quotient value.
6. Repeat steps 3 to 5 until the number becomes zero.
7. Compare the original number and reversed number, then return it.


#Integer to Roman
1. The 3 test cases are converted to roman numeral form.
2. Create a dictionary with keys as the value and values as symbols.
3. Initialize a variable, result to "" (an empty string).
4. Get the number in each place separately.
5. Applying conditions convert the number to roman form.
6. Return result.
