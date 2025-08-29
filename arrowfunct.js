const user={
    username:"hitesh",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username},welcome to website`);
    }
}

// arrow function

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(5,7);
const addTwo=(num1,num2)=>  (num1+ num2);
    

console.log(addTwo(5,7));