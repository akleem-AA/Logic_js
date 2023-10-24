let input= "this is string"
//ouput gnirts si siht

//by using for loop and split

function reverseString(data){
    let str = '';
    for(let i = data.length-1;i>=0;i--){
        str+=data[i]
    }
    return str
}



let result = reverseString(input)
console.log('final result = ',result)

let output = input.split('').reverse().join('')
console.log(output) //gnirts si siht

