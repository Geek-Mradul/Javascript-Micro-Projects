const apiKey = "cde34a126dc441c2208dc23e03f1e80b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather() {
    const response = await fetch(apiUrl + `${searchBox.value}` + `&appid=${apiKey}`);
    var data = await response.json();
    if (response.status == "404") {
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".err").style.display = "block";
    }
    else {
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".cityName").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".windSpeed").innerHTML = data.wind.speed + " km/h";
        console.log(data);
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".err").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather();
})