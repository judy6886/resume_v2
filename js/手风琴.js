var oAccor=document.getElementById('accordion');
var aListAccor=oAccor.children[0];
var aLiList=aListAccor.children;
/*var aLi=document.getElementsByTagName('li');*/
//布局
var buju=60;
for(var f=1;f<aLi.length;f++){
    aLiList[f].style.left=aLiList[0].offsetWidth-(aLi.length-f)*buju+'px';
}
//给li加事件
//往左移动 w*i
for(var f=0;f<aLiList.length;f++){
    aLiList[f].index=f;
    aLiList[f].onmouseover=function(){
        for(var f=0;f<aLiList.length;f++){
            //console.log('this.index是'+this.index+',i值是'+i);
            if(this.index>=f){
                console.log('语句一this.index是'+this.index+',f值是'+f);
                //aLi[i].style.left=i*w+'px';
                move(aLiList[f],{left:f*buju},{type:'ease-out'});
            }else{
                console.log('语句二this.index是'+this.index+',i值是'+f);
                // aLi[i].style.left=aLi[0].offsetWidth-(aLi.length-i)*w+'px';
                move(aLiList[f],{left:aLiList[0].offsetWidth-(aLiList.length-f)*buju},{type:'ease-out'})
            }
        }
    }
}