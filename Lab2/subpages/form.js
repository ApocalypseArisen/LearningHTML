function calculate()
{
    document.getElementById("info1").style.display = "none"
    document.getElementById("info2").style.display = "none"
    document.getElementById("info3").style.display = "none"

    var mistake = false;

    var a = document.getElementById("Avalue").value;
    var b = document.getElementById("Bvalue").value;
    var c = document.getElementById("Cvalue").value;
    var mark1 = document.getElementById("znak1").value;
    var mark2 = document.getElementById("znak2").value

    if(a == "") 
    {
        mistake = true;
        document.getElementById("info1").style.display = "block"
        document.getElementById("info1").innerHTML = "Wartość A nie może być pusta!";
    }
    else
    {
        if(!/^[0-9]+$/.test(a)) 
        {
            mistake = true;
            document.getElementById("info1").style.display = "block"
            document.getElementById("info1").innerHTML = "Wartość A musi być liczbą!";
        }
        else
        {
            if(Number(a) == 0)
            {
                mistake = true;
                document.getElementById("info1").style.display = "block"
                document.getElementById("info1").innerHTML = "Wartość A nie może być 0!";
            }
        }
    }
    if(b == "") 
    {
        mistake = true;
        document.getElementById("info2").style.display = "block"
        document.getElementById("info2").innerHTML = "Wartość B nie może być pusta!";
    }
    else
    {
        if(!/^[0-9]+$/.test(b)) 
        {
            mistake = true;
            document.getElementById("info2").style.display = "block"
            document.getElementById("info2").innerHTML = "Wartość B musi być liczbą!";
        }
    }
    if(c == "") 
    {
        mistake = true;
        document.getElementById("info3").style.display = "block"
        document.getElementById("info3").innerHTML = "Wartość C nie może być pusta!";
    }
    else
    {
        if(!/^[0-9]+$/.test(c)) 
        {
            mistake = true;
            document.getElementById("info3").style.display = "block"
            document.getElementById("info3").innerHTML = "Wartość C musi być liczbą!";
        }
    }

    if(!mistake)
    {
        document.getElementById("task").style.display = "none"
        document.getElementById("tabela").style.display = "block"

        aa = Number(a);
        bb = Number(b);
        cc = Number(c);
        if(mark1 == "-") bb = -bb;
        if(mark2 == "-") cc = -cc;
        
        delta = (bb*bb) - (4*aa*cc);

        if(delta < 0)
        {
            document.getElementById("wynik").innerHTML = "Dla podanych parametrów równanie " + a  + "x<sup>2</sup> " + mark1 + " " + b + "x " + mark2 + " " + c + " = 0 nie ma rozwiązań.";
        }
        else if(delta == 0)
        {
            s1 = (-bb)/(2*aa);
            document.getElementById("wynik").innerHTML = "Dla podanych parametrów równania " + a  + "x<sup>2</sup> " + mark1 + " " + b + "x " + mark2 + " " + c + " = 0 znaleziono jedno rozwiązanie: " + s1;
        }
        else
        {
            root = Math.sqrt(delta);
            s1 = ((-bb) - root)/(2*aa)
            s2 = ((-bb) + root)/(2*aa)
            document.getElementById("wynik").innerHTML = "Dla podanych parametrów równania " + a  + "x<sup>2</sup> " + mark1 + " " + b + "x " + mark2 + " " + c + " = 0 znalezione rozwiązania to: " + s1 + " oraz: " + s2;
        }
    }
}

function reset()
{
    document.getElementById("tabela").style.display = "none"
    document.getElementById("Avalue").value = 1;
    document.getElementById("Bvalue").value = 0;
    document.getElementById("Cvalue").value = 0;
    document.getElementById("task").style.display = "block"
}