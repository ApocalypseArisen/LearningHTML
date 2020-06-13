var math = require('./math');

var args = process.argv.slice(2);
arg = args[0];

if(!isNaN(arg) && arg !== null) math.fibonacci(arg);
else console.log("Błędne dane");

process.exitCode = 1;
