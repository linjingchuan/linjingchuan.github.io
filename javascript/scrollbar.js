var oDiv = document.getElementById('scroll-button');
    var oParent = document.getElementById('scroll-track');
    var oContainer = document.getElementById('container');
    var oBox = document.getElementById('box');

    oDiv.onmousedown = function(ev){
        var oEvent = ev||event;
        //��ȡ�������div�ϵ�y������
        var disY = oEvent.clientY - oDiv.offsetTop;

        document.onmousemove = function(ev){
            var oEvent = ev||event;

            var t = oEvent.clientY - disY;
            //��ȡ�������������ټ����ı������ı߿��С
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
            oContainer.style.top = -scale * (oContainer.offsetHeight - oBox.offsetHeight) + 'px';//�����������������ĸ�λ���ı�������Ӧ��


        }

        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
        }
        return false;//��ֹĬ���¼�
	}
        oBox.onmousewheel = function(ev){
            oEvent = ev||event;
            var t = oDiv.offsetTop;//�տ�ʼ��ʱ���ʱt = 0
            var scale = 0;

            
            if(oEvent.wheelDelta)
            {
                if(oEvent.wheelDelta>0)//��������
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
                else if(oEvent.wheelDelta<0)//��������
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
            
            return false;//��ֹĬ���¼�(��ֹ���������������)
        }
        oBox.addEventListener('DOMMouseScroll',function(ev){
            var oEvent = ev||event;
            var t = oDiv.offsetTop;
            var scale = 0;

            if(oEvent.detail)//���
            {
                if(oEvent.detail<0)//���Ϲ�
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
                else if(oEvent.detail>0)//���¹�
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
                    oEvent.preventDefault();//��ֹ�����Ĭ���¼�
                    /*oEvent.cancelBubble = true;
                    oEvent.stopPropagation();
                    return false;*/
        },false);
		// JavaScript Document