//window.onload = function() {this.onCreate()}

var created = false;
var clicked = false;

var cx = 0;
var cy = 0;
var px = 0;
var py = 0;

var color = "blue"
var ctx;
var canvas;

function onCreate()
{
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.forms["settings"]["width"].value = w - 40;
    document.forms["settings"]["height"].value = h - 300;
}

function onClick() 
{
    canvas = document.getElementById("picture");
    px = cx;
    py = cy;
    cx = event.clientX - canvas.offsetLeft;
    cy = event.clientY - canvas.offsetTop;
    clicked = true;
}
function onRelease() {clicked = false;}

function onMove(event)
{
    if(clicked)
    {
        canvas = document.getElementById("picture");
        px = cx;
        py = cy;
        cx = event.clientX - canvas.offsetLeft;
        cy = event.clientY - canvas.offsetTop;
        draw();
    }
}

function draw()
{
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(cx, cy);
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();
}

function createCanvas()
{
    if(created)
    {
        var canvas = document.getElementById("picture");

        width = document.forms["settings"]["width"].value;
        height = document.forms["settings"]["height"].value;

        if(/^[0-9]+$/.test(width)) canvas.width = width;
        if(/^[0-9]+$/.test(height)) canvas.height = height;
    }
    else
    {
        document.getElementById("setup").style.display = "block";

        canvas = document.getElementById("picture");
        ctx = canvas.getContext("2d");

        width = document.forms["settings"]["width"].value;
        height = document.forms["settings"]["height"].value;

        canvas.style.display = "block";

        if(/^[0-9]+$/.test(width)) canvas.width = width;
        if(/^[0-9]+$/.test(height)) canvas.height = height;

        canvas.addEventListener("mousemove", onMove, false);
        canvas.addEventListener("mousedown", onClick, false);
        canvas.addEventListener("mouseup", onRelease, false);
        canvas.addEventListener("mouseout", onRelease, false);

        document.getElementById("bsize").innerHTML = "Ustaw"
        created = true;
    }
}
