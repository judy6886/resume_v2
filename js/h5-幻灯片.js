var oBoxSlide=document.getElementById('slide-box');
var oUl=oBoxSlide.children[0];
var aLi=oUl.children;
var oOl=oBoxSlide.children[1];
var aSpan=oBoxSlide.getElementsByTagName('span');
var iNow=0;
var bOk=true;
function next(){
    move(aSpan[iNow],{width:30},{fn:function(){
        iNow++;
        for(var i=0;i<aSpan.length;i++){
            aSpan[i].style.width=0;
        }
        /*oUl.style.left=-aLi[0].offsetWidth*1+'px';*/
        if(iNow==aSpan.length)iNow=0;
        move(oUl,{left:-aLi[0].offsetWidth*iNow},{fn:function(){
            if(bOk){
                next();
            }
        }});
    },type:'linear'});
}

next();
oBoxSlide.onmouseover=function(){
    bOk=false;
    for(var i=0;i<aSpan.length;i++){
        aSpan[i].style.width=0;
        clearInterval(aSpan[i].timer);
    }
};
oBoxSlide.onmouseout=function(){
    bOk=true;
    next();
}