var time;
var petent_time;

function mainloop()
{
    time = Math.floor((Math.random() * 40) + 20);
    petent_time = Math.floor((Math.random() * 30) + 10);

    postMessage(petent_time);
    setTimeout("mainloop()", (time));
}

mainloop();
