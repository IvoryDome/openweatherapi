

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Edinburgh&appid=cf279d16edfe76b7e78619711144635e",
function(data){
console.log(data);

var name = data.name;
var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp = (Math.floor(data.main.temp) - 273);
var weather = data.weather[0].main;
var pressure = data.main.pressure;
var humidity = data.main.humidity;

// console.log(name);

$('.name').append(name + " Weather");
$('.icon').attr('src', icon);
$('.weather').append(weather);
$('.temp').append(temp + "°C");
$('.pressure').append(pressure);
$('.humidity').append(humidity);

})