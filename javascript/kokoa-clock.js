const clock=document.querySelector("span.clock");


function Clock(){
    const date=new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}`;
}

Clock();
setInterval(Clock,1000);