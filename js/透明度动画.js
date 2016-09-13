window.onload = function() {
    var oDiv = document.getElementById('div1');
    oDiv.onmouseover = function() {
        changeAlpha(100);
    }
    oDiv.onmouseout = function() {
        changeAlpha(30);
    }
    var timer = null;
    var alpha = 30;

    function changeAlpha(tar) {
        clearInterval(timer);
        timer = setInterval(function() {
            var speed = 0;
            if (alpha > tar) {
                speed = -10;
            } else {
                // statement
                speed = 10;
            }
            if (alpha == tar) {
                // statement
                clearInterval(timer);
            } else {
                // statement
                alpha += speed;
                oDiv.style.filter = 'alpha(opactiy:' + alpha + ')';
                oDiv.style.opacity = alpha / 100;
            }
        }, 30);
    }
}
