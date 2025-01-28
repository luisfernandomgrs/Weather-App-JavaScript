// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// APP DATA
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "4126321f49cf6ca0b6b28ff53ed281a5";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p>${error.message}</p>`;
}

function OKshowError(error) {
    notificationElement.style.display = "block";
    switch(error.code) {
        case error.PERMISSION_DENIED:
            notificationElement.innerHTML = "<p>User denied the request for Geolocation.</p>";
            break;
        case error.POSITION_UNAVAILABLE:
            notificationElement.innerHTML = "<p>Location information is unavailable.</p>";
            break;
        case error.TIMEOUT:
            notificationElement.innerHTML = "<p>The request to get user location timed out.</p>";
            break;
        case error.UNKNOWN_ERROR:
            notificationElement.innerHTML = "<p>An unknown error occurred.</p>";
            break;
    }
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
 //   fetch(api).then(function(responser){
 //       let data = response.json();
 //       // return data;
//    }).then(function(data){
//        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
//        weather.description = data.weather[0].icon;
//        weather.iconId = data.weather[0].icon;
//        weather.city = data.name;
//        weather.country = data.sys.country;
//    }).then(function(){
//        displayWeather();
    // });

    fetch(api).then(function(response) {
        return response.json();
    }).then(function(data) {
        // Agora você pode acessar os dados JSON aqui
        // console.log(data);
       weather.temperature.value = Math.floor(data.main.temp - KELVIN);
       weather.description = data.weather[0].icon;
       weather.iconId = data.weather[0].icon;
       weather.city = data.name;
       weather.country = data.sys.country;
    }).then(function() {
        displayWeather();
    });
        
}

// DISPLAY WEATHER TO UI
function displayWeather() {
    // console.log(weather.iconId);
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
}