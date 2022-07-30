//Reverese given number by using function question 1234 and expacted output 4321

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
