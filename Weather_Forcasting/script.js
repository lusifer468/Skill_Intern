document.getElementById("searchButton").addEventListener("click", () => {
  const location = document.getElementById("locationInput").value;
  getWeatherData(location);
});

async function getWeatherData(location) {
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=5&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function displayWeatherData(data) {
  const forecastDisplay = document.getElementById("forecastDisplay");
  forecastDisplay.innerHTML = "";

  if (data.list && data.list.length > 0) {
    forecastDisplay.style.display = "block";
    data.list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const temperature = item.main.temp;
      const description = item.weather[0].description;

      const forecastItem = document.createElement("div");
      forecastItem.innerHTML = `
        <p>Date: ${date.toDateString()}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
      `;
      forecastDisplay.appendChild(forecastItem);
    });
  } else {
    forecastDisplay.innerHTML = "No data found for this location.";
  }
}
