window.onload = function () {
	var lis = document.getElementsByTagName('li');
	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onmouseover = function () {
			var sHeight = this.getElementsByTagName('div')[0].offsetHeight;
			var sTop = this.getElementsByTagName('div')[0].style.top;
			var sBottomHeight = sHeight + sTop;
			var lTopHeight = (this.index - 1) * 30 + 42;
			if (sBottomHeight < lTopHeight) {
				this.getElementsByTagName('div')[0].style.top = lTopHeight + 'px';
			}
			if ((sBottomHeight - lTopHeight) < 30) {
				this.getElementsByTagName('div')[0].style.top = lTopHeight + 33 + 'px';
			}
			if (sHeight > 550) {
				this.getElementsByTagName('div')[0].style.top = 3 + 'px';
			}
		}
	}
}