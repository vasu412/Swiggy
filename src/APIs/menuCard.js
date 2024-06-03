const coords = localStorage.getItem("coordinates")
  ? localStorage.getItem("coordinates").split(",")
  : ["", ""];
const menuCard = async (id) => {
  const response = await fetch(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${coords[0]}&lng=${coords[1]}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
  );
  const data = await response.json();
  return data;
};

export default menuCard;
