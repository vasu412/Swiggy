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

export async function autoComplete(placeName) {
  const response = await fetch(
    ` https://api.locationiq.com/v1/autocomplete?key=pk.1a5d4b531a2727a9430a986a76dca49a&q=${placeName}&countrycodes=in&format=json`
  );
  const data = await response.json();
  console.log(data);
}

export async function place(placeName) {
  const response = await fetch(
    `https://us1.locationiq.com/v1/search?key=pk.1a5d4b531a2727a9430a986a76dca49a&q=${placeName}&format=json`
  );
  const data = await response.json();
  return data;
}

export async function loc(lat, lon) {
  const response = await fetch(
    `https://us1.locationiq.com/v1/reverse?key=pk.1a5d4b531a2727a9430a986a76dca49a&lat=${lat}&lon=${lon}&format=json`
  );
  const data = await response.json();
  // console.log(data);
  return data;
}

// Example usage
export default getCoordinates;
