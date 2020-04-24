var created = false;
var clicked = false;
var mode = 0;

var cx = 0;
var cy = 0;
var px = 0;
var py = 0;
var beginx = 0;
var beginy = 0;

var color = "blue"
var ctx;
var ctx2;
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
    cx = event.pageX - canvas.offsetLeft;
    cy = event.pageY - canvas.offsetTop;
    beginx = cx;
    beginy = cy;
    clicked = true;
}
function onRelease() 
{
    clicked = false;
    ctx.drawImage(document.getElementById("temporary"), 0, 0);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
}

function onMove(event)
{
    if(clicked)
    {
        canvas = document.getElementById("picture");
        px = cx;
        py = cy;
        cx = event.pageX - canvas.offsetLeft;
        cy = event.pageY - canvas.offsetTop;
        switch(mode)
        {
            case 0: draw(); break;
            case 1:
            {
                rect(document.getElementById("temporary"))
            } break;
            case 2: circle(document.getElementById("temporary")); break;
            default: draw();
        }
    }
}

function drawMode()
{
    mode = 0;
    document.getElementById("bdraw").className = "potwierdz"
    document.getElementById("brect").className = "wybor"
    document.getElementById("bcircle").className = "wybor"
}

function rectMode()
{
    mode = 1;
    document.getElementById("bdraw").className = "wybor"
    document.getElementById("brect").className = "potwierdz"
    document.getElementById("bcircle").className = "wybor"
}

function circleMode()
{
    mode = 2;
    document.getElementById("bdraw").className = "wybor"
    document.getElementById("brect").className = "wybor"
    document.getElementById("bcircle").className = "potwierdz"
}

function draw()
{
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(cx, cy);
    ctx.strokeStyle = document.getElementById("colorBox").value;
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();
}

function rect(canvas)
{
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.beginPath();
    if(!document.getElementById("fill").checked) ctx2.rect(beginx,beginy,cx - beginx,cy - beginy);
    else ctx2.fillRect(beginx,beginy,cx - beginx,cy - beginy);
    ctx2.fillStyle = document.getElementById("colorBox").value;
    ctx2.strokeStyle = document.getElementById("colorBox").value;
    ctx2.stroke();
}

function circle(canvas)
{
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.beginPath();
    radius = Math.sqrt((beginy - cy) * (beginy - cy) + (beginx - cx) * (beginx - cx))
    newx = (beginx - cx)/2;
    newy = (beginy - cy)/2;
    ctx2.arc(beginx - newx, beginy - newy, radius/2, 0, 2 * Math.PI, false);
    ctx2.fillStyle = document.getElementById("colorBox").value;
    ctx2.strokeStyle = document.getElementById("colorBox").value;
    if(document.getElementById("fill").checked) ctx2.fill();
    ctx2.stroke();
}

function createCanvas()
{
    if(created)
    {
        canvas = document.getElementById("picture");
        temp = document.getElementById("temporary");

        width = document.forms["settings"]["width"].value;
        height = document.forms["settings"]["height"].value;

        if(/^[0-9]+$/.test(width)) 
        {
            canvas.width = width;
            temp.width = width;
        }
        if(/^[0-9]+$/.test(height)) 
        {
            document.getElementById("spacer").style.height = height + "px";
            canvas.height = height;
            temp.height = height;
        }
    }
    else
    {
        document.getElementById("spacer").style.display = "block";
        document.getElementById("setup").style.display = "block";

        canvas = document.getElementById("picture");
        temp = document.getElementById("temporary");
        ctx = canvas.getContext("2d");
        ctx2 = temp.getContext("2d");

        width = document.forms["settings"]["width"].value;
        height = document.forms["settings"]["height"].value;

        canvas.style.display = "block";
        temp.style.display = "block";

        if(/^[0-9]+$/.test(width)) 
        {
            canvas.width = width;
            temp.width = width;
        }
        if(/^[0-9]+$/.test(height)) 
        {
            document.getElementById("spacer").style.height = height + "px";
            canvas.height = height;
            temp.height = height;
        }
        else  document.getElementById("spacer").style.height = 300 + "px";

        temp.addEventListener("mousemove", onMove, false);
        temp.addEventListener("mousedown", onClick, false);
        temp.addEventListener("mouseup", onRelease, false);
        temp.addEventListener("mouseout", onRelease, false);

        document.getElementById("bsize").innerHTML = "Ustaw"
        created = true;
    }
}
