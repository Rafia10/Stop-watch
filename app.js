var min=0;
var sec=0;
var msec=0;
var minutes=document.getElementById("min");
var seconds=document.getElementById("sec");
var miliseconds=document.getElementById("msec");
var interval;
function timer(){
    msec++
    miliseconds.innerHTML=msec;
    if(msec>=100){
        sec++
        seconds.innerHTML=sec+":";
        msec=0
    }
    else if(sec>=60){
        min++
        minutes.innerHTML=min+":";
        sec=0

    }
}
function start(){
    interval=setInterval(timer,10)
    document.getElementById("start").disabled = true;
     document.getElementById("stop").disabled = false;
     document.getElementById("reset").disabled = false;
}
function stop(){
    clearInterval(interval);
    document.getElementById("start").disabled = false;
     document.getElementById("stop").disabled = true;
     document.getElementById("reset").disabled = false;
}
function reset(){
    min=0;
    sec=0;
    msec=0;
    seconds.innerHTML=sec +":";
    miliseconds.innerHTML=msec;
    minutes.innerHTML=min+":";
    clearInterval(interval);
    document.getElementById("start").disabled = false;
     document.getElementById("stop").disabled = false;
     document.getElementById("reset").disabled = true;
}
