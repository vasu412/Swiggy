import Header from "./header";
import { Location } from "./location";
import location from "../APIs/context";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getAddress, getCurrentLocation } from "../APIs/currLocation";

function App() {
  const [dis, setDis] = useState("none");
  const [animate, setAnimate] = useState("slideInLeft 0.4s ease-out");
  const [currLocation, setCurrLocation] = useState("");
  const [cards, setCards] = useState(null);
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });

  useEffect(() => {
    async function address() {
      const position = await getCurrentLocation();
      const currLocation = await getAddress();
      const locationCurr = currLocation[0]
        ? currLocation[0].display_name
        : currLocation.address
        ? currLocation.address.town +
          "," +
          currLocation.address.state +
          " " +
          currLocation.address.postcode +
          "," +
          currLocation.address.country
        : "";

      if (
        !localStorage.getItem("coordinates") &&
        !localStorage.getItem("currLocation")
      ) {
        setCurrLocation(currLocation);
        setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        localStorage.setItem(
          "coordinates",
          position.coords.latitude + "," + position.coords.longitude
        );

        localStorage.setItem("currLocation", locationCurr);
      }
    }

    address();
  }, []);

  return (
    <div>
      <location.Provider
        value={{
          dis,
          setDis,
          animate,
          setAnimate,
          currLocation,
          setCurrLocation,
          cards,
          setCards,
          coordinates,
          setCoordinates,
        }}>
        <Header />
        <Location />
        <Outlet />
      </location.Provider>
    </div>
  );
}

export default App;
