$(function() {
	/*隐藏第七条开始后面的品牌，最后一条除外*/
	//获取对应元素
	var $category = $("ul li:gt(5):not(:last)");
	//对应元素隐藏
	$category.hide();
	/*单击品牌按钮*/
	//获取品牌按钮
	var $toggleBtn = $("div.showmore > a");
	//品牌按钮点击事件：
	$toggleBtn.click(function() {
		if ($category.is(":visible")) {
			$category.hide();
			$(this).find("span") //获得当前元素集合中每个元素的后代=获取a标签下的span
				.css("background", "url(img/down.gif) no-repeat 0 0") //修改span样式
				.text("显示全部品牌"); //修改span显示文字
			$('ul li').removeClass("promoted"); //删除高亮样式
		} else {
			$category.show(); //显示被隐藏按钮
			$(this).find("span") //获得当前元素集合中每个元素的后代=获取a标签下的span
				.css("background", "url(img/up.gif) no-repeat 0 0") //修改span样式
				.text("精简显示品牌"); //修改span显示文字
			$('ul li').filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")
				.addClass("promoted"); //添加高亮样式
		}
		return false; //阻止超链接跳转
	});
});
