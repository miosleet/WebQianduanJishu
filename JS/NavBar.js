//responce func of chage opacity
var container,containerHeightStr,containerHeight,containerWidthStr,containerWidth;
var onChangeOpacity=0;


function opaque(e){
    document.getElementById('NavBar').style.opacity=1;
    //var NavItems=document.getElementsByClassName("NavItem");
    
    //if(onChangeOpacity==0)changeOpacityByTime(1);
    NavBarItemAppear();
    //alert("aaa");
}
//responce func of chage opacity
function de_opaque(e){
    document.getElementById('NavBar').style.opacity=0.3;
    //if(!onChangeOpacity==1)changeOpacityByTime(0.3);
    //alert("bbb");
}

//change opacity of "alert" icon and L/R button
var mouseY,mouseX,shiftMouseY,mouseXProprotion,mouseYProprotion,alertOpacity,LBOpacity,RBOpacity;
var NavBarAlert,LButton,RButton,NavBar;
document.onmousemove=function changeOpacityByMousePos(e){
    //define
    e=e||window.event;
    NavBarAlert=document.getElementById("NavBarAlertBasic");
    container=document.getElementById("container");
    LButton=document.getElementById("LButton");
    RButton=document.getElementById("RButton");
    NavBar=document.getElementById("NavBar");
    //get value of screen H/W
    containerHeightStr=window.getComputedStyle(container).getPropertyValue('height');
    containerHeight=containerHeightStr.substr(0,containerHeightStr.length-2);
    containerWidthStr=window.getComputedStyle(container).getPropertyValue('width');
    containerWidth=containerWidthStr.substr(0,containerWidthStr.length-2);

    //get mouse pos
    mouseX=e.pageX;
    mouseY=+containerHeight-e.pageY;
    shiftMouseY=mouseY-100;
    mouseXProprotion=mouseX/containerWidth;
    mouseYProprotion=mouseY/containerHeight;
    //console.log(containerWidth +",  "+containerHeight +",  "+mouseX+",  "+mouseY );

    //calc NavBar
    if(shiftMouseY<0)shiftMouseY=0;
    alertOpacity=shiftMouseY*4/containerHeight;
    if(alertOpacity>1)alertOpacity=1;
    NavBarAlert.style.opacity=alertOpacity;

    //calc L/RButton
    if(mouseXProprotion<0.1){LBOpacity=1;RBOpacity=0.4}
    else if(mouseXProprotion<0.25){LBOpacity=(0.25-mouseXProprotion)*4+0.4;RBOpacity=0.4}
    else if(mouseXProprotion<0.75){LBOpacity=0.4;RBOpacity=0.4}
    else if(mouseXProprotion<0.90){LBOpacity=0.4;RBOpacity=(mouseXProprotion-0.75)*4+0.4}
    else if(mouseXProprotion<1.00){LBOpacity=0.4;RBOpacity=1.0}
    else {LBOpacity=0.4;RBOpacity=0.4}
    LButton.style.opacity=LBOpacity;
    RButton.style.opacity=RBOpacity;
    //console.log(mouseXProprotion);

    //calc NavBar_Main Y pos
    var temp=0-(mouseYProprotion-0.2)*500;
    if(temp>0)temp=0;
    NavBar.style.bottom=temp+"px";
    //console.log(temp);



    //console.log(alertOpacity);
}

var NavItems;
function NavBarItemAppear(){


}

