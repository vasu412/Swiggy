function getCoordinates(placeName) {
  const apiKey = "950064b040394114b12c954379facb2e";
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    placeName
  )}&key=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length > 0) {
        const location = data.results[0].geometry;
        Location = location;
        console.log(
          `place's Latitude: ${location.lat}, Longitude: ${location.lng}`
        );
        // Use the coordinates (location.lat, location.lng) as needed
      } else {
        console.log("No results found");
      }
    })
    .catch((error) =>
      console.error("Error fetching data from OpenCage API:", error)
    );
}

// Example usage
export default getCoordinates;
