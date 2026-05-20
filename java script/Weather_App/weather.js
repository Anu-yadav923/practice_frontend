
const searchBtn = document.getElementById("searchBtn");

const cityInput = document.getElementById("cityInput")

const cityName = document.getElementById("cityName");

const temperature = document.getElementById("temp");

const wind = document.getElementById("wind");

searchBtn.addEventListener("click", async() => {

    const city = cityInput.value;

    if(city === ""){
        alert("Enter city name");
        return;
    }

    try {
        //1. we try to get LATITUDE & LONGITUDE of the city

        const geourl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
        
        const georesponse = await fetch(geourl);

        const geodata = await georesponse.json();

        console.log(geodata);

        //  LATITUDE & LONGITUDE of the city not found
        if(!geodata.results) {
            alert("city not found");
            return;
        }

        const latitude = geodata.results[0].latitude;
        const longitude = geodata.results[0].longitude;
        const place = geodata.results[0].name;

        // 2. get weather data

        const weatherUrl =  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

        const weatherResponse = await fetch(weatherUrl);

        const weatherData = await weatherResponse.json();

        console.log(weatherData);

       cityName.textContent = place;

       temperature.textContent = `Temperature: ${weatherData.current.temperature_2m}°C`

       wind.textContent = `wind speed: ${weatherData.current.wind_speed_10m} km/h`;
    
    }

    catch (error){
        console.log(error);
        alert("something went wrong");
    }
});