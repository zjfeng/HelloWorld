function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}

function startMove(obj, json, fun) {
    var finishFlag = true;
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        for (var attr in json) {
            if (attr == 'opacity') {
                var isOpacity = true;
                var currStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                var currStyle = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - currStyle) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (currStyle != json[attr]) {
                finishFlag = false;
            } else {
                finishFlag = true;
            }
            if (isOpacity) {
                obj.style.filter = 'alpha(opacity:' + currStyle + speed + ')';
                obj.style[attr] = (currStyle + speed) / 100;
            } else {
                obj.style[attr] = currStyle + speed + 'px';
            }
            if (finishFlag) {
                clearInterval(obj.timer);
                if (fun) {
                    fun();
                }
            }
        }
    }, 30);
}
