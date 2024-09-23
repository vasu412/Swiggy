const coords = localStorage.getItem("coordinates")
  ? localStorage.getItem("coordinates").split(",")
  : ["", ""];

export async function submit1(dish, lat, lng) {
  const response1 = await fetch(
    `http://localhost:2000/api/first_submit?lat=${lat}&lng=${lng}&str=${dish[0]}&dish1=${dish[1]}&dish2=${dish[2]}`
  );
  const data1 = await response1.json();
  return data1;
}

export async function submit2(dish, lat, lng) {
  const response2 = await fetch(
    `http://localhost:2000/api/second_submit?lat=${lat}&lng=${lng}&str=${dish[0]}&dish1=${dish[1]}&dish2=${dish[2]}`
  );
  const data2 = await response2.json();
  return data2;
}

async function search(lat = coords[0], lng = coords[1]) {
  const response = await fetch(
    `http://localhost:2000/api/search?lat=${lat}&lng=${lng}`
  );
  const data = await response.json();
  return data;
}

export async function suggestions(string, lat, lng) {
  const response = await fetch(
    `http://localhost:2000/api/suggestions?lat=${lat}&lng=${lng}&string=${string}`
  );
  const data = await response.json();
  return data;
}

export default search;
