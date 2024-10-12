
 //to check a string is palindrome or not

 //* ONE LINE SOLUTION
 const str = 'malayalam'
 const str2 = 'abcd'

 const isPalindrom = (word) => word === word.split('').reverse().join('')

 console.log(isPalindrom(str));
 console.log(isPalindrom(str2));
 