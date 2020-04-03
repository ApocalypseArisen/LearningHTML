function timer(sec)
{
    return new Promise(r => setTimeout(r, sec));
}

function changeGate()
{
    document.getElementById("img1").src = "https://i0.wp.com/www.jasonmomoanews.com/wp-content/uploads/2018/02/21a0bdac01d4142e09de87788d525edd-1.jpg?fit=514%2C768&ssl=1";
    timer(2000);
    document.getElementById("img1").src = "https://1.bp.blogspot.com/-P9Gfi8JAZU4/V4d_vha1ZwI/AAAAAAAAV8Y/7R3Iax-jc6cYPI6H2iCGD_DCvIqKG87DQCLcB/s1600/Stargate%2BUniverse.jpg";
}

function changeWars()
{
    document.getElementById("img2").src = "https://image.ceneostatic.pl/data/products/82493060/i-star-wars-the-last-jedi-gwiezdne-wojny-ostatni-jedi-dvd.jpg";
    document.getElementById("img2").src = "https://cnet2.cbsistatic.com/img/gI444M8w0xqTtd8wJx-IqbsDnNk=/940x0/2020/03/17/e570d0a1-f9da-4d97-817a-4b38f8585ad8/91akia8rwal.jpg";
}

function changeTrek()
{
    document.getElementById("img3").src = "https://images-na.ssl-images-amazon.com/images/I/81JYfU4b3eL._SY550_.jpg";
    document.getElementById("img3").src = "https://m.media-amazon.com/images/M/MV5BMGYwMjA5Y2YtYTQ3ZS00OWY1LWJjZjAtYTRjY2FiZTI5MzlmXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg";
}