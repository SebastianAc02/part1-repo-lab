"use strict";



function changeColor(fontColor){

   
    document.getElementById('text').style.color= fontColor;


}

var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

var curFontColor=1;
var curBgColor=1;



function change(bgColor){

    document.getElementById("td_text").style.backgroundColor = bgColor;
    
}

