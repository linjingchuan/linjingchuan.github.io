var oDiv = document.getElementById('scroll-button');
    var oParent = document.getElementById('scroll-track');
    var oContainer = document.getElementById('container');
    var oBox = document.getElementById('box');

    oDiv.onmousedown = function(ev){
        var oEvent = ev||event;
        //获取鼠标点击在div上的y轴坐标
        var disY = oEvent.clientY - oDiv.offsetTop;

        document.onmousemove = function(ev){
            var oEvent = ev||event;

            var t = oEvent.clientY - disY;
            //获取滚动条比例，再减掉文本容器的边框大小
            var scale = oDiv.offsetTop/(oParent.offsetHeight-oDiv.offsetHeight-4);

            if(t<0)
            {
                t = 0;
            }
            else if(t>(oParent.offsetHeight-oDiv.offsetHeight))
            {
                t = oParent.offsetHeight-oDiv.offsetHeight;
            }

            oDiv.style.top = t + 'px';
            oContainer.style.top = -scale * (oContainer.offsetHeight - oBox.offsetHeight) + 'px';//按比例滚动条滚到哪个位置文本滚到对应的


        }

        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
        }
        return false;//阻止默认事件
	}
        oBox.onmousewheel = function(ev){
            oEvent = ev||event;
            var t = oDiv.offsetTop;//刚开始的时候此时t = 0
            var scale = 0;

            
            if(oEvent.wheelDelta)
            {
                if(oEvent.wheelDelta>0)//滚轮往上
                {
                    oDiv.style.top = t - 20 + 'px';
                    t = oDiv.offsetTop;
                    //alert(t);//t = 0;
                    if(t<0)
                    {
                        oDiv.style.top = 0 + 'px';
                    }
                    scale = oDiv.offsetTop/(oParent.offsetHeight-oDiv.offsetHeight-4);
                    
                    oContainer.style.top = -scale * (oContainer.offsetHeight - oBox.offsetHeight) + 'px';
                }
                else if(oEvent.wheelDelta<0)//滚轮往下
                {
                    oDiv.style.top = t + 20 + 'px';
                    t = oDiv.offsetTop;
                    if(t>oParent.offsetHeight-oDiv.offsetHeight)
                    {
                        oDiv.style.top = oParent.offsetHeight-oDiv.offsetHeight + 'px';
                    }
                    
                    scale = oDiv.offsetTop/(oParent.offsetHeight-oDiv.offsetHeight-4);

                    oContainer.style.top = -scale * (oContainer.offsetHeight - oBox.offsetHeight) + 'px';
                }
            }
            
            return false;//阻止默认事件(阻止滚动主界面滚动条)
        }
        oBox.addEventListener('DOMMouseScroll',function(ev){
            var oEvent = ev||event;
            var t = oDiv.offsetTop;
            var scale = 0;

            if(oEvent.detail)//火狐
            {
                if(oEvent.detail<0)//向上滚
                {
                    oDiv.style.top = t - 20 + 'px';
                    t = oDiv.offsetTop;
                    //alert(t);//t = 0;
                    if(t<0)
                    {
                        oDiv.style.top = 0 + 'px';
                    }
                    scale = oDiv.offsetTop/(oParent.offsetHeight-oDiv.offsetHeight-4);
                    
                    oContainer.style.top = -scale * (oContainer.offsetHeight - oBox.offsetHeight) + 'px';
                }
                else if(oEvent.detail>0)//向下滚
                {
                    oDiv.style.top = t + 20 + 'px';
                    t = oDiv.offsetTop+10;
                    if(t>oParent.offsetHeight-oDiv.offsetHeight)
                    {
                        oDiv.style.top = oParent.offsetHeight-oDiv.offsetHeight + 'px';
                    }
                    
                    scale = oDiv.offsetTop/(oParent.offsetHeight-oDiv.offsetHeight-4);

                    oContainer.style.top = -scale * (oContainer.offsetHeight - oBox.offsetHeight) + 'px';
                }
                
            }
                    oEvent.preventDefault();//阻止浏览器默认事件
                    /*oEvent.cancelBubble = true;
                    oEvent.stopPropagation();
                    return false;*/
        },false);





		// JavaScript Document
