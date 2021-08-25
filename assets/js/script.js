var searchBtn = $(".btn");
var city = $("#citySearch");
var city1 = $("#city1");

// Save city into local storage:
searchBtn.click((event) => {
    event.preventDefault();
    localStorage.setItem(city.val(), city.val())

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.val()}&units=imperial&appid=6a6da9ba64b6560cd35736d7ad6021e7`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            $("#city").text(` City: ${data.city.name}`)
            $("#temp").text(` Temperature: ${data.list[0].main.temp} F`)
            $("#wind").text(` Wind Speed: ${data.list[0].wind.speed} MPH`)
            $("#humidity").text(` Humidity: ${data.list[0].main.humidity} %`)
            console.log(data.list[0].main.temp)
            console.log(data.city.name)
            console.log(data.city.coord.lat)
            console.log(data.city.coord.lon)
            for (let i = 0; i <= 41; i += 7) {
                console.log(i)
                $(`#${i}`).text(data.list[i].main.temp)
            }
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&appid=6a6da9ba64b6560cd35736d7ad6021e7`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                    $("#uvIndex").text(` UV Index: ${data.current.uvi}`)

                })

            

        })
})

// load city from local storage and put in recent cities card
var userCity = localStorage.getItem(city)



console.log(userCity)

