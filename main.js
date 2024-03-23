function getWeatherData(location) {
    const apiKey = "5e83af857919f4b225d4683bc8fdbe1e";
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}';
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherData = {
            tempreature:data.main.temp,
            condition: data.weather[0].main,
            location: data.name,
        };
        return weatherData;
    });
};

