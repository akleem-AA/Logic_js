let input= "bcdea"
//ouput gnirts abcde
//answer we have resolve it by using for loop and sort functin 

//step1:- 
let output = input.split('').sort().join('')
console.log(output) //same output abcde

//step2:- 
function alphabeticArrange(data){
    let str = data.split('')

    for(let i = 0;i<str.length-1;i++){
       for(let j =0;j<str.length-1-i;j++){
           if(str[j]>str[j+1]){
               let tem = str[j];
               str[j] = str[j+1];
               str[j+1] = tem
           }
       }
    } 
    return str.join('')
 
}



let result = alphabeticArrange(input)
console.log('final result = ',result)//abcde





