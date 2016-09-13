function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}

function startMove(obj, attr, iTarget, fun) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        if (attr == 'opacity') {
            var isOpacity = true;
            var currStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            var currStyle = parseInt(getStyle(obj, attr));
        }
        var speed = (iTarget - currStyle) / 8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (currStyle == iTarget) {
            clearInterval(obj.timer);
            if (fun) {
                fun();
            }
        } else {
            if (isOpacity) {
                obj.style.filter = 'alpha(opacity:' + currStyle + speed + ')';
                obj.style[attr] = (currStyle + speed) / 100;
            } else {
                obj.style[attr] = currStyle + speed + 'px';
            }
        }
    }, 30);
}
