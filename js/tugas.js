$(document).ready (function() { 
	$('#out').click(function (){
		$(".box1").fadeOut(1000);
		$(".box2").fadeOut(1500);
		$(".box3").fadeOut(2000);
		$(".box4").fadeOut(2500);
		$(".box5").fadeOut(3000);
		$(".box6").fadeOut(3500);
		$(".box7").fadeOut(4000);
		$(".box8").fadeOut(4500);
	});
	$('#in').click(function (){
		$(".box1").fadeIn(1000);
		$(".box2").fadeIn(1500);
		$(".box3").fadeIn(2000);
		$(".box4").fadeIn(2500);
		$(".box5").fadeIn(3000);
		$(".box6").fadeIn(3500);
		$(".box7").fadeIn(4000);
		$(".box8").fadeIn(4500);
	});
	$('#tog').click(function (){
		$(".box1").fadeToggle(1000);
		$(".box2").fadeToggle(1500);
		$(".box3").fadeToggle(2000);
		$(".box4").fadeToggle(2500);
		$(".box5").fadeToggle(3000);
		$(".box6").fadeToggle(3500);
		$(".box7").fadeToggle(4000);
		$(".box8").fadeToggle(4500);
	});
	$('#to').click(function (){
		$(".box1").fadeTo(1000, 0.1);
		$(".box2").fadeTo(1500, 0.2);
		$(".box3").fadeTo(2000, 0.2);
		$(".box4").fadeTo(2500, 0.3);
		$(".box5").fadeTo(3000, 0.3);
		$(".box6").fadeTo(3500, 0.4);
		$(".box7").fadeTo(4000, 0.5);
		$(".box8").fadeTo(4500, 0.6);
	});
	// Slide
	$('#SUp').click(function (){
		$(".box11").slideUp(4500);
		$(".box12").slideUp(4000);
		$(".box13").slideUp(3500);
		$(".box14").slideUp(3000);
		$(".box15").slideUp(2500);
		$(".box16").slideUp(2000);
		$(".box17").slideUp(1500);
		$(".box18").slideUp(1000);
	});
	$('#SDw').click(function (){
		$(".box11").slideDown(4500);
		$(".box12").slideDown(4000);
		$(".box13").slideDown(3500);
		$(".box14").slideDown(3000);
		$(".box15").slideDown(2500);
		$(".box16").slideDown(2000);
		$(".box17").slideDown(1500);
		$(".box18").slideDown(1000);
	});
	$('#Stog').click(function (){
		$(".box11").slideToggle(4000);
		$(".box12").slideToggle(3500);
		$(".box13").slideToggle(2000);
		$(".box14").slideToggle(2500);
		$(".box15").slideToggle(3000);
		$(".box16").slideToggle(3500);
		$(".box17").slideToggle(4000);
		$(".box18").slideToggle(4500);
	});
	// Ketiga
	$("#Up").click(function(){
		$(".box21").hide(1000,);
		$(".box22").hide(1500,);
		$(".box23").hide(2000,);
		$(".box24").hide(2500,);
		$(".box25").hide(3000,);
		$(".box26").hide(3500,);
		$(".box27").hide(4000,);
		$(".box28").hide(4500,);
	});
		$("#Dw").click(function(){
		$(".box21").show(1000,);
		$(".box22").show(1500,);
		$(".box23").show(2000,);
		$(".box24").show(2500,);
		$(".box25").show(3000,);
		$(".box26").show(3500,);
		$(".box27").show(4000,);
		$(".box28").show(4500,);
	});
		$('#Stog').click(function (){
		$(".box21").slideToggle(4000);
		$(".box22").slideToggle(3500);
		$(".box23").slideToggle(2000);
		$(".box24").slideToggle(2500);
		$(".box25").slideToggle(3000);
		$(".box26").slideToggle(3500);
		$(".box27").slideToggle(4000);
		$(".box28").slideToggle(4500);
	});
});