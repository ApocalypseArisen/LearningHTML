const axios = require('axios').default;

function axTest()
{   
    axios.get("https://jsonplaceholder.typicode.com/users/1").then(function(response)
    {
        console.log("Id: " +  response.data.id);
        console.log("Imie: " +  response.data.name);
        console.log("Nazwa użytkownika: " +  response.data.username);
        console.log("Telefon: " +  response.data.phone);
        console.log("E-mail:  " +  response.data.email);
        console.log("Strona: " +  response.data.website + "\n");
        console.log("Adres:  " +  response.data.address.city + ", " + response.data.address.street + " " + response.data.address.suite + ", " + response.data.address.zipcode);
        console.log("Współrzędne:  " +  response.data.address.geo.lat + ", " + response.data.address.geo.lng + "\n");
        console.log("Firma: " + response.data.company.name)
        console.log(response.data.company.catchPhrase + "!")
        console.log(response.data.company.bs)
    })
};

module.exports = {axTest}
