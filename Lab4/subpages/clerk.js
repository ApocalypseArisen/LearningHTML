var time = 500;
var trigered = false;
var index = 0;
var rand;

onmessage = function(event)
{
    time = event.data;
    trigered = true;
}

function mainloop()
{
    rand = Math.floor(Math.random() * 2);
    if(trigered)
    {
        if(index == 10)
        {
            postMessage(rand);
        }
        else
        {
            index = 0;
            trigered = false;
        }
    }
    setTimeout("mainloop()", 500);
}

mainloop();
