A = [];

onmessage = function(event)
{
    A = event.data;
}

function mainloop() 
{
    if(A.length > 0)
    {
        var sum = 0;
        for(let i = 0; i < A.length; i++)
        {
            var temp1 = Math.abs((A[i] * -1) + sum);
            var temp2 = Math.abs((A[i] * 1) + sum);

            if(temp1 < temp2) sum = sum - A[i];
            else sum = sum + A[i];
        }

        postMessage(Math.abs(sum));
        A = [];
    }

    setTimeout("mainloop()", 10);
}

mainloop()