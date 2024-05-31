const menuCard = async (id, lat, lng) => {
  const response = await fetch(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
  );
  const data = await response.json();
  return data;
};

export default menuCard;
