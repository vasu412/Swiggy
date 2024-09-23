const coords = localStorage.getItem("coordinates")
  ? localStorage.getItem("coordinates").split(",")
  : ["", ""];
const itemRes = async (id, lat, lng) => {
  const res = await fetch(
    `http://localhost:2000/api/restaurant_items?lat=${lat}&lng=${lng}&id=${id}`
  );
  const data = await res.json();
  return data;
};

export default itemRes;
