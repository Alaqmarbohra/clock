let curtime;
let time;

setInterval(()=>{
    curtime= new Date();
    if(curtime.getHours()<10){
        time="0"+curtime.getHours();
    }
    else{
        time=curtime.getHours();
    }
    if(curtime.getMinutes()<10){
        time=time+" : 0"+curtime.getMinutes();
    }
    else{
        time=time+" : "+curtime.getMinutes();
    }
    if(curtime.getSeconds()<10){
        time=time+" : 0"+curtime.getSeconds();
    }
    else{
        time=time+" : "+curtime.getSeconds();
    }
    //set time
    document.getElementById("currenttime").innerHTML=time;
    document.getElementById("currentdate").innerHTML= curtime.toDateString();
    
    //set background
    if(curtime.getHours()<12){
        document.getElementById('clock_bg').style.backgroundImage="url('../files/morning.jpg')";
    }
    else if(curtime.getHours()<17){
        document.getElementById('clock_bg').style.backgroundImage="url('../files/afternoon.jpg')";
    }
    else if(curtime.getHours()<19){
        document.getElementById('clock_bg').style.backgroundImage="url('../files/evening.jpeg')";
        document.getElementById('clock_bg').style.color="white";
        document.getElementById('clock_bg').style.borderColor="white";
        document.getElementById('currenttime').style.borderColor="white";
        document.getElementById('currentdate').style.borderColor="white";
    }
    else{
        document.getElementById('clock_bg').style.backgroundImage="url('../files/night.jpeg')";
        document.getElementById('clock_bg').style.color="white";
        document.getElementById('clock_bg').style.borderColor="white";
        document.getElementById('currenttime').style.borderColor="white";
        document.getElementById('currentdate').style.borderColor="white";
    }
},1000);
