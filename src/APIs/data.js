import { getAddress, getCurrentLocation } from "./currLocation";

window.addEventListener("load", async () => {
  const position = await getCurrentLocation();
  if (!localStorage.getItem("coordinates")) {
    localStorage.setItem(
      "coordinates",
      position.coords.latitude + "," + position.coords.longitude
    );

    const currLocation = await getAddress();
    const locationCurr = currLocation[0]
      ? currLocation[0].display_name
      : currLocation.address
      ? currLocation.address.town +
        "," +
        currLocation.address.state +
        " " +
        currLocation.address.postcode +
        "," +
        currLocation.address.country
      : "";

    localStorage.setItem("currLocation", locationCurr);
  }
});

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
