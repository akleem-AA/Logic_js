const arr = [10,2,40,5,6,3,10]
let index = 0;
let deleteNumber = 5
for(let i=0; i<arr.length; i++){
  
    if(arr[i] ==deleteNumber){
    console.log(i)
     index =i
     break;
    
    }
    // console.log(arr[i]==6)
}

for(let i = index; i<arr.length-1; i++){
    arr[i]= arr[i+1]
}
arr.length = arr.length-1
console.log(arr)
