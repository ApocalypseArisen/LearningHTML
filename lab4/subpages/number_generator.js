var number;

function mainloop()
{
    number = Math.floor((Math.random() * 1000) - 500);
    postMessage(number);
    setTimeout("mainloop()", 10);
}

mainloop();
