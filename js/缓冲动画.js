window.onload = function() {

    var div0 = document.getElementById('div0');
    var div1 = document.getElementById('div1');
    div1.onmouseover = function() {
        move(0);
    }
    div1.onmouseout = function() {
        move(-250);
    }
    var timer = null;

    function move(tar) {
        clearInterval(timer);
        timer = setInterval(function() {
            var speed = (tar - div0.offsetLeft) / 20;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (div0.offsetLeft == tar) {
                clearInterval(timer);
            } else {
                div0.style.left = div0.offsetLeft + speed + 'px';
            }
        }, 30)
    }

}
