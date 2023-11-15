//input is nested array you should flat this by uisng for loop
let arr =[12,0,[22,1,[11,2],[1]]]

function nested(arr){
    let n =[]
   function flatten(input){
       for(let i = 0;i<input.length;i++){
           if(Array.isArray(input[i])){
               flatten(input[i])
           }else{
               n.push(input[i])
           }
       }
   }
    flatten(arr)
    return n.sort((a,b)=>b-a)
}
let rs = nested(arr)
console.log(rs)





//Step 2:- by using flat method
let arr = [12, 1, [21, 1, [11, 2], [1]]];

function flattenAndSort(arr) {
  let flattened = arr.flat(Infinity);
  return flattened.sort((a, b) => a - b);
}

let rs = flattenAndSort(arr);
console.log(rs);
