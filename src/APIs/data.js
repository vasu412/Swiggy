async function loadMoreRestaurants(lat, lng) {
  try {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&offset=0&limit=100&collection=83667`
    );
    const res = await data.json();
    return res;
  } catch {
    console.log("error");
  }
}

async function fetchAllRestaurants(lat, lng) {
  let allRestaurants = [];
  let nextOffset = null; // Initial offset
  let hasMoreData = true;
  const limit = 20; // Number of restaurants per request (adjust as necessary)

  // Add your collections parameter value here
  const collections = "83667";

  while (hasMoreData) {
    // Construct the URL with the current offset if available
    const requestBody = {
      lat: lat,
      lng: lng,
      limit: limit,
      collections: collections,
      offset: nextOffset,
    };

    // Make the API request
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (response.ok) {
      const data = await response.json();

      // Add the fetched restaurant cards to the list
      console.log(data); // Adjust based on the structure of the response

      // Check if there's a next offset available
      if (data.data.pageOffset.nextOffset) {
        nextOffset = data.data.pageOffset.nextOffset; // Set nextOffset for the next request
      } else {
        hasMoreData = false; // Stop if no nextOffset is provided
      }
    } else {
      console.error(`Failed to fetch data: ${response.status}`);
      hasMoreData = false; // Stop the loop in case of an error
    }
  }

  return allRestaurants;
}

// Usage example
// fetchAllRestaurants(31.3260152, 75.57618289999999);

export default loadMoreRestaurants;
