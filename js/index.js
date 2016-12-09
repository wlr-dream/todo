$(document).ready(function(){
	var main=$(".main");
	var add=$(".img2");
	var close=$("#close")
	var list=$("#list")
	var nav=$("#nav")
	var side=$(".side")
//	主页面
	main.eq(0).css("display","block")
	main.eq(1).css("display","none");
	add.on("touchstart",function(){
		main.eq(1).css("display","block")
		main.eq(0).css("display","none");
	})
//  添加页面
	close.on("touchstart",function(){
		console.log(this);
		main.eq(0).css("display","block")
		main.eq(1).css("display","none")
	})
//  设置页面
	list.on("touchend",function(){
		nav.css("display","block")
		side.animate({"width":"80%"},200,"linear")
	})
	$("#nav:not(.side)").on("touchend",function(){
		nav.css("display","none")
		side.animate({"width":"0"},200,"linear")
	})
})