async function getCoordinates(placeName) {
  const apiKey = "950064b040394114b12c954379facb2e";
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    placeName
  )}&key=${apiKey}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    if (data.results.length > 0) {
      const location = data.results[0].geometry;
      Location = location;
      return location;
    } else {
      console.log("No results found");
    }
  } catch {
    (error) => console.error("Error fetching data from OpenCage API:", error);
  }
}

// Example usage
export default getCoordinates;
