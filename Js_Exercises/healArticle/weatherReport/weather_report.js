function showWeatherDetails(event) {
  event.preventDefault(); // Prevents form from reloading the page

  const city = document.getElementById('city').value.trim();
  const apiKey = '6857256f0744c558d9da8d57431c4932';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

function showWeatherByLatandLon(event){
    event.preventDefault();
    const lat = document.getElementById('lat').value.trim();
    const lon = document.getElementById('lon').value.trim();

    const apiKey = '6857256f0744c558d9da8d57431c4932';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
   fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Latitude: ${data.lat}</h2><br>
                                    <h2>Longtitude: ${data.lon}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

// Attach the event listener to the form
document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);
document.getElementById('weatherByLatandLon').addEventListener('submit2', showWeatherByLatandLon);
