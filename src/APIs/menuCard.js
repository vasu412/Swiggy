const coords = localStorage.getItem("coordinates")
  ? localStorage.getItem("coordinates").split(",")
  : ["", ""];
const menuCard = async (id) => {
  const response = await fetch(
    `http://localhost:2000/api/menu?lat=${coords[0]}&lng=${coords[1]}&id=${id}`
  );
  const data = await response.json();
  return data;
};

export default menuCard;
