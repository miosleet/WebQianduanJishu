//change bg by time

window.onload=function(){
    checkTime();
    setInterval(checkTime,2000);
}

var myDate,Hour;
function checkTime(e){
    myDate=new Date();
    Hour=myDate.getHours();
    var bgElement=document.getElementById("bg");
    var maskElement=document.getElementById("pageMask");
    bgElement.style.backgroundImage="url(./PIC/BG/S2.png)";
    if((Hour>=0&&Hour<=4)||(Hour>19&&Hour<24)){
        bgElement.style.backgroundImage="url(./PIC/BG/S0.png)";
        maskElement.style.backgroundColor="rgba(50, 60, 130, 0.5)";
    }
    else if(Hour>4&&Hour<=6){
        bgElement.style.backgroundImage="url(./PIC/BG/S1.png)";
        maskElement.style.backgroundColor="rgba(150, 180, 200, 0.5)";
    }
    else if(Hour>6&&Hour<=16){
        bgElement.style.backgroundImage="url(./PIC/BG/S2.png)";
        maskElement.style.backgroundColor="rgba(200, 220, 255, 0.5)";
    }
    else if(Hour>16&&Hour<=19){
        bgElement.style.backgroundImage="url(./PIC/BG/S3.png)";
        maskElement.style.backgroundColor="rgba(255, 230, 200, 0.5)";
    }
    //console.log(myDate+","+bgElement.style.backgroundImage+","+maskElement.style.backgroundColor);

}
