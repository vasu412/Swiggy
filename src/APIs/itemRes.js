const coords = localStorage.getItem("coordinates")
  ? localStorage.getItem("coordinates").split(",")
  : ["", ""];
const itemRes = async (id) => {
  const res = await fetch(
    `http://localhost:2000/api/restaurant_items?lat=${coords[0]}&lng=${coords[1]}&id=${id}`
  );
  const data = await res.json();
  return data;
};

export default itemRes;
