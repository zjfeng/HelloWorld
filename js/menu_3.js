window.onload=function(){
    var aA=document.getElementsByTagName('a');
	for(var i=0; i<aA.length; i++){
		aA[i].onmouseover=function(){
			var This=this;
			clearInterval(This.time);
			This.time=setInterval(function(){
					This.style.width=This.offsetWidth+8+"px";
					if(This.offsetWidth>=160)
					clearInterval(This.time);
				},5)
		}
		aA[i].onmouseout=function(){
				clearInterval(this.time);
				var This=this;
				this.time=setInterval(function(){
					This.style.width=This.offsetWidth-8+"px";
					if(This.offsetWidth<=100){
						This.style.width='100px';
						clearInterval(This.time);
					}
				},5)
		}
	}
	
}