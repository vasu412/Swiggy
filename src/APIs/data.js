async function loadMoreRestaurants(lat, lng) {
  // Retrieve coordinates from localStorage, default to empty if not found
  const coords = localStorage.getItem("coordinates")
    ? localStorage.getItem("coordinates").split(",")
    : ["", ""];

  // Default to stored coordinates if lat and lng are not provided
  if (!lat && !lng) {
    lat = coords[0];
    lng = coords[1];
  }

  try {
    const response = await fetch(
      `https://swiggy-backend-ztah.onrender.com/api/restaurants?lat=${lat}&lng=${lng}`
    );
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to load restaurants:", error);
  }
}

export default loadMoreRestaurants;
