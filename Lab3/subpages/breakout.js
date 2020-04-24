var ctx;
var ctx2;
var ctx3;

var pallet;
var ball;
var blocks;

var cx = 0;

var released = false;

function onRelease() {}

function onMove() 
{
    cx = event.pageX - pallet.offsetLeft;
    drawPallet();
    if(!released) drawBall;
}

function drawPallet()
{
    xx = cx - 75;
    if(xx < 0) xx = 0;
    if(xx > 1250) xx = 1250;

    ctx.clearRect(0, 0, pallet.width, pallet.height);
    ctx.beginPath();
    ctx.fillRect(xx, 680, 150, 20);
    ctx.fillStyle = "#0088ff";
    ctx.stroke();
}

function drawBall()
{
    xx = cx - 75;
    if(xx < 0) xx = 0;
    if(xx > 1250) xx = 1250;

    ctx2.clearRect(0, 0, ball.width, ball.height);
    ctx2.beginPath();
    ctx2.arc(xx, 100, 50, 0, 2 * Math.PI, false);
    ctx2.fillStyle = "white";
    ctx2.fill();
    ctx2.stroke();
}

function startGame()
{
    document.getElementById("spacer").style.display = "block";
    document.getElementById("isgame").style.display = "block";
    document.getElementById("nogame").style.display = "none";

    document.getElementById("spacer").style.height = 1000 + "px";

    pallet = document.getElementById("pallet");
    ball = document.getElementById("ball");
    blocks = document.getElementById("blocks");

    ctx = pallet.getContext("2d");
    ctx2 = ball.getContext("2d");
    ctx3 = blocks.getContext("2d");

    pallet.addEventListener("mousemove", onMove, false);
    pallet.addEventListener("mouseup", onRelease, false);
}