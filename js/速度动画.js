window.onload = function() {
    var btn = document.getElementById('btn');
    var odiv = document.getElementById('container');
    btn.onmouseover = function() {
        move(0);
    }
    btn.onmouseout = function() {
        move(-200);
    }

    var timer = null;
    function move(tar) {
        clearInterval(timer);
        var speed = 0;
        if (odiv.offsetLeft > tar) {
            speed = -10;
        } else {
            speed = 10;
        }
        timer = setInterval(function() {
            if (odiv.offsetLeft == tar) {
                clearInterval(timer);
            } else {
                odiv.style.left = odiv.offsetLeft + speed + 'px';
            }
        }, 30)
    }
}
