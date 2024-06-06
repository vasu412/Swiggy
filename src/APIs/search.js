const coords = localStorage.getItem("coordinates")
  ? localStorage.getItem("coordinates").split(",")
  : ["", ""];

export async function submit() {
  const response = await fetch(
    `https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&str=subway&trackingId=undefined&submitAction=SUGGESTION&metadata=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22None%22%2C%22cloudinaryId%22%3A%226ce248f463873874b4fe6d8b40b634a3%22%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&marketplace=%7B%22marketplaceId%22%3A%22SWIGGY%22%2C%22businessLineId%22%3A%22FOOD%22%7D`
  );
  const data = await response.json();
  console.log(data);
}

async function search() {
  const response = await fetch(
    `https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=${coords[0]}&lng=${coords[1]}`
  );
  const data = await response.json();
  return data;
}

export async function suggestions(string) {
  const response = await fetch(
    `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${coords[0]}&lng=${coords[1]}&str=${string}&trackingId=null`
  );
  const data = await response.json();
  return data;
}

export default search;
