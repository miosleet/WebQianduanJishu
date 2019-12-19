//responce func of chage opacity
var container,containerHeightStr,containerHeight,containerWidthStr,containerWidth;

function opaque(x){
    changeOpacityByTime(30,100);
    //alert("aaa");
}
//responce func of chage opacity
function de_opaque(x){
    changeOpacityByTime(100,30);
    //alert("bbb");
}
//change  opacity of NavBar 
function changeOpacityByTime(istart,iTarget){
    //alert("aaa");
    var timer=null;
    var alpha=istart;
    var oImg=document.getElementById('NavBar');
    clearInterval(timer);
    timer=setInterval(function(){
        if(alpha<iTarget){
            iSpeed=2.5;
        }else{
            iSpeed=-2.5;
        }
        if(Math.abs(alpha-iTarget)<2.5){
            clearInterval(timer);
            alpha=iTarget;
        }else{
            alpha+=iSpeed;
            oImg.style.filter='alpha(opacity:'+alpha+')';
            oImg.style.opacity=alpha/100;
        }
        //console.log(alpha);
    },10)

}

//change opacity of "alert" icon
var mouseY,mouseX,shiftMouseY,mouseXProprotion,alertOpacity,LBOpacity,RBOpacity;
var NavBarAlert,LButton,RButton;
document.onmousemove=function changeOpacityByMousePos(e){
    //define
    e=e||window.event;
    NavBarAlert=document.getElementById("NavBarAlertBasic");
    container=document.getElementById("container");
    LButton=document.getElementById("LButton");
    RButton=document.getElementById("RButton")

    //get value of screen H/W
    containerHeightStr=window.getComputedStyle(container).getPropertyValue('height');
    containerHeight=containerHeightStr.substr(0,containerHeightStr.length-2);
    containerWidthStr=window.getComputedStyle(container).getPropertyValue('width');
    containerWidth=containerWidthStr.substr(0,containerWidthStr.length-2);

    //get mouse pos
    mouseX=e.pageX;
    mouseY=+containerHeight-e.pageY;
    shiftMouseY=mouseY-100;
    //console.log(containerWidth +","+containerHeight +","+mouseX+","+mouseY );

    //calc NavBar
    if(shiftMouseY<0)shiftMouseY=0;
    alertOpacity=shiftMouseY*4/containerHeight;
    if(alertOpacity>1)alertOpacity=1;
    NavBarAlert.style.opacity=alertOpacity;

    //calc L/RButton
    mouseXProprotion=mouseX/containerWidth;
    if(mouseXProprotion<0.1){LBOpacity=1;RBOpacity=0.4}
    else if(mouseXProprotion<0.25){LBOpacity=(0.25-mouseXProprotion)*4+0.4;RBOpacity=0.4}
    else if(mouseXProprotion<0.75){LBOpacity=0.4;RBOpacity=0.4}
    else if(mouseXProprotion<0.90){LBOpacity=0.4;RBOpacity=(mouseXProprotion-0.75)*4+0.4}
    else if(mouseXProprotion<1.00){LBOpacity=0.4;RBOpacity=1.0}
    else {LBOpacity=0.4;RBOpacity=0.4}
    LButton.style.opacity=LBOpacity;
    RButton.style.opacity=RBOpacity;



    //console.log(alertOpacity);
}
