$(function() {
	var x = 10,
		y = 20;
	$("a.tooltip").mouseover(function(e) {
		this.mytitle = this.title;
		this.title = "";
		var imgtitle = this.mytitle ? "<br/>" + this.mytitle : "";
		var div = "<div id='tooltip'><img src='" + this.href + "' alt='产品预览图'/>" + imgtitle + "</div>";
		$("body").append(div);

		$("#tooltip").
			css({
				"top": (e.pageY + y) + "px",
				"left": (e.pageX + x) + "px"
			}).show("fast");
	}).mouseout(function(e) {
		this.title = this.mytitle;
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("#tooltip")
			.css({
				"top": (e.pageY+y) + "px",
				"left":  (e.pageX+x)  + "px"
			});
	});
});
