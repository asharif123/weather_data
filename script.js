/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api (API key is password for API usage, )
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap using city parameter
 * HINT: Use fetch()
 * HINT: URL should look like this: (?q= is query name to find city, appid= is API key, units= is type of unit we want to receive from API)
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  
  //CODE GOES HERE
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`

  const weatherPromise = fetch(FULL_URL)
  return weatherPromise.then((response) =>{
    // use promise to get response and obtain json information from the URL!
    return response.json();
  })

  // 
}


/**
 * Retrieve city input from what user entered and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE RETURN A RESPONSE ROM THE CITY
  getWeatherData(city)
  .then((response) => {
    showWeatherData(response)

  }).catch((error)=>{
    console.log(error)

    })
}


/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  document.getElementById("weather-output").classList.add('visible');
}


