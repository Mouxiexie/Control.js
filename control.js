function startMove(obj,iTarget,cuy)
	{
	  clearInterval(obj.timer);
    obj.timer=setInterval(function()
	{
		var cur=parseInt(getComputedStyle(obj,false)[cuy]);
		var speed=(iTarget-cur)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
		
		if( cur==iTarget)
			{
				clearInterval(obj.timer)
			}
		else
			{
				obj.style[cuy]=cur+speed+'px'; 
			}
		
	},30);
	}
