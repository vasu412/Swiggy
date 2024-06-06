const coords = localStorage.getItem("coordinates")
  ? localStorage.getItem("coordinates").split(",")
  : ["", ""];
const itemRes = async (id) => {
  const res = await fetch(
    `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coords[0]}&lng=${coords[1]}&collection=${id}&offset=0&page_type=null`
  );
  const data = await res.json();
  return data;
};

export default itemRes;
