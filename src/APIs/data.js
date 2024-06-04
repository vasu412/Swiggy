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
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&offset=0&limit=100&collection=83667`
    );
    const res = await data.json();
    // console.log(res);
    return res;
  } catch {
    console.log("error");
  }
}

export default loadMoreRestaurants;
