function display7(number){
	var els =  document.querySelectorAll(".s7 input");
	for(let i =0;i < els.length; i++){
		temp = number.toString().padStart(els.length, 0);
		els[i].setAttribute("value", temp[i]);
	}
	return els.length;
}
display7(0);
var i = 0;
var timer = null;
function start(){
	if(!timer){
		timer = setInterval(() => {
			var len = display7(i);
			i = (i + 1)% Math.pow(10,len);
		}, 10);
	}
	return timer;
}
function stop(){
	clearInterval(timer);
	timer=null;
}
function reset(){
	stop();
	i = 0;
	display7(i);
}