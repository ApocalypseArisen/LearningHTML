
function calculateTask()
{
    var index = document.forms["selectTask"]["index"].value;
    var link  = document.getElementById("taskLink");
    var error = document.getElementById("error");

    if(/^[0-9]+$/.test(index)) 
    {
        error.innerHTML = "";
        task = index % 5;
        switch(task)
        {
            case 0:
            {
                link.innerHTML = "Flood depth"
                link.href = "https://app.codility.com/programmers/lessons/90-tasks_from_indeed_prime_2015_challenge/flood_depth/";

            } break;
            case 1:
            {
                link.innerHTML = "Min abs sum"
                link.href = "https://app.codility.com/programmers/lessons/17-dynamic_programming/min_abs_sum/";
                
            } break;
            case 2:
            {
                link.innerHTML = "Dwarfs rafting"
                link.href = "https://app.codility.com/programmers/lessons/91-tasks_from_indeed_prime_2016_challenge/dwarfs_rafting/";
                
            } break;
            case 3:
            {
                link.innerHTML = "Hinert maze"
                link.href = "https://app.codility.com/programmers/lessons/91-tasks_from_indeed_prime_2016_challenge/hilbert_maze/";
                
            } break;
            case 4:
            {
                link.innerHTML = "Tree product"
                link.href = "https://app.codility.com/programmers/lessons/91-tasks_from_indeed_prime_2016_challenge/tree_product/";
                
            } break;
        }
    }
    else
    {
        link.innerHTML = "";
        link.href = "";
        error.innerHTML = "Błąd! Index musi być podany jako liczba."
    }
}
