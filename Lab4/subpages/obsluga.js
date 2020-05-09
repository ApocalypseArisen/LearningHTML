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

var generator;
 
var clerkA;
var clerkB;
var clerkC;

function start_generator() 
{
    if(typeof(Worker) !== "undefined")
    {
        generator = new Worker("generator.js");
        generator.onmessage = function(event) { newPetent(event); }
    }
    else failure();
}

function start_petent()
{

}

function newPetent(event) 
{
    if(current == 10) declined++;
    else 
    {
        current++;
        totalNumb++;
        line = document.getElementById("linetable")
        var row = line.insertRow(current);
        var cell = row.insertCell(0);
        cell.innerHTML = current;
        cell = row.insertCell(1);
        cell.innerHTML = totalNumb;
        cell = row.insertCell(2);
        cell.innerHTML = event.data.pt + "s"
    }
    totalCurrent.innerHTML = current;
    totalDeclined.innerHTML = declined;
    generatorBar((event.data.time * 10));
    console.log("Recived: " + event.data.pt);  
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

    start_generator();

    /*REFERENCE !!!!!!!DO NOT REMOVE!!!!!!!!
    line = document.getElementById("linetable");
    line.insertRow(0);
    row = line.rows[0]
    row.insertCell(0);
    cell = row.cells[0];
    cell.innerHTML = "TEST";*/
}

function stopSimulation() 
{
    if(!stoped)
    {
        document.getElementById("ssim").innerHTML = "Restart";
        generator.terminate();
        stoped = true;
    }
}

