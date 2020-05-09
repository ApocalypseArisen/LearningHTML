var totalPetents;
var totalDeclined;
var totalCurrent;
var maxCurrent;
var line;

var petents = 0;
var declined = 0;
var current = 0;
var limit = 10;

var generator;
 
var clerkA;
var clerkB;
var clerkC;

function generator() 
{
    var thread;
    if(typeof(Worker) !== "undefined")
    {
        thread = new Worker("generator.js");
        thread.onmessage = newPetent(event);
    }
    else failure();
}

function newPetent(event)
{
    console.log("Recived: " + event.data);
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

    limit = document.getElementById("limitBox").value;

    totalPetents = document.getElementById("total");
    totalPetents.innerHTML = petents;

    totalDeclined = document.getElementById("negative");
    totalDeclined.innerHTML = declined;

    totalCurrent = document.getElementById("present");
    totalCurrent = current;

    maxCurrent = document.getElementById("maximum");
    maxCurrent.innerHTML = limit;

    generator();

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
    
}
