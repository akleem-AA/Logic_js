// Problem-2 Reverese given number by using function question 1234 and expacted output 4321

function rNum(data){
let r    
let result = 0;
  while (data != 0) {
     r = data%10  
    data = Math.floor(data/10)
    result =result*10 +r
 }
    console.log(result)
}
rNum(1234)//output 4321



//STEP:-2 to resole it by using simple split reverse and join method
function reverseNumber(num) {
  const reversedNum = parseInt(num.toString().split('').reverse().join(''));
  console.log(reversedNum);
}

reverseNumber(1234); // Output: 4321

// ``` In this version, we convert the number to a string using num.toString().
// Then, we split the string into an array of individual characters using .split('').
// After that, we reverse the array using .reverse(). Finally,
// we join the reversed array back into a string and convert it back to a number using parseInt().
// This gives us the reversed number, which is then logged to the console.
```
