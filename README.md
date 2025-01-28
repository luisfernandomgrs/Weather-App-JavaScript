# Weather-App-JavaScript

In this project I reviewed about use of CSS, JS and HTML.

### And I review concepts of:

.  Event listener
```js
tempElement.addEventListener("click", function() {
    if (weather.temperature.value === undefined) return;

    if (weather.temperature.unit == "celsius") {
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);

        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }
    else {
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius";
    }
});
```
.  Functions
```js
function displayWeather() {
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
```

### And I **learned** about:

How consuming another API, get the JSON informations and set my objects to show result details of this data;

```js
let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
fetch(api).then(function(response) {
        return response.json();
    }).then(function(data) {
        // Agora você pode acessar os dados JSON aqui
       console.log(data);
       weather.temperature.value = Math.floor(data.main.temp - KELVIN);
       weather.description = data.weather[0].description;
       weather.iconId = data.weather[0].icon;
       weather.city = data.name;
       weather.country = data.sys.country;
    }).then(function() {
        displayWeather();
    });
```

The use if variables into text out to UI
```js
iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
```

## and more 😉

|My home city|Another place in GB|San Francisco, US|
|--------------------|---------------------|------------------------|
|![image](https://github.com/user-attachments/assets/2be7ae7c-ca2d-4550-8990-fa069c159203)|![image](https://github.com/user-attachments/assets/960800d8-693a-4e1c-bf20-03d912822163)|![image](https://github.com/user-attachments/assets/373fbd49-6794-45ab-9758-abf46fb7d266)|


# Research source

My inspiration to this project are can found at:
```link
https://www.youtube.com/watch?v=KqZGuzrY9D4&t=93s
```
Create a Weather App Using JavaScript, HTML and CSS | JavaScript Project For Beginners
by Code Explained
