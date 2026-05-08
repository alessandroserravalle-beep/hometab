
 document.addEventListener('DOMContentLoaded', function () {  
 document.getElementById("btn").addEventListener('click',
 clickHandler); 
 
 document.getElementById("btn2").addEventListener('click',
 clickHandler2);
 
 document.getElementById("btn3").addEventListener('click',
 clickHandler2);
 }); 



function clickHandler(e) {   PopupClick('SHOW'); }

 function PopupClick(str) {
   document.getElementById("privati").style.display='block';
   document.getElementById("btn").style.display='none';
   document.getElementById("btn2").style.display='block';
   document.getElementById("btn3").style.display='block';
}


function clickHandler2(e) {   PopupClick2('SHOW'); }

 function PopupClick2(str) {
   document.getElementById("privati").style.display='none';
	document.getElementById("btn").style.display='block';
	document.getElementById("btn2").style.display='none';
	document.getElementById("btn3").style.display='none';
}


