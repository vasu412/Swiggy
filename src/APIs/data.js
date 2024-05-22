async function data() {
  try {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    console.log(res);
    return res;
  } catch {
    console.log(e);
  }
}
export default data;
