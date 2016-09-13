window.onload = function() {
        var oli = document.getElementById('li1');
        oli.onmouseover = function() {
            startMove(oli, 'width', 400, function() {
                startMove(oli, 'height', 200, function() {
                    startMove(oli, 'opacity', 100)
                })
            });
        };
        oli.onmouseout = function() {
            startMove(oli, 'opacity', 30, function() {
                startMove(oli, 'height', 100, function() {
                    startMove(oli, 'width', 200)
                })
            });
        }
    }
