window.onload = function() {
	showTime();
}

function showTime() {
	var tagleftTime = document.getElementById('lefttime');
	var nowTime = new Date();
	var endTime = new Date("2016/7/27,00:00:00");
	var leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
	var day = parseInt(leftTime / (60 * 60 * 24));
	var hour = parseInt(leftTime / (60 * 60) % 24);
	var minute = parseInt(leftTime / (60) % 60);
	var second = parseInt(leftTime % 60);
	if (leftTime > 0) {
		if (hour < 10) {
			hour = '0' + hour;
		}
		if (minute < 10) {
			minute = '0' + minute;
		}
		if (second < 10) {
			second = '0' + second;
		}
		tagleftTime.innerHTML = day + '天' + hour + '小时' + minute + '分' + second + '秒';
	} else {
		tagleftTime.innerHTML = 0 + '天' + 0 + '小时' + 0 + '分' + 0 + '秒';
	}
	setTimeout(showTime, 1000);
}
