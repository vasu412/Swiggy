import Header from "./header";
import Body from "./body";
import { Location } from "./location";
import location from "../APIs/context";
import { useState } from "react";

function App() {
  const [dis, setDis] = useState("none");
  const [animate, setAnimate] = useState("slideInLeft 0.4s ease-out");
  const [currLocation, setCurrLocation] = useState("");
  const [cards, setCards] = useState(null);

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
        }}>
        <Header />
        <Body cards={cards} setCards={setCards} />
        <Location setCards={setCards} />
      </location.Provider>
    </div>
  );
}

export default App;
