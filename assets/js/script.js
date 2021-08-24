var searchBtn = $(".btn");
var city = $("#citySearch");
var city1 = $("#city1");

// Save city into local storage:
searchBtn.click(() => {   
    localStorage.setItem("city" , city.val());
})


// load city from local storage and put in recent cities card
var userCity = localStorage.getItem("city")


console.log(userCity)


fetch("https://api.openweathermap.org/data/2.5/weather?q=pasadena&appid=6a6da9ba64b6560cd35736d7ad6021e7")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })