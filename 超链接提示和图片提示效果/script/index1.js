$(function() {
	var x = 10,
		y = 20;
	$("a.tooltip").mouseover(function(e) {
		this.mytitle = this.title;
		this.title = "";
		var tooltip = $("<div id='tooltip'>" + this.mytitle + "</div>");
		$("body").append(tooltip);
		$("#tooltip").css({
			"top" : (e.pageY + y) + "px",
			"left" : (e.pageX + x) + "px"
		}).show("fast");
	}).mouseout(function(e) {
		this.title =this.mytitle;
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("#tooltip")
			.css({
				"top": (e.pageY+y) + "px",
				"left": (e.pageX+x)  + "px"
			});
	});
});