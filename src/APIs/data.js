async function data(lat, lng) {
  try {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&offset=0&limit=20&collection=83667`
    );
    const res = await data.json();
    return res;
  } catch {
    console.log(e);
  }
}
export default data;
