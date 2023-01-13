window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 250;
    var y = 150;
    var coinx = Math.random() * (600-50);
    var coiny = Math.random() * (400-50);
    
    var t = Date.now();
    let speed = 300;
    let dir = 0;
    let score = 0;
    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    up.onmousedown = function() { dir = 4;}
    down.onmousedown = function() { dir = 3;}
    left.onmousedown = function() { dir = 2;}
    right.onmousedown = function() { dir = 1;}
    up.ontouchstart = function() { dir = 4;}
    down.ontouchstart = function() { dir = 3;}
    left.ontouchstart = function() { dir = 2;}
    right.ontouchstart = function() { dir = 1;}
    up.onmouseup = function() { dir = 0;}
    down.onmouseup = function() { dir = 0;}
    left.onmouseup = function() { dir = 0;}
    right.onmouseup = function() { dir = 0;}
    up.ontouchend = function() { dir = 0;}
    down.ontouchend = function() { dir = 0;}
    left.ontouchend = function() { dir = 0;}
    right.ontouchend = function() { dir = 0;}
    function draw() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        context.clearRect(0, 0, 600, 400);
        
        context.font = '25px Arial';
        context.fillStyle = 'black';
        context.fillText("Score: " + score, 20, 30);
        context.beginPath();               //Square
        context.rect(x, y, 100, 100);
        context.fillStyle="red";         
        context.fill();                    //Square
        context.beginPath();               //coin
        context.rect(coinx, coiny, 50, 50);
        context.fillStyle="#e3c228";
        context.fill();                    //coin
        if(dir == 1) { 
            if(x+100 < 600) {
                x += (speed * timePassed);
            }
        }
        else if(dir == 2) { 
            if(x > 0) {
                x -= (speed * timePassed);
            }
        }
        else if(dir == 3) { 
            if(y+100 < 400) {
                y += (speed * timePassed);
            }
        }
        else if(dir == 4) { 
            if(y > 0) {
                y -= (speed * timePassed);
            }
        }
        if (coinx <= x+100 && x <= coinx+50 && coiny <= y+100 && y <= coiny+50) //score
{
            score++;
            coinx = Math.random() * (600-50);
            coiny = Math.random() * (400-50);
        }                                                                      //score
        window.requestAnimationFrame(draw);
    }
    draw();
}
