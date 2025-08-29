// // for of

// const arr=[1,2,3,4,5];
// for (const element of arr) {
//     console.log(element);
    
// }

// const grettings='hello world';
// for (const element of grettings){
//     console.log(element)
// }

// const map=new Map();
// map.set('IN',"India");
// map.set('USA','united states of india');
// // console.log(map);

// for(const [key,value] of map){
//     console.log(key);
// }

// const myobject={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift by apple'
// }

// for(const key in myobject){
//     console.log(`${key} shortcut is for ${myobject[key]}`); 
// }

// const coding =["js","ruby","java","cpp"];
// coding.forEach( function(element){
// console.log(element)
// })


// const moding =["js","ruby","java","cpp"];
// moding.forEach( (item,index,moding)=>{
// console.log(item,index,moding)
// })

const mycoding=[
    {langname:"java",


    },
   
    {langname:"python",
        

    },
    {langname:"cpp",
        

    }
]

mycoding.forEach((item)=>{
    console.log(item.langname )
})