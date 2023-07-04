//Problem1: Reverse the array value...
let arr = [1,2,3,4,5]
revers(arr)

function revers(data){
    // console.log(data.reverse())
    let array = []
    for(let i =data.length-1; i >= 0 ; i--){
        array.push(data[i])
        
    }
    console.log(array)

}


//Step:2 Here is a simple example to reverse a array by using reverse() method in js
const array = [1, 2, 3, 4, 5];
const reversedArray = [...array].reverse();
console.log(reversedArray); //[reverse output]
console.log(array); //output [original array]
