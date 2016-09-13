window.onload = function() {
        var oli = document.getElementById('li1');
        oli.onmouseover = function() {
            startMove(oli, {'width' : 400, 'height' : 200, 'opacity' : 100});
        };
        oli.onmouseout = function() {
            startMove(oli, {'width' : 200, 'height' : 100, 'opacity' : 30});
        }
    }
