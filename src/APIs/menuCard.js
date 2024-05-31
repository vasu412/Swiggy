const menuCard = async (id) => {
  const response = await fetch(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.322239219689113&lng=75.57277113013306&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
  );
  const data = await response.json();
  return data;
};

export default menuCard;
