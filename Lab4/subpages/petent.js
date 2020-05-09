var clerks;
var origin = -1;
var sent  = false;
var choice = 3;

onmessage = function(event)
{
    clerks = event.data[0];
    origin = event.data[1];
}

function mainloop()
{
    if(origin != -1)
    {
        if(origin == 1 && !sent)
        {
            if(clerks[0] || clerks[1] || clerks[2])
            {
                sent = true;
                if(clerks[0]) choice = 1;
                else if (clerks[1]) choice = 2;
                postMessage(choice);
                
            }
        }
    }
    setTimeout("mainloop()", (500));
}

mainloop();
