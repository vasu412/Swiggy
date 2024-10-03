const coords = localStorage.getItem("coordinates")
  ? localStorage.getItem("coordinates").split(",")
  : ["", ""];
const menuCard = async (id) => {
  const response = await fetch(
    `https://swiggy-backend-ztah.onrender.com/api/menu?lat=${coords[0]}&lng=${coords[1]}&id=${id}`
  );
  const data = await response.json();
  return data;
};

export default menuCard;
