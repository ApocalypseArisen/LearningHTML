function validateForm() 
{
    var phone_error = null;
    var name = document.forms["przyklad"]["imie"].value;
    var surname = document.forms["przyklad"]["nazwisko"].value;
    var phone = document.forms["przyklad"]["phone"].value;
    var date = document.forms["przyklad"]["data"].value;
    var email = document.forms["przyklad"]["mail"].value;
    var login = document.forms["przyklad"]["login"].value;
    var password = document.forms["przyklad"]["pass"].value;
    var password2 = document.forms["przyklad"]["pass2"].value;
    if (!/^[a-zA-Z]+$/.test(name) || name == "") alert("Imie musi być niepuste i zawierać same litery!");
    if (!/^[a-zA-Z]+$/.test(surname) || surname == "") alert("Nazwisko musi być niepuste i zawierać same litery!");
    if (length(phone) == 12)
    {
        if(phone.charAt(0) == "+")
        {
            if(!/^[0-9]+$/.test(str)) phone_error = 1;
        }
        else phone_error = 1;
    }
    else phone_error = 1;
    if(phone_error) alert("Numer telefonu musi być wprowadzony w formacie międzynarodowym")
}