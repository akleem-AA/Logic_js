let n = [1,2,4,5,6,8,9]
//output = [3,7]

function findMiss(){
    let num = [];
    let mis = 0
    for(let i = 0;i<n.length;i++){ 
        if(mis<n[i]){
           mis=n[i]
        }
    }
    for(let i = n[0];i<mis;i++){
            if(!n.includes(i)){
                num.push(i)
            }
    }
    return num;
}
let res = findMiss()
console.log(res) //outpu is [3,4]


//algorithm :- we have find the max value and again run the loop with initial value is first index of array and last value is max value
//after data we have check if new value is already exit in old array we avoid this otherwise we are pushing the new value in a empty array
