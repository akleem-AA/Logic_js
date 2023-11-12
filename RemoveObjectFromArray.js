
//Remove the value which is not male from the array of object by using for loop and also update original array

//algorithm:-
//first we have check how many item is not make
//second we have create a variable and assing how many item is not male 
//we have itrate a loop for remove one item from the array
//finally we have itrate a loop 0 to count value and add our loop inside the count loop


let arr =[{name:'abc',gender:'male'},
{name:'abcrf',gender:'female'},{name:'abcde',gender:'female'},{name:'4',gender:'female'}
]
 
 let count = 0;
 for(let i =0;i<arr.length;i++){
     if(arr[i].gender !=='male') count++
 }
 console.log(count)
 for(let i =0 ; i<=count;i++){
      for(let i =0; i<arr.length;i++){
         if(arr[i].gender ==='female'){
             arr.splice(i,1)
               }
         }
 }

 
 console.log(arr)
