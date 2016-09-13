window.onload = function () {
	var oMove = document.getElementById('move');
	var oTagA = oMove.getElementsByTagName('a');

	for (var i = 0; i < oTagA.length; i++) {
		oTagA[i].onmouseenter = function () {
			var _this = this.getElementsByTagName('i')[0];
			startMove(_this, {top : -40, opacity : 0}, function () {
				_this.style.top = 40 + 'px';
				startMove(_this, {top: 0, 'opacity' : 100});
			});
		}
	}
}