window.onload = function() {
    var oul = document.getElementsByTagName('ul');
    var oli = document.getElementsByTagName('li');
    for (var i = 0; i < oli.length; i++) {
        oli[i].timer = null;
        oli[i].styleAttr = null;
        if (i % 2 == 0) {
            oli[i].onmouseover = function() {
                startMove(this, 'width', 400);
            };
            oli[i].onmouseout = function() {
                startMove(this, 'width', 200);
            };
            // oli[i].onmouseover = function() {
            //     startMove(this, 'opacity', 100);
            // };
            // oli[i].onmouseout = function() {
            //     startMove(this, 'opacity', 30);
            // }
        } else {
            oli[i].onmouseover = function() {
                startMove(this, 'height', 200);
            };
            oli[i].onmouseout = function() {
                startMove(this, 'height', 100);
            };
        }
    }
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

function startMove(obj, styleAttr, iTarget) {
    clearInterval(obj.timer);
    obj.styleAttr = styleAttr;
    obj.timer = setInterval(function() {
        if (obj.styleAttr == 'opacity') {
            var flag = true;
            var currStyle = Math.round(parseFloat(getStyle(obj, styleAttr)) * 100);
        } else {
            var currStyle = parseInt(getStyle(obj, styleAttr));
        }
        var speed = (iTarget - currStyle) / 8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (currStyle == iTarget) {
            clearInterval(obj.timer);
        } else {
            if (flag) {
                obj.style.filter = 'alpha(opacity:' + currStyle + speed + ')';
                obj.style[styleAttr] = (currStyle + speed) / 100;
            } else {
                obj.style[styleAttr] = currStyle + speed + 'px';
            }
        }
    }, 30);
}
