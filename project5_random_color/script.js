const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
      color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

console.log(randomColor());

let intervalid;
const startchangingcolor=function(){
    const changecolor=function(){
  document.body.style.backgroundColor=randomColor();
    }

   intervalid= setInterval(changecolor,1000);
  
}

const stopchangingcolor=function(){
    const stopcolor=function(){

    }
    clearInterval(intervalid);
    intervalid=null;
}

document.querySelector('#start').addEventListener('click',startchangingcolor)

document.querySelector('#stop').addEventListener('click',stopchangingcolor)


