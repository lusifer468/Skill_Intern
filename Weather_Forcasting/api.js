document.getElementById("detectLocationButton").addEventListener("click", () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // Use the obtained latitude and longitude to fetch weather data
      getWeatherDataByCoordinates(latitude, longitude);
    });
  } else {
    alert("Geolocation is not supported by your browser.");
  }
});
