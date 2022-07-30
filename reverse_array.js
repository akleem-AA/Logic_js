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
