const coords = localStorage.getItem("coordinates")
  ? localStorage.getItem("coordinates").split(",")
  : ["", ""];

async function loadMoreRestaurants(lat, lng) {
  if (lat == "" && lng == "") {
    lat = coords[0];
    lng = coords[1];
  }
  try {
    const data = await fetch(
      `https://swiggy-backend-ztah.onrender.com/api/restaurants?lat=${lat}&lng=${lng}`
    );
    const res = await data.json();
    return res;
  } catch {
    console.log("error");
  }
}

export default loadMoreRestaurants;
