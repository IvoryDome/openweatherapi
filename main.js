


function pickCity(city) {


    var list = document.getElementById("cityList");
    var city = list.options[list.selectedIndex].value;
    showWeather(city);
}

function showWeather(city) {


    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=cf279d16edfe76b7e78619711144635e",
        function (data) {
            
            console.log(data);

            var name = data.name;
            var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            var temp = (Math.floor(data.main.temp) - 273);
            var weather = data.weather[0].main;
            var pressure = data.main.pressure;
            var humidity = data.main.humidity;
            var windspeed = data.wind.speed;

            // console.log(name);
            // $('#weather').empty();
            $('.name').html(name + " Weather");
            $('.icon').attr('src', icon);
            $('.weather').html(weather);
            $('.temp').html(temp + "°C");
            $('.pressure').html(pressure);
            $('.humidity').html(humidity);
            $('.windspeed').html("Wind speed: " + windspeed + " mph");

            
    

        })
}