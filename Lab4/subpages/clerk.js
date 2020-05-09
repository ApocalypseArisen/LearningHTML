var time = 500;
var trigered = false;
var id;
var index = 0;
var rand;

onmessage = function(event)
{
    time = (event.data[0] * 10);
    id = event.data[1];
    trigered = true;
    console.log(id + ": recived message..");
}

function mainloop()
{
    rand = Math.floor(Math.random() * 2);
    if(trigered)
    {
        if(index == 10)
        {
            postMessage({res:rand, id:id});
            index = 0;
            trigered = false;
            time = 500;
        }
        else index++;
    }
    setTimeout("mainloop()", time);
}

mainloop();
