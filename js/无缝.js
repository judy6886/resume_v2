var oBoxCat=document.getElementById('box-cat');
var oUl2=oBoxCat.getElementsByTagName('ul')[0];
var aLi=oUl2.children;
var timer2=null;
var oR=document.getElementById('right');
var oL=document.getElementById('left');
//复制一份内容
// oUl2.innerHTML=oUl2.innerHTML+oUl2.innerHTML;
oUl2.innerHTML+=oUl2.innerHTML;
//设置oUl2的宽度
oUl2.style.width=aLi[0].offsetWidth*aLi.length+'px';
var l=0;
var w=oUl2.offsetWidth/2;
function toRight(){
    clearInterval(timer2);
    timer2=setInterval(function(){
        l+=10;
        //oUl2.style.left=l%w+'px';
        oUl2.style.left=(l%w-w)%w+'px';
        /*document.title=l;*/
    },100);
}
function toLeft(){
    clearInterval(timer2);
    timer2=setInterval(function(){
        l-=10;
        oUl2.style.left=(l%w-w)%w+'px';
    /*    document.title=l;*/
    },100);
}
toRight();
oBoxCat.onmouseover=function(){
    clearInterval(timer2);
};
oBoxCat.onmouseout=function(){
    toRight();
}
