let arr = [9,1,2,3,4]
let target = 7;

function findTwoNumber (arr,target){
    for(let i = 0; i<arr.length;i++){
        let num = arr[i]
        for(let j =i+1;j<arr.length;j++){
            let num1 = arr[j];
            if(num +num1 ===target){
                return [num,num1]
            }
        }
    }
    return null
}


console.log(findTwoNumber(arr,target)) //output [3,4]


//it will return the array who will match with target value 
//I have learn by this question make a function with fully mathemtic think which is moved in your mind
