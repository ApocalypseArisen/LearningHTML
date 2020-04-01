function validateForm() 
{
    document.getElementById("info1").style.display = "none"
    document.getElementById("info2").style.display = "none"
    document.getElementById("info3").style.display = "none"
    document.getElementById("info4").style.display = "none"
    document.getElementById("info5").style.display = "none"
    document.getElementById("info6").style.display = "none"
    document.getElementById("info7").style.display = "none"
    document.getElementById("info8").style.display = "none"
    var mistake = false;
    var name = document.forms["przyklad"]["imie"].value;
    var surname = document.forms["przyklad"]["nazwisko"].value;
    var phone = document.forms["przyklad"]["phone"].value;
    var date = document.forms["przyklad"]["date"].value;
    var mail = document.forms["przyklad"]["mail"].value;
    var login = document.forms["przyklad"]["login"].value;
    var password = document.forms["przyklad"]["pass"].value;
    var password2 = document.forms["przyklad"]["pass2"].value;

    if (name == "") 
    {
        mistake = true;
        document.getElementById("info1").style.display = "block"
        document.getElementById("info1").innerHTML = "Imie musi być niepuste!";        
    }
    else
    {
        if (!/^[a-zA-Z]+$/.test(name)) 
        {
            mistake = true;
            document.getElementById("info1").style.display = "block"
            document.getElementById("info1").innerHTML = "Imie musi być niepuste i zawierać same litery!";
        }
    }
    if (surname == "")
    {
        mistake = true;
        document.getElementById("info2").style.display = "block"
        document.getElementById("info2").innerHTML = "Nazwisko musi być niepuste!";
    }
    else
    {
        if (!/^[a-zA-Z]+$/.test(surname)) 
        {
            mistake = true;
            document.getElementById("info2").style.display = "block"
            document.getElementById("info2").innerHTML = "Nazwisko musi zawierać same litery!";
        }
    }

    if (phone.length == 12)
    {
        if(phone.charAt(0) == "+")
        {
            phone = phone.replace("+", "")
            if(!/^[0-9]+$/.test(phone)) 
            {
                mistake = true;
                document.getElementById("info3").style.display = "block"
                document.getElementById("info3").innerHTML = "Numer może zawierać tylko cyfry";
            }
        }
        else 
        {
            mistake = true;
            document.getElementById("info3").style.display = "block"
            document.getElementById("info3").innerHTML = "Numer musi zaczynac się od znaku +";
        }
    }
    else
    {
        mistake = true;
        document.getElementById("info3").style.display = "block"
        document.getElementById("info3").innerHTML = "Numer telefonu musi byc wprowadzony w standardzie Europejskim!";
    }

    if (date.length == 10)
    {
        if (date.charAt(2) == "." && date.charAt(5) == ".")
        {            
            var frag = date.split(".")
            console.log(frag[0]);
            console.log(frag[1]);
            console.log(frag[2]);
        }
        else 
        {
            mistake = true;
            document.getElementById("info4").style.display = "block"
            document.getElementById("info4").innerHTML = "Proszę użyć " + "." + " do podziału!";
        }
    }
    else 
    {
        mistake = true;
        document.getElementById("info4").style.display = "block"
        document.getElementById("info4").innerHTML = "Błędny format daty!";
    }

    if(mail.includes("@"))
    {
        for(let i = (mail.length - 1); i > 0; i--)
        {
            if(mail.charAt(i) == ".") break;
            else if(mail.charAt(i) == "@")
            {
                mistake = true;
                document.getElementById("info5").style.display = "block"
                document.getElementById("info5").innerHTML = "Adres e-mail musi kończyć się .pl/.com!";
                break;
            }
        }
    }
    else 
    {
        mistake = true;
        document.getElementById("info5").style.display = "block"
        document.getElementById("info5").innerHTML = "Adres e-mail musi zawierać @!";
    }

    if (login == "") 
    {
        mistake = true;
        document.getElementById("info6").style.display = "block"
        document.getElementById("info6").innerHTML = "Login nie moze być pusty!";
    }
    else
    {
        if (!/^[a-z]+$/.test(login)) 
        {
            mistake = true;
            document.getElementById("info6").style.display = "block"
            document.getElementById("info6").innerHTML = "Login może mieć tylko małe litery!";
        }
    }

    if(password != "")
    {
        if(password != password2) 
        {
            mistake = true;
            document.getElementById("info7").style.display = "block"
            document.getElementById("info8").style.display = "block"
            document.getElementById("info7").innerHTML = "Hasła muszą być takie same!";
            document.getElementById("info8").innerHTML = "Hasła muszą być takie same!";
        }
    }
    else
    {
        mistake = true;
        document.getElementById("info7").style.display = "block"
        document.getElementById("info8").style.display = "block"
        document.getElementById("info7").innerHTML = "Hasło nie może być puste!";
        document.getElementById("info8").innerHTML = "Hasło nie może być puste!";
    }

    if (!mistake) 
    {
        document.getElementById("task").style.display = "none"
        document.getElementById("tab1").innerHTML = name;
        document.getElementById("tab2").innerHTML = surname;
        document.getElementById("tab3").innerHTML = phone;
        document.getElementById("tab4").innerHTML = date;
        document.getElementById("tab5").innerHTML = mail;
        document.getElementById("tab6").innerHTML = login;
        document.getElementById("tab7").innerHTML = password;
        document.getElementById("tabela").style.display = "block"
    }
}

function restoreForm()
{
    document.getElementById("tabela").style.display = "none"
    document.forms["przyklad"]["imie"].value = "";
    document.forms["przyklad"]["nazwisko"].value = "";
    document.forms["przyklad"]["phone"].value = "+";
    document.forms["przyklad"]["date"].value = "";
    document.forms["przyklad"]["mail"].value = "";
    document.forms["przyklad"]["login"].value = "";
    document.forms["przyklad"]["pass"].value = "";
    document.forms["przyklad"]["pass2"].value = "";
    document.getElementById("task").style.display = "block"
}
