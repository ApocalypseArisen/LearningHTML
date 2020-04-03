function animate(statek, i)
{
    left = statek.style.left;
    left = left.replace("px", "");
    value = parseInt(left);
    statek.style.left = value + 10 + "px";
    console.log(i);
}

function startAnimation()
{
    statek = document.getElementById("ship");
    stars = document.getElementById("background");
    statek.style.display = "block";
    var rect = stars.getBoundingClientRect();
    
    statek.style.left = rect.left + 1 + "px";
    statek.style.top = rect.top + 17 + "px";
    statek.style.position = "absolute"
    for(let i = 0; i < 10; i++)
    {
        var test = setTimeout(animate(statek, i),1000);
    }
    //statek.style.left = "400" + "px";
    //statek.style.left = bounds.left;
    
}