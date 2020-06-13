const http = require("http");
const fs = require("fs");
const os = require("os");
const joke = require("one-liner-joke");

const port = 8080

function dateTime()
{
  let date = new Date();
  let day = ("0" + date.getDate()).slice(-2);
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();
  let dt = "Obecna data to: " + day + "/" + month + "/" + year;
  return dt;
}

function cpuInfo()
{
  obj = JSON.stringify(os.cpus());
  return obj;
}

function serverInfo()
{
  var envData = {
    FreeMemory: os.freemem(),
    HomeDirectory: os.homedir(),
    Hostname: os.hostname(),
    Platform: os.platform(),
    TotalMeory: os.totalmem(),
    System: os.type(),
    Uptime: os.uptime()
  }

  obj = JSON.stringify(envData)
  return obj;
}

function tellJoke()
{
  funny = joke.getRandomJoke({'exclude_tags': ['dirty', 'racist', 'marriage']});
  return funny.body;
}

function getData()
{
  try
  {
    let data = fs.readFileSync('./assets/data.json');
    let plan = JSON.parse(data);
    obj = JSON.stringify(plan);
    return obj;
  }
  catch (error)
  {
    console.log(error);
    return "Error";
  }
}

function errorPage(response)
{
  try
  {
    let data = fs.readFileSync('./src/html/error.html');
    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.write(data);  
    response.end();  
  }
  catch (error)
  {
    console.log(error);
    response.end("404 - Nie znaleziono podanej strony");
  }
}

function rootPage(response)
{
  try
  {
    let data = fs.readFileSync('./src/html/index.html');
    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.write(data);  
    response.end();  
  }
  catch (error)
  {
    console.log(error);
    response.end("404 - Index.html nie znaleziony! Błąd plików serwera!");
  }
}

function loadCss(response)
{
  try
  {
    let data = fs.readFileSync('./src/css/design.css');
    response.writeHeader(200, {"Content-Type": "text/css"});  
    response.write(data);  
    response.end();  
  }
  catch (error)
  {
    console.log(error);
    response.end("Nie można załadować plików css");
  }
}

const requestHandler = (request, response) => {
  console.log(request.url)
  switch(request.url)
  {
    case "/": rootPage(response); break;
    case "/ping": response.end("pong"); break;
    case "/datetime": response.end(dateTime()); break;
    case "/cpus": response.end(cpuInfo()); break;
    case "/env": response.end(serverInfo()); break;
    case "/joke": response.end(tellJoke()); break;
    case "/somedata": response.end(getData()); break;
    default:
    { 
      if(request.url.indexOf(".css") != -1) loadCss(response);
      else errorPage(response);
    }
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if(err)
  {
    return console.log("ERROR: Awaria serwera!");
  }

  console.log("Serwer działa na localhost:", port)
})
