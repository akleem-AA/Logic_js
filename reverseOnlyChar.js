let str = "only change character";
//output  ylno egnahc retcarahc

function convert(str){
    let words = str.split(' ')
    let final = []
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
let result  = convert(str)
console.log("final change only char =",result)

// We first split the input sentence into words.
// We use a for loop to iterate through each word in the array of words.
// For each word, we use another for loop to reverse the characters within that word.
// The reversed word is then pushed into the final array.
// Finally, we join the final arry words back into a sentence.
