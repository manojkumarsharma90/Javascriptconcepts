

setInterval(function(){
    let clock=document.getElementById('clock');
    let date=new Date();
    clock.innerHTML=date.toTimeString();

    
},1000);