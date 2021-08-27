var searchBtn = $(".btn");
var city = $("#citySearch");
var city1 = $("#city1");
var recentCities = $("#recentCities");
var test = $("#test");




function getWeather(city){
    
    console.log(city)
     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=6a6da9ba64b6560cd35736d7ad6021e7`)
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
                console.log(i);
                var link = $("<img>");
                link.attr("src", `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`);
                link.text("icon");
                link.addClass("link");
                $(`#${i}`).html(link);
                $(`#${i}`).append(`<p>Temp: ${data.list[i].main.temp} F`);
                $(`#${i}`).append(`<p>Wind: ${data.list[i].wind.speed} MPH`);
                $(`#${i}`).append(`<p>Humidity: ${data.list[i].main.humidity} %`);

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
}

// Save city into local storage:
searchBtn.click((event) => {
    event.preventDefault();
    console.log(city.val())
    localStorage.setItem(city.val(), city.val())

    

    getWeather(city.val())
    test.text("");
    for (let i = 0; i < allStorage().length; i++) {
        // console.log(allStorage()[i])
        var currentCity = allStorage()[i]
        var recentCities = $(`<button class="prevCity flex-row justify-space-between align-center p-2 bg-light text-dark" onClick= "${getWeather(currentCity)}"</button>`);
      recentCities.text(allStorage()[i]);
      test.append(recentCities);
    }
    

    })


    function allStorage() {

        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
    
        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
        }
    
        return values;
    }



for (let i = 0; i < allStorage().length; i++) {
    var currentCity = allStorage()[i]
    var recentCities = $(`<button class="prevCity flex-row justify-space-between align-center p-2 bg-light text-dark" onClick= "${getWeather(currentCity)}"</button>`);
  recentCities.text(allStorage()[i]);
  test.append(recentCities);
}
