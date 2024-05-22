function reverseGeocode(latitude, longitude) {
  const apiKey = "950064b040394114b12c954379facb2e";
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length > 0) {
        const address = data.results[0].formatted;
        console.log(`Address: ${address}`);
        // Use the address as needed
      } else {
        console.log("No results found");
      }
    })
    .catch((error) =>
      console.error("Error fetching data from OpenCage API:", error)
    );
}

function getCurrentLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function successCallback(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  reverseGeocode(latitude, longitude);
}

function errorCallback(error) {
  console.error("Error getting location:", error);
}

export default getCurrentLocation;
