var ctx;
var ctx2;
var ctx3;

var pallet;
var ball;
var blocks;

var cx = 0;
var px = 0;

var bx = 0;
var by = 670;

var palletx;

var zx = 1;
var zy = -1;

var launch = false;

function onRelease() 
{
    if(!launch)
    {
        if(cx < px) zx = -1;
        else zx = 1;
        launch = true;
        moveBall();
    }
}

function onMove() 
{
    px = cx;
    cx = event.pageX - pallet.offsetLeft;
    drawPallet();
    if(!launch) drawBall();
}

function moveBall()
{
    setTimeout(function()
    {
        if(bx >= 1395) zx = -zx;
        if(bx <= 5) zx = -zx;

        if(by <= 5) zy = -zy;

        if(by == 675)
        {
            if(bx > palletx && bx < (palletx + 150)) zy = -zy;
        }

        if(by > 700)  endGame();

        bx = bx + zx;
        by = by + zy;
        drawBall(bx, by);
        if(launch)
        {
            moveBall();
        }
    }, 1)
}

function endGame()
{
    launch = false;
    document.getElementById("spacer").style.display = "none";
    document.getElementById("isgame").style.display = "none";
    document.getElementById("nogame").style.display = "block";
    document.getElementById("lost").style.display = "block";
    by = 670;
}

function drawPallet()
{
    xx = cx - 75;
    if(xx < 0) xx = 0;
    if(xx > 1250) xx = 1250;

    palletx = xx;

    ctx.clearRect(0, 0, pallet.width, pallet.height);
    ctx.beginPath();
    ctx.fillRect(xx, 680, 150, 20);
    ctx.fillStyle = "#0088ff";
    ctx.stroke();
}

function drawBall()
{
    if(!launch)
    {
        bx = cx;
        if(bx < 75) bx = 75;
        if(bx > 1325) bx = 1325;
    }    

    ctx2.clearRect(0, 0, ball.width, ball.height);
    ctx2.beginPath();
    ctx2.arc(bx, by, 10, 0, 2 * Math.PI, false);
    ctx2.fillStyle = "white";
    ctx2.strokestyle = "white"
    ctx2.fill();
    ctx2.stroke();
}

function startGame()
{
    document.getElementById("spacer").style.display = "block";
    document.getElementById("isgame").style.display = "block";
    document.getElementById("nogame").style.display = "none";
    document.getElementById("lost").style.display = "none";

    document.getElementById("spacer").style.height = 720 + "px";

    pallet = document.getElementById("pallet");
    ball = document.getElementById("ball");
    blocks = document.getElementById("blocks");

    ctx = pallet.getContext("2d");
    ctx2 = ball.getContext("2d");
    ctx3 = blocks.getContext("2d");

    pallet.addEventListener("mousemove", onMove, false);
    pallet.addEventListener("mouseup", onRelease, false);
}