let data =[
    {name:"oodles",price:30,image:'http://google.com',id:1},
      {name:"os",price:10,image:'http://google.com',id:2},
        {name:"andrids",price:50,image:'http://google.com',id:3},
          {name:"abx",price:3340,image:'http://google.com',id:4},
]
let arr1 =[
    {name:"oodles",price:30,image:'http://google.com',id:1},
]

//add defoult status
addStatus(data)
function addStatus(data){
 let arr =[...data]
    // console.log(arr)
    arr.map((item)=>{
        item.addStatus ="false"
    })
}

changeStatus(arr1)
function changeStatus(finds){
     console.log(finds)
    let arr = [...data]
    arr.map((item)=>{
        console.log(item.id)
       finds.map((itm)=>{
           if(item.id ==itm.id){
               console.log("condition true")
               item.addStatus = "true"
           }
       })
    console.log("not match")
    })
    console.log('change status',arr)
}
