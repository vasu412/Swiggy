async function reverseGeocode(latitude, longitude) {
  const apiKey = "950064b040394114b12c954379facb2e";
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

  try {
    let response = await fetch(url);
    const data = await response.json();
    if (data.results.length > 0) {
      const address = data.results[0].formatted;
      return address;
      // Use the address as needed
    } else {
      console.log("No results found");
    }
  } catch {
    (error) => console.error("Error fetching data from OpenCage API:", error);
  }
}

async function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      reject(new Error("Geolocation not supported"));
    }
  });
}

async function getAddress() {
  try {
    const position = await getCurrentLocation();
    const { latitude, longitude } = position.coords;
    const address = await reverseGeocode(latitude, longitude);
    return address; // Return the address if needed
  } catch (error) {
    console.error("Error getting address:", error);
    return null; // Return null or handle error accordingly
  }
}

export { getAddress };
