export async function submit1(dish, lat, lng) {
  const response1 = await fetch(
    `https://swiggy-backend-ztah.onrender.com/api/first_submit?lat=${lat}&lng=${lng}&str=${dish[0]}&dish1=${dish[1]}&dish2=${dish[2]}`
  );
  const data1 = await response1.json();
  return data1;
}

export async function submit2(dish, lat, lng) {
  const response2 = await fetch(
    `https://swiggy-backend-ztah.onrender.com/api/second_submit?lat=${lat}&lng=${lng}&str=${dish[0]}&dish1=${dish[1]}&dish2=${dish[2]}`
  );
  const data2 = await response2.json();
  return data2;
}

async function search() {
  const coords = localStorage.getItem("coordinates")
    ? localStorage.getItem("coordinates").split(",")
    : ["", ""];
  const lat = coords[0];
  const lng = coords[1];
  const response = await fetch(
    `https://swiggy-backend-ztah.onrender.com/api/search?lat=${lat}&lng=${lng}`
  );
  const data = await response.json();
  return data;
}

export async function suggestions(string, lat, lng) {
  const response = await fetch(
    `https://swiggy-backend-ztah.onrender.com/api/suggestions?lat=${lat}&lng=${lng}&string=${string}`
  );
  const data = await response.json();
  return data;
}

export default search;
