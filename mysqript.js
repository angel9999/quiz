$(document).ready(function(){
	$("#p").click(function() {
	$("#p2").toggle();})
	$("#p3").click(function() {
	$("#p4").toggle();})
	$("#p5").click(function() {
	$("#p6").toggle();})
	$("#p7").click(function() {
	$("#p8").toggle();})
	$("h1").click(function() {
		$(".disappear").toggle();
	$("p").css({"color":"red","font-size":"30px"});
	$("h1").css({"font-size":"50px"});
	$("p").css({"text-align":"center"});
	$("h1").css({"text-align":"center"});
	})
})
