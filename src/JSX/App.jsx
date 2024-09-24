import Header from "./header";
import { Location } from "./location";
import location from "../APIs/context";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getAddress, getCurrentLocation } from "../APIs/currLocation";
import LogIn from "./logIn";
import Addons from "./addons";

function App() {
  const [dis, setDis] = useState("none");
  const [dis2, setDis2] = useState("hidden");
  const [animate, setAnimate] = useState("slideInLeft 0.4s ease-out");
  const [currLocation, setCurrLocation] = useState("");
  const [cards, setCards] = useState(null);
  const [coordinates, setCoordinates] = useState({ lat: "", long: "" });

  useEffect(() => {
    async function address() {
      const position = await getCurrentLocation();
      const currLoc = await getAddress();
      const locationCurr = currLoc[0]
        ? currLoc[0].display_name
        : currLoc.address
        ? currLoc.address.town +
          "," +
          currLoc.address.state +
          " " +
          currLoc.address.postcode +
          "," +
          currLoc.address.country
        : "";

      if (
        !localStorage.getItem("coordinates") &&
        !localStorage.getItem("currLocation")
      ) {
        setCurrLocation(locationCurr);
        setCoordinates({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });

        localStorage.setItem(
          "coordinates",
          position.coords.latitude + "," + position.coords.longitude
        );

        localStorage.setItem("currLocation", locationCurr);
      }
    }

    if (
      localStorage.getItem("coordinates") &&
      localStorage.getItem("currLocation")
    ) {
      const coords = localStorage.getItem("coordinates").split(",");
      setCoordinates({
        lat: coords[0],
        long: coords[1],
      });
      setCurrLocation(localStorage.getItem("currLocation"));
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
          dis2,
          setDis2,
        }}>
        <Header />
        <Location />
        <LogIn />
        <Outlet />
        <Addons />
      </location.Provider>
    </div>
  );
}

export default App;
