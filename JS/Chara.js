var cnt=0,ShipClass=0;;

window.onload=function(){
    var ShipClass_Item0=document.getElementById("ShipClass_Item0");
    var ShipClass_Item1=document.getElementById("ShipClass_Item1");
    var ShipClass_Item2=document.getElementById("ShipClass_Item2");
    var ShipClass_Item3=document.getElementById("ShipClass_Item3");
    var ShipClass_Item4=document.getElementById("ShipClass_List");
    var ShipClass_List=document.getElementById("ShipClass_Item4");
    var ShipClass_OneClass=document.getElementById("ShipClass_OneClass");
    
    
    

}
function CharaPage_OnCreat(){
    

}

function ShipItem_Click(ShipClassStr){
    ShipClass=parseInt(ShipClassStr);
    console.log(ShipClass);
    ShipItem_Move(ShipClass);
    setTimeout(ShipClass_Show,800);
    

}

function ShipItem_Move(ShipClass){
    console.log("ShipItem_Move");
    cnt=0;
    var timer=setInterval(frame,10);
    function frame(){
        if(cnt>200)clearInterval(timer);
        else{
            cnt+=5;
            ShipClass_Item0.style.top="-"+cnt+"%";
            ShipClass_Item1.style.top=cnt+"%";
            ShipClass_Item2.style.top="-"+cnt+"%";
            ShipClass_Item3.style.top=cnt+"%";
            ShipClass_Item4.style.top="-"+cnt+"%";
        }
    }

    ;
}

function ShipClass_Show(ShipClass){
    cnt=-150;
    console.log("ShipClass_Show");
    var timer=setInterval(frame,10);
    function frame(){
        if(cnt>=0)clearInterval(timer);
        else{
            cnt+=5;
            ShipClass_OneClass.style.top=cnt+"%";
        }
    }

    ShipClass_OneClass.style.top=0;


}

function ShipIntro_Show(ShipID){
    var ShipClass_Intro=document.getElementById("ShipClass_OneClass_CharaIntroGroup");
    cnt=100;
    console.log("ShipImgHide");
    var ShipClass_OneClass_Chara1=document.getElementById("ShipClass_OneClass_Chara1");
    var ShipClass_OneClass_Chara2=document.getElementById("ShipClass_OneClass_Chara2");
    var ShipClass_OneClass_Chara3=document.getElementById("ShipClass_OneClass_Chara3");
    var ShipClass_OneClass_Chara4=document.getElementById("ShipClass_OneClass_Chara4");
    var ShipClass_OneClass_Chara5=document.getElementById("ShipClass_OneClass_Chara5");
    var timer=setInterval(frame,40);
    function frame(){
        if(cnt<=0)clearInterval(timer);
        else{
            cnt-=20;
            ShipClass_OneClass_Chara1.style.width=cnt+"%";
            ShipClass_OneClass_Chara2.style.width=cnt+"%";
            ShipClass_OneClass_Chara3.style.width=cnt+"%";
            ShipClass_OneClass_Chara4.style.width=cnt+"%";
            ShipClass_OneClass_Chara5.style.width=cnt+"%";
        }
    }
    setTimeout(show,1000)
    function show(){
        cnt=-150;
        console.log("ShipIntro_Show");
        var timer=setInterval(frame,40);
        function frame(){
            if(cnt>=0)clearInterval(timer);
            else{
                cnt+=20;
                ShipClass_Intro.style.top=cnt+"%";
            }
        }
        ShipClass_Intro.style.top=0;
    }
}

function ShipIntro_Back(){
    var ShipClass_Intro=document.getElementById("ShipClass_OneClass_CharaIntroGroup");
    console.log("ShipImgHide");
    var ShipClass_OneClass_Chara1=document.getElementById("ShipClass_OneClass_Chara1");
    var ShipClass_OneClass_Chara2=document.getElementById("ShipClass_OneClass_Chara2");
    var ShipClass_OneClass_Chara3=document.getElementById("ShipClass_OneClass_Chara3");
    var ShipClass_OneClass_Chara4=document.getElementById("ShipClass_OneClass_Chara4");
    var ShipClass_OneClass_Chara5=document.getElementById("ShipClass_OneClass_Chara5");
    cnt=0;
    console.log("ShipIntro_Show");
    var timer=setInterval(frame,40);
    function frame(){
        if(cnt<=-150)clearInterval(timer);
        else{
            cnt-=20;
            ShipClass_Intro.style.top=cnt+"%";
        }
    }
    ShipClass_Intro.style.top=0;
    setTimeout(show,1000)
    function show(){
        cnt=0;
        var timer=setInterval(frame,40);
        function frame(){
            if(cnt>=20)clearInterval(timer);
            else{
                cnt+=2;
                ShipClass_OneClass_Chara1.style.width=cnt+"%";
                ShipClass_OneClass_Chara2.style.width=cnt+"%";
                ShipClass_OneClass_Chara3.style.width=cnt+"%";
                ShipClass_OneClass_Chara4.style.width=cnt+"%";
                ShipClass_OneClass_Chara5.style.width=cnt+"%";
            }
        }
    }

}