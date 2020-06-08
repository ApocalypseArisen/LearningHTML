var begin = false;
var borg = false;
var border1 = null;
var border2 = null;
var border3 = null;
ship = null;

function startGame()
{
    ship = document.getElementById("starship");
    if(!begin)
    {
        document.getElementById("gamespace").innerHTML = "0";
        document.getElementById("gamespace").style.color = "#85ba3c";
        window.scrollTo(0, 200);
        field = document.getElementById("gamespace");
        ship.style.display = "block";
        ship.src="resources/game2.png";
        var rect = field.getBoundingClientRect();
        ship.style.width = "80px";
        ship.style.height = "80px"
        ship.style.left = rect.left + window.innerWidth/2 - 40 + "px";
        border1 = rect.top + 200;
        border2 = border1 + 500;
        border3 = window.innerWidth;
        ship.style.top = rect.top + 430 + "px";
        begin = true;
        borg = true;
        document.getElementById("start").innerHTML = "Stop";
        loop();
        change_ship();
    }
    else
    {
        begin = false;
        document.getElementById("start").innerHTML = "Start";
        ship.style.display = "none";
    }
}

function loop()
{
    setTimeout(function()
    {
        if(begin)
        {    
            left = ship.style.left;
            left = left.replace("px", "");
            left = parseInt(left);
            up = ship.style.top;
            up = up.replace("px", "");
            up = parseInt(up);
            console.log("Left: ")
            var move =  Math.floor((Math.random() * 4) + 1);
            if(move == 1 && left < (border3 - 10)) ship.style.left = left + 10 + "px";
            if(move == 2 && left > 0) ship.style.left = left - 10 + "px";
            if(move == 3 && up < border2) ship.style.top = up + 10 + "px";
            if(move == 4 && up > border1) ship.style.top = up - 10 + "px";
            loop();
        }
        else return;
    }, 50)
}

function change_ship()
{
    setTimeout(function()
    {
        if(begin)
        { 
            var ent =  Math.floor((Math.random() * 8) + 1);
            if(ent == 1)
            {
                ship.src="resources/game1.png";
                borg = false;
            }
            else 
            {
                ship.src="resources/game2.png";        
                borg = true;
            }
            change_ship();
        }
        else return;
    }, 500)
}

function checkPoints()
{
    if(borg)
    {
        var points = document.getElementById("gamespace").innerHTML;
        points = parseInt(points);
        points = points + 10;
        document.getElementById("gamespace").innerHTML = points;
    }
    else
    {
        document.getElementById("gamespace").innerHTML = "O nie! Trafiłeś Enterprise! Koniec Gry!";
        document.getElementById("gamespace").style.color = "red";
        startGame();
    }
}