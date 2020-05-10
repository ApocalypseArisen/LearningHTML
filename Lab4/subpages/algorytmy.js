var tab = [];
var created = 0;
var size = 0;
var generator;
var calculator;
var ready = false;

function calculateTask()
{
    var index = document.forms["selectTask"]["index"].value;
    var link  = document.getElementById("taskLink");
    var error = document.getElementById("error");

    if(/^[0-9]+$/.test(index)) 
    {
        error.innerHTML = "";
        task = index % 5;
        switch(task)
        {
            case 0:
            {
                link.innerHTML = "Flood depth"
                link.href = "https://app.codility.com/programmers/lessons/90-tasks_from_indeed_prime_2015_challenge/flood_depth/";

            } break;
            case 1:
            {
                link.innerHTML = "Min abs sum"
                link.href = "https://app.codility.com/programmers/lessons/17-dynamic_programming/min_abs_sum/";
                
            } break;
            case 2:
            {
                link.innerHTML = "Dwarfs rafting"
                link.href = "https://app.codility.com/programmers/lessons/91-tasks_from_indeed_prime_2016_challenge/dwarfs_rafting/";
                
            } break;
            case 3:
            {
                link.innerHTML = "Hinert maze"
                link.href = "https://app.codility.com/programmers/lessons/91-tasks_from_indeed_prime_2016_challenge/hilbert_maze/";
                
            } break;
            case 4:
            {
                link.innerHTML = "Tree product"
                link.href = "https://app.codility.com/programmers/lessons/91-tasks_from_indeed_prime_2016_challenge/tree_product/";
                
            } break;
        }
    }
    else
    {
        link.innerHTML = "";
        link.href = "";
        error.innerHTML = "Błąd! Index musi być podany jako liczba."
    }
}

function addTable(event)
{
    created++;
    if(created == size) 
    {
        generator.terminate();
        generator = undefined;
        document.getElementById("startButton").style.background = "#85ba3c";
        ready = true;
        created--;
    }
    else
    {
        var row = document.getElementById("valueTable").insertRow(created);
        var cell = row.insertCell(0);
        cell.innerHTML = created;
        cell = row.insertCell(1);
        cell.innerHTML = event.data;
        tab.push(event.data);
    }
}

function randomTable()
{
    tab = [];
    created = 0;
    ready = false;
    var data = document.forms["enterValues"]["size"].value;
    if(/^[0-9]+$/.test(data)) 
    {
        if(typeof(Worker) !== "undefined")
        {
            size = parseInt(data, 10) + 1;
            document.getElementById("startButton").style.background = "red";
            document.getElementById("error2").innerHTML = "";
            document.getElementById("data").style.display = "none";
            document.getElementById("presentData").style.display = "block";

            generator = new Worker("number_generator.js");
            generator.onmessage = function(event) { addTable(event); }
        }
    }
    else
    {
        document.getElementById("error2").innerHTML = "Rozmiar tablicy musi być liczbą!";
    }
}

function addManual()
{
    var input = document.forms["enterNumber"]["number"].value;
    if(/^[0-9]+$/.test(input))
    {
        document.getElementById("error3").innerHTML = "";
        created++;
        var row = document.getElementById("valueTable").insertRow(created);
        var cell = row.insertCell(0);
        cell.innerHTML = created;
        cell = row.insertCell(1);
        cell.innerHTML = input;
        tab.push(input);
        if(created == size)
        {
            document.getElementById("startButton").style.background = "#85ba3c";
            document.getElementById("manual").style.display = "none";
            ready = true;
        }
    }
    else
    {
        document.getElementById("error3").innerHTML = "Wartości w tablicy muszą być liczbami!";
    } 
}

function manualTable()
{
    tab = [];
    created = 0;
    ready = false;
    var data = document.forms["enterValues"]["size"].value;
    if(/^[0-9]+$/.test(data)) 
    {
        size = data;
        document.getElementById("startButton").style.background = "red";
        document.getElementById("error2").innerHTML = "";
        document.getElementById("data").style.display = "none";
        document.getElementById("presentData").style.display = "block";
        document.getElementById("manual").style.display = "block";
    }
    else
    {
        document.getElementById("error2").innerHTML = "Rozmiar tablicy musi być liczbą!";
    }
}

function getResult(event)
{
    iText = document.getElementById("infoText");
    iText.style.color = "#85ba3c";
    iText.innerHTML = "Wynik to: " + event.data;
    calculator.terminate();
    calculator = undefined;
}

function calculateMinMax()
{
    if(ready)
    {
        iText = document.getElementById("infoText");
        document.getElementById("presentData").style.display = "none";
        document.getElementById("task").style.display = "block";
        if(typeof(Worker) !== "undefined")
        {
            iText.style.color = "white";
            iText.innerHTML = "Obliczanie zadania....";
            calculator = new Worker("absMinMax.js");
            calculator.postMessage(tab)
            calculator.onmessage = function(event) { getResult(event); }
        }
        else
        {
            iText.style.color = "red";
            iText.innerHTML = "ERROR: W tej przeglądarce nie można uruchomić workerów!";
        }
    }
}

function resetTask()
{
    document.getElementById("task").style.display = "none";
    document.getElementById("data").style.display = "block";

    var table = document.getElementById("valueTable");

    for(let i=0; i<created; i++)
    {
        table.deleteRow(1);
    }
}
