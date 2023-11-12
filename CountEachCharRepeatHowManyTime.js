//count the each charecter how many time occure .
// by using loop , reduce etc
// input apple ,output= a=1,p=2,l=1,e=1

//we need to make a object 
//we need to split string for iterable 
//we should check the object have this key already by using hasOwnProperty
//we should increment ++ other wise add new key with 1


// STEP:1
function coutChar(data){
    let arr =data.split('')
    let obj ={}
    for(let i = 0; i<arr.length;i++){
        if(obj.hasOwnProperty(arr[i])==false){
            obj[arr[i]] =1
        }else{
            obj[arr[i]]++
        }
    }
    console.log(obj)
}
coutChar('apple')


///STEP 2
let str = "atul kumar srivastava";
let obj ={};
for(let s of str)if(!obj[s])obj[s] = 1;else obj[s] = obj[s]  + 1;
console.log(obj)

// STEP:3 
let s = 'hello';
var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
console.log(result); // {h: 1, e: 1, l: 2, o: 1}
