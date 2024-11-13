const itemRes = async (id, lat, lng) => {
  const res = await fetch(
    `https://swiggy-backend-ztah.onrender.com/api/restaurant_items?lat=${lat}&lng=${lng}&id=${id}`
  );
  const data = await res.json();
  return data;
};

export default itemRes;
