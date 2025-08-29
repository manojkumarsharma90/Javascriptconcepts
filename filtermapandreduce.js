// const coding=["js","ruby","java","python","cpp"];
// coding.forEach( (item)=>{
//     console.log(item);
    
// })
// const mynums=[1,2,3,4,5,6,7,8,9,10]

// const newnums=mynums.filter( (num)=>{
//     return num>4;
// });
// console.log(newnums);

const myNumbers=[1,2,3,4,5,6,7,8,9,10]
const newnum=myNumbers.map( (num)=> num+10)
console.log(newnum);


//reduce accumulator=initial value,

const shoppingcart=[
  {  name:"bag",
    price:5000
  },
  {
    name:"headphone",
    price:10000
  },
  {
    name:"cap",
    price:200
  }
]

let totalcartprice=shoppingcart.reduce( (acc,item)=>acc+item.price,0);

console.log(totalcartprice);