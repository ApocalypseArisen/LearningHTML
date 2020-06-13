function reFibbonacci(n, c, x1, x2)
{
    if(n == 0) return 0;
    if(n == 1) return 1;
    if(c == n) return x2;
    x1 = x1 + x2;
    return reFibbonacci(n, c + 1, x2, x1);
};

function fibonacci(n)
{   
    if(0 < n && n < 17)
    {
        res = reFibbonacci(n, 1, 0, 1);
        // Console log używa wewnętrzne stdout
        if(n < 8) console.log(res)
        // Console log używa wewnętrznie stderr
        else console.error(res);
    }
};

module.exports = {fibonacci}
