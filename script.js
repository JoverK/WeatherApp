const apiKey = "d283ec556e5924058d33d2793d92d34f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "&degC";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "kph";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
        document.getElementById("card").style.background = "linear-gradient(180deg, rgba(59,190,224,1) 35%, rgba(183,217,247,1) 100%)";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
        document.getElementById("card").style.background = "linear-gradient(180deg, rgba(223,138,249,1) 0%, rgba(0,134,255,1) 74%)";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
        document.getElementById("card").style.background = "linear-gradient(180deg, rgba(41,73,113,1) 1%, rgba(195,225,251,1) 100%)";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
        document.getElementById("card").style.background = "linear-gradient(180deg, rgba(59,90,224,1) 1%, rgba(96,180,255,1) 100%)";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
        document.getElementById("card").style.background = "linear-gradient(180deg, rgba(41,73,113,1) 1%, rgba(166,177,191,1) 38%, rgba(166,177,191,1) 55%, rgba(41,73,113,1) 100%)";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png"
        document.getElementById("card").style.background = "linear-gradient(180deg, rgba(0,113,255,1) 1%, rgba(121,180,255,1) 46%, rgba(87,185,255,1) 61%, rgba(0,198,255,1) 100%)";
    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();
