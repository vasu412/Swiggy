import Header from "./header";
import { Location } from "./location";
import location from "../APIs/context";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [dis, setDis] = useState("none");
  const [animate, setAnimate] = useState("slideInLeft 0.4s ease-out");
  const [currLocation, setCurrLocation] = useState("");
  const [cards, setCards] = useState(null);
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });

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
