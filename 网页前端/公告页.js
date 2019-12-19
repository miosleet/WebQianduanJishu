// JavaScript Document
(function (){  "use strict";  

	var ggxk1 = document.getElementById("ggxiaokuai1");
    ggxk1.addEventListener("mouseover", myFunction);
    ggxk1.addEventListener("click", mySecondFunction);
    ggxk1.addEventListener("mouseout", myThirdFunction);

	function myFunction() {
    	document.getElementById("ggxiaokuai1").style.background='#2bf';
		//document.getElementByClassName("ggxkleixing")[0].style.color='#000';
	}

	function mySecondFunction() {

	}

	function myThirdFunction() {
    	document.getElementById("ggxiaokuai1").style.background='black';
		//document.getElementByClassName("ggxkleixing")[0].style.color='#2bf';
	}

}());