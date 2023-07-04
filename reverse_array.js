//best way to resolve it by using Data structure

var array = [1, 2, 3,6, 4, 5];
console.log("beform reverse",array); 
var n = array.length;
for(let i=0; i<n/2; i++){
    var t = array[i];
    array[i] = array[n-1-i];
    array[n-1-i] = t
}
 console.log('after reveres ',array);


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
