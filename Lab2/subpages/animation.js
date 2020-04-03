function animate_left(statek, i)
{
    setTimeout(function()
    {
        i++;
        left = statek.style.left;
        left = left.replace("px", "");
        value = parseInt(left);
        statek.style.left = value + 10 + "px";
        if(i == 41)
        {
            statek.src="resources/rocketship2.png";
            animate_right(statek, 0); 
        }
        else animate_left(statek, i);
    }, 100)
}

function animate_right(statek, i)
{
    setTimeout(function()
    {
        i++;
        left = statek.style.left;
        left = left.replace("px", "");
        value = parseInt(left);
        statek.style.left = value - 10 + "px";
        if(i == 41) 
        {
            statek.src="resources/rocketship.gif";
            statek.style.display = "none";
            document.getElementById("start").style.visibility = "visible";
            return;
        }
        else animate_right(statek, i);
    }, 100)
}

function startAnimation()
{
    document.getElementById("start").style.visibility = "hidden";
    statek = document.getElementById("ship");
    stars = document.getElementById("background");
    statek.style.display = "block";
    var rect = stars.getBoundingClientRect();
    
    statek.style.left = rect.left + 1 + "px";
    statek.style.top = rect.top + 17 + "px";
    statek.style.position = "absolute";
    animate_left(statek, 0);   
}