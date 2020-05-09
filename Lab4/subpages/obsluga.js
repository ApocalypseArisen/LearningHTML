var totalPetents;
var totalDeclined;
var totalCurrent;
var maxCurrent;
var line;

var stoped = false;

var petents = 0;
var declined = 0;
var current = 0;
var limit = 10;
var totalNumb = 0;

var list = [];

var generator;
 
var clerkA;
var clerkB;
var clerkC;
var clerks = [true, true, true];

class Petent
{
    constructor(thread, time, number)
    {
        this.thread = thread;
        this.time = time;
        this.number = number;
    }
}

function start_generator() 
{
    if(typeof(Worker) !== "undefined")
    {
        generator = new Worker("generator.js");
        generator.onmessage = function(event) { newPetent(event); }
    }
    else failure();
}

function start_petent(time, number, ticket)
{
    var petent
    if(typeof(Worker) !== "undefined")
    {
        petent = new Worker("petent.js");
        var temp = new Petent(petent, (time * 10), number);
        list.push(temp);
        petent.postMessage([clerks, ticket]);
        petent.onmessage = function(event) { caseTaken(event); }
        petent = undefined;
    }
    else failure();
}

function caseTaken(event)
{
    var choice = event.data;
    clerks[choice - 1] = false;
    line.deleteRow(1);
    var petent = list[0];
    current--;
    totalCurrent.innerHTML = current;
    list.splice(0, 1);
    updateList();
    switch(choice)
    {
        case 1: clerkABar(petent.time, petent); break;
        case 2: clerkBBar(petent.time, petent); break;
        case 3: clerkCBar(petent.time, petent); break;
    }
}

function updateList()
{
    for(let i = 0; i < current; i++)
    {
        list[i].thread.postMessage([clerks, i]);
        line.rows[i + 1].cells[0].innerHTML = i + 1;
    }
}

function newPetent(event) 
{
    if(current == limit) declined++;
    else 
    {
        current++;
        totalNumb++;
        var row = line.insertRow(current);
        var cell = row.insertCell(0);
        cell.innerHTML = current;
        cell = row.insertCell(1);
        cell.innerHTML = totalNumb;
        cell = row.insertCell(2);
        cell.innerHTML = event.data.pt + "s"
        start_petent(event.data.pt, totalNumb, current)
    }
    totalCurrent.innerHTML = current;
    totalDeclined.innerHTML = declined;
    generatorBar((event.data.time * 10)); 
}

function clerkFinish(event)
{
    var opis;
    var result = document.getElementById("result")
    var numb = 0;
    var id = event.data.id;
    switch(id)
    {
        case "A": 
        {
            opis = document.getElementById("Alabel")
            numb = 0;
        } break;
        case "B": 
        {
            opis = document.getElementById("Blabel")
            numb = 1;
        } break;
        case "C": 
        {
            opis = document.getElementById("Clabel")
            numb = 2;
        } break;
    }
    if(event.data.res == 0)
    {
        result.innerHTML = "Urzędnik " + id + " rozpatrzył sprawę pomyślnie";
        result.style.color = "#85ba3c"
    }
    else
    {
        result.innerHTML = "Urzędnik " + id + " rozpatrzył sprawę negartywnie";
        result.style.color = "red"
    }
    opis.innerHTML = "jest wolny"; 
    clerks[numb] = true;
    updateList();
    petents++;
    totalPetents.innerHTML = petents;
}

function clerkABar(time, petent)
{
    var bar = document.getElementById("ABar");
    document.getElementById("Alabel").innerHTML = "obsługuje klienta nr. " + petent.number;
    var index = 0;
    clerkA.postMessage([time , "A"]);
    var interval = setInterval(moveBar, time);
    function moveBar()
    {
        index++;
        if(index != 101 && !stoped)
        {   bar.innerHTML = index + "%"
            bar.style.width = index + "%";
        }
        else 
        {
            bar.innerHTML = "";
            bar.style.width = "0%";
            clearInterval(interval);
            petent.thread.terminate();
        }
    }
}

function clerkBBar(time, petent)
{
    var bar = document.getElementById("BBar");
    document.getElementById("Blabel").innerHTML = "obsługuje klienta nr. " + petent.number;
    var index = 0;
    clerkB.postMessage([time, "B"]);
    var interval = setInterval(moveBar, time);
    function moveBar()
    {
        index++;
        if(index != 101 && !stoped)
        {   bar.innerHTML = index + "%"
            bar.style.width = index + "%";
        }
        else 
        {
            bar.innerHTML = "";
            bar.style.width = "0%";
            clearInterval(interval);
            petent.thread.terminate();
        }
    }
}

function clerkCBar(time, petent)
{
    var bar = document.getElementById("CBar");
    document.getElementById("Clabel").innerHTML = "obsługuje klienta nr. " + petent.number;
    var index = 0;
    clerkC.postMessage([time, "C"]);
    var interval = setInterval(moveBar, time);
    function moveBar()
    {
        index++;
        if(index != 101 && !stoped)
        {   bar.innerHTML = index + "%"
            bar.style.width = index + "%";
        }
        else 
        {
            bar.innerHTML = "";
            bar.style.width = "0%";
            clearInterval(interval);
            petent.thread.terminate();
        }
    }
}

function generatorBar(time)
{
    var index = 0;
    var bar = document.getElementById("genBar");
    var interval = setInterval(moveBar, time);
    function moveBar()
    {
        index++;
        if(index != 101 && !stoped)
        {   bar.innerHTML = index + "%"
            bar.style.width = index + "%";
        }
        else clearInterval(interval);
    }
}

function failure() 
{
    document.getElementById("simulation").innerHTML = "Sorry! Your browser does not support JS Workers!"
    console.log("Your browser does not support JS Workers");  
}

function beginSimulation()
{
    line = document.getElementById("linetable");

    document.getElementById("setup").style.display = "none";
    document.getElementById("siminfo").style.display = "block";
    document.getElementById("simulation").style.display = "block";
    document.getElementById("bcontainer").style.display = "block";
    document.getElementById("infoBar").style.display = "block"

    limit = document.getElementById("limitBox").value;

    totalPetents = document.getElementById("total");
    totalPetents.innerHTML = petents;

    totalDeclined = document.getElementById("negative");
    totalDeclined.innerHTML = declined;

    totalCurrent = document.getElementById("present");
    totalCurrent.innerHTML = current;

    maxCurrent = document.getElementById("maximum");
    maxCurrent.innerHTML = limit;

    if(typeof(Worker) !== "undefined")
    {
        clerkA = new Worker("clerk.js");
        clerkA.onmessage = function(event) { clerkFinish(event); }
        clerkB = new Worker("clerk.js");
        clerkB.onmessage = function(event) { clerkFinish(event); }
        clerkC = new Worker("clerk.js");
        clerkC.onmessage = function(event) { clerkFinish(event); }
    }
    else
    {
        failure();
        return;
    }

    start_generator();
}

function stopSimulation() 
{
    if(!stoped)
    {
        document.getElementById("ssim").innerHTML = "Restart";
        generator.terminate();

        for(let i = 0; i < current; i++)
        {
            list[i].thread.terminate();
        }

        clerkA.terminate();
        clerkB.terminate();
        clerkC.terminate();

        stoped = true;
    }
    else beginSimulation();
}

