




function pickCity(city) {
    var list = document.getElementById("cityList");
    var city = list.options[list.selectedIndex].value;
    showWeather(city);

}




function showWeather(city) {




    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=cf279d16edfe76b7e78619711144635e",
        function (data) {

            document.getElementById('mapid').innerHTML = '';

            console.log(data);

            var name = data.name;
            var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            var temp = (Math.floor(data.main.temp) - 273);
            var weather = data.weather[0].main;
            var pressure = data.main.pressure;
            var humidity = data.main.humidity;
            var tempmin = (Math.floor(data.main.temp_min) - 273);
            var tempmax = (Math.floor(data.main.temp_max) - 273);
            var windspeed = data.wind.speed;
            var lat = data.coord.lat;
            var lon = data.coord.lon;


            // console.log(name);
            // $('#weather').empty();
            $('.name').html(name + " Weather");
            $('.icon').attr('src', icon);
            $('.weather').html(weather);
            $('.temp').html(temp + "°C");
            $('.pressure').html(pressure + "hPa");
            $('.humidity').html(humidity + "% humidity");
            $('.windspeed').html("Wind speed: " + windspeed + " mph");
            $('.tempmin').html(tempmin + "°C");
            $('.tempmax').html(tempmax + "°C");


            // if(map != undefined || map != null){
            //     map.remove();
            //    $("#map").html("");
            //    $("#preMap").empty();
            //    $( "<div id=\"map\" style=\"height: 500px;\"></div>" ).appendTo("#preMap");
            // }



            // var mymap = L.map('mapid').setView([lat, lon], 12);
            // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            //     maxZoom: 18,
            //     id: 'mapbox.streets',
            //     accessToken: 'pk.eyJ1IjoiZ29kbGlrZXBhcmFnb24iLCJhIjoiY2p4YzB3M2dzMDNobjNucXRwdTZ3NWg4ciJ9.7iIH_DuoX92yHfBcY4V_4w'
            // }).addTo(mymap);

            // L.marker([lat, lon]).addTo(map);



            buildMap(lat, lon);
        })
}



function buildMap(lat, lon) {


    if (typeof mymap !== "undefined") {
        mymap.remove();
     }

    // mymap.setView([lat, lon, 12]);




        mymap = L.map('mapid').setView([lat, lon], 12);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZ29kbGlrZXBhcmFnb24iLCJhIjoiY2p4YzB3M2dzMDNobjNucXRwdTZ3NWg4ciJ9.7iIH_DuoX92yHfBcY4V_4w'
        }).addTo(mymap);


    

}