 var bulb = document.querySelector("#bulb")
 var button = document.querySelector("button")

 var flag = 0;
 button.addEventListener("click",function(){
    if( flag == 0) {
        bulb.style.backgroundColor = "yellow"  
        flag = 1;
        alert("Turning ON");
    }else{
        bulb.style.backgroundColor = "white"
        flag=0;
        alert("Turning Of");
    }
 })