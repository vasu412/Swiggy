const coords = localStorage.getItem("coordinates")
  ? localStorage.getItem("coordinates").split(",")
  : ["", ""];

export async function submit1(dish) {
  const response1 = await fetch(
    `https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&str=${dish[0]}&trackingId=undefined&submitAction=SUGGESTION&${dish[1]}&${dish[2]}&selectedPLTab=DISH`
  );
  const data1 = await response1.json();
  return data1;
}

export async function submit2(dish) {
  const response2 = await fetch(
    `https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&str=${dish[0]}&trackingId=undefined&submitAction=SUGGESTION&${dish[1]}&${dish[2]}&selectedPLTab=RESTAURANT`
  );
  const data2 = await response2.json();
  return data2;
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
