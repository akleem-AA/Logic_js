//question print this string as a animation in js without third party

//output:-  t ....after some time h i ..

let str ="this is string need to console with slow motion";
    let index =0;
function typeText(){
    if(index<str.length){
       let singal = str.charAt(index)
       console.log(singal)
       index++
       setTimeout(typeText,50)
    }
}
typeText()
