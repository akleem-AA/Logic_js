//QUESTION:- you should shuffle the array randomlly 

//input [1,2,3,4,5] output [3,4,1,5,2] etc randomlly made array


/* 
ALGORITM:-
STEP:1 we should pick a random number from first item to last item.
STEP:2 we should swap last item with random number in array 
STEP:3 we should again find again a random number from the swap value to last item in array
*/

let arr =[1,2,3,4,5,6];


// STEP1 SOULUTION by uisng normal swap value
function shuffleArray (data){
    let lengthOfArray = data.length;
    lengthOfArray --
    let randomNumber = Math.floor(Math.random()*lengthOfArray)
    let tem = data[randomNumber];
    data[randomNumber] =arr[lengthOfArray]
    arr[lengthOfArray] = tem;
    return data

}
let rs =shuffleArray(arr)
console.log(rs)


// STEP1 SOULUTION by uisng while loop for more accuracy 
function shuffleArray1 (data){
    let lengthOfArray = data.length;
    while(lengthOfArray >0){
        lengthOfArray --
    let randomNumber = Math.floor(Math.random()*lengthOfArray)
    let tem = data[randomNumber];
    data[randomNumber] =arr[lengthOfArray]
    arr[lengthOfArray] = tem;
    }
    return data

}
let rs1 =shuffleArray1(arr)
console.log(rs1)
