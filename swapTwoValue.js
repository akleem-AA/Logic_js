//Question:1 how to swap two values by using 3 variable 

let a = 10;
let b = 20;
let tem = b;
  b = a;
  a = tem;
console.log(a,b)//output 20, 10

//we have assign the vlaue to tem and change the value accordingly 

//Question 2:- how we can swap two value without uisng any 3th variable 
[a,b] = [b,a] 
//or 
[b,a] = [a,b] //both are some work 
//it's always give you error if you forget to use ; when we declare the variable 


function ass(arr){
for(let i = 0 ;i<arr.length-1;i++){
    if(arr[i]>arr[i+1]){
    let tem = arr[i] //1
   arr[i] =arr[i+1]//1
   arr[i +1] = tem
    }
} 
   console.log(arr) //output [1,12,3,4,5,4,40]
}
ass([12,1,40,3,4,5,4])
//12>1 true [1,12] 
//12>40 false nothing
//40>3 true [1,12,3,40]
//40>4 true [1,12,3,4,40]
//40>5 true [1,12,3,4,5,40]
//40>4 true [1,12,3,4,5,4,40]

