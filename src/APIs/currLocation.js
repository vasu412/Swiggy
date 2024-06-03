import { loc } from "./coordinates";

async function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      reject(new Error("Geolocation not supported"));
    }
  });
}

async function getAddress() {
  try {
    const position = await getCurrentLocation();
    const { latitude, longitude } = position.coords;
    const address = await loc(latitude, longitude);
    return address; // Return the address if needed
  } catch (error) {
    console.error("Error getting address:", error);
    return null; // Return null or handle error accordingly
  }
}

export { getAddress };
