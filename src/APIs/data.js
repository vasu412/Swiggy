async function data() {
  try {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&offset=0&limit=20&collection=83667`
    );
    const res = await data.json();
    console.log(res);
    return res;
  } catch {
    console.log(e);
  }
}

// Example POST method implementation:
// async function postData(url, data) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       Authorization:
//         "Bearer 9de85655-379e-42f4-a125-da22a3b823f299c7867c-16c8-4e9d-8a9d-88d7ee310315",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData("https://www.swiggy.com/dapi/restaurants/list/update", {}).then(
//   (data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   }
// );

// fetchMoreRestaurants();
export default data;
