let input = "only change character";
//output  ylno egnahc retcarahc

//answer algorithm
// We first split the input sentence into words.
// We use a for loop to iterate through each word in the array of words.
// For each word, we use another for loop to reverse the characters within that word.
// The reversed word is then pushed into the final array.
// Finally, we join the final arry words back into a sentence.

//step:1 by using map
function reverseOnlyChar1(data){
    let words = data.split(' ')
    
    const char  = words.map((item)=>{
      return  item.split('').reverse().join('')
    })
    return char.join(' ')
}

let mapResult = reverseOnlyChar1(input)
console.log(mapResult) //output is same ylno egnahc rahc


//step 2 by using for loop
function reverseChar(str){
    let words = str.split(' ')
    let final = [];
    for(let i = 0 ; i<words.length;i++){
        let word = words[i]
        let reversed = ''
        for(let j = word.length-1;j>=0;j--){
            reversed+=word[j]
        }
        final.push(reversed)
    }
    return final.join(' ')
}
let result  = reverseChar(input)
console.log("final change only char =",result) //oupt ylno egnahc rahc

