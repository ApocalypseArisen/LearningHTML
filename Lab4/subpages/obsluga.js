var totalPetents;
var totalDeclined;
var totalCurrent;
var maxCurrent;

var petents = 0;
var declined = 0;
var current = 0;
var limit = 10;
 
var clerkA;
var clerkB;
var clerkC;

class Petent
{
    constructor(number, time, ticket)
    {
        this.number = number;
        this.time = time;
        this.ticekt = ticket;
    }
}

class Clerk
{
    constructor(letter, isFree)
    {
        this.letter = letter;
        this.isFree = isFree;
    }
}

class Generator
{
    constructor(seed)
    {
        this.seed = seed;
    }

    randNextPetent() {}

    randCaseTime() {}
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
    max.innerHTML = limit;
}
