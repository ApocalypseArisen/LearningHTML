var A = [];
var min = 0;

onmessage = function(event)
{
    A = event.data;
}

function mainloop() 
{
    if(A.length > 0)
    {
        min = 0;

        for(let i = 0; i < A.length; i++) min = Math.abs(min + A[i]);
        iterator(A, 1, -A[0]);
        iterator(A, 1, A[0]);

        postMessage(Math.abs(min));
        A = [];
    }

    setTimeout("mainloop()", 10);
}

function iterator(A, index, res)
{
    if(min !=0)
    {
        if(index == A.length)
        {
            if(Math.abs(res) < min)
            {
                min = Math.abs(res);
            }
        }
        else
        {
            iterator(A, index + 1, res - A[index]);
            iterator(A, index + 1, res + A[index]);
        }
    }
}

mainloop()
