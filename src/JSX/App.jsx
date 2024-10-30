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
  const [currLocation, setCurrLocation] = useState(
    localStorage.getItem("currLocation")
      ? localStorage.getItem("currLocation")
      : ""
  );
  const [cards, setCards] = useState(null);
  const [coordinates, setCoordinates] = useState(() => {
    if (localStorage.getItem("coordinates")) {
      const coords = localStorage.getItem("coordinates").split(",");
      return {
        lat: coords[0],
        long: coords[1],
      };
    } else {
      return { lat: "", long: "" };
    }
  });

  const [customize, setCustomize] = useState({
    display: "hidden",
    addonData: "",
    name: "",
    price: "",
  });
  const [filters, setFilters] = useState({
    veg: false,
    nonVeg: false,
    bestSeller: false,
    guiltFree: false,
  });

  const [isVisible, setIsVisible] = useState({
    visible: false,
  });

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

    address();
  }, []);

  useEffect(() => {
    if (customize.display === "block" || dis === "block" || dis2 === "block") {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up on component unmount
    };
  }, [customize, dis, dis2]);

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
          customize,
          setCustomize,
          isVisible,
          setIsVisible,
          filters,
          setFilters,
        }}>
        <Addons />
        <Header />
        <Location />
        <LogIn />
        <Outlet />
      </location.Provider>
    </div>
  );
}

export default App;
