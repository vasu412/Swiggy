import { useContext, useEffect, useState } from "react";
import location from "../APIs/context";
import { getAddress, getCurrentLocation } from "../APIs/currLocation";
import getCoordinates from "../APIs/coordinates";

const Location = () => {
  let {
    dis,
    setDis,
    animate,
    setAnimate,
    setCurrLocation,
    setCards,
    coordinates,
    setCoordinates,
    currLocation,
  } = useContext(location);

  const [suggesstions, setSuggesstions] = useState(null);
  const [typing, setTying] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const recentLocations = localStorage.getItem("recentLocations")
    ? JSON.parse(localStorage.getItem("recentLocations"))
    : [];

  useEffect(() => {
    if (coordinates.lng !== "" && coordinates.lat !== "") {
      localStorage.setItem(
        "coordinates",
        coordinates.lat + "," + coordinates.long
      );

      localStorage.setItem("currLocation", currLocation);
    }
  }, [coordinates]);

  const handleSubmit = async () => {
    setDis("none");
    setCards(null);
    const loc = getAddress();
    const currLocation = await loc;

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

    console.log(locationCurr);
    setCurrLocation(locationCurr);
    const position = await getCurrentLocation();
    const { latitude, longitude } = position.coords;
    setCoordinates(() => {
      return {
        lat: latitude,
        long: longitude,
      };
    });
  };

  const setLocation = async (val) => {
    setDis("none");
    setCards(null);
    setCurrLocation(val);
    setTying(false);
    setInputVal("");
    const coords = await getCoordinates(val);
    setCoordinates(() => {
      return {
        lat: coords.lat,
        long: coords.lng,
      };
    });

    if (!recentLocations.includes(val)) recentLocations.push(val);
    if (recentLocations.length >= 6) recentLocations.shift();
    localStorage.setItem("recentLocations", JSON.stringify(recentLocations));
  };

  const locationSuggestions = async (e) => {
    setInputVal(e.target.value);
    if (e.target.value != "") setTying(true);
    else setTying(false);
    const data = await fetch(
      `https://swiggy-backend-ztah.onrender.com/api/autocomplete?string=${e.target.value}`
    );
    const res = await data.json();
    setSuggesstions(res.data);
  };

  return (
    <div
      className="h-[100vh] w-[100vw] bg-[#282c3fb3] fixed z-[999] top-0"
      style={{ display: dis }}>
      <div
        className="w-[522px] h-[100vh] flex flex-col bg-white  justify-between fixed loc "
        style={{ animation: animate }}>
        <div className="pl-[120px] pr-[40px] flex flex-col mt-[32px]">
          <div className="mb-[30px]">
            <i
              className="material-icons cursor-pointer"
              onClick={() => {
                setAnimate("slideInRight 0.2s ease-in-out");
                setTimeout(() => {
                  setDis("none");
                }, 200);
              }}>
              close
            </i>
          </div>
          <div>
            <form action="#">
              <input
                type="text"
                placeholder="Search for area, street name.."
                className="w-[360px] h-[50px] pl-[20px] pr-[72px] border-[1px] border-[rgb(118, 118, 118)] outline-none font-nun mb-[28px]"
                value={inputVal}
                onChange={(e) => locationSuggestions(e)}
              />
              <button type="submit" className="none"></button>
            </form>
          </div>

          {!typing && (
            <div
              className=" group cursor-pointer border-[1px] border-solid border-[#76767628]"
              onClick={handleSubmit}>
              <div className="px-[24px] py-[22px] flex">
                <span className="mr-[10px]">
                  <i className="material-icons">my_location</i>
                </span>
                <span>
                  <p className="font-nun font-[500] group-hover:text-[#FC8019]">
                    Get current location
                  </p>
                  <p className="text-xs text-slate-400">Using GPS</p>
                </span>
              </div>
            </div>
          )}

          {!typing && recentLocations.length != 0 && (
            <div className="mt-[28px] group cursor-pointer border-[1px] border-solid border-[#76767628]">
              <div className="px-[24px] pt-[22px] flex">
                <span>
                  <p className="text-xs text-slate-400 ml-[33px]">
                    RECENT SEARCHES
                  </p>
                </span>
              </div>
              {recentLocations.map((x, idx) => (
                <div
                  className=" cursor-pointer"
                  onClick={() => setLocation(x)}
                  key={idx}>
                  <div className="ml-[24px] mt-[22px] flex ">
                    <span className="mr-[10px]">
                      <i className="material-symbols-outlined text-[22px]">
                        history
                      </i>
                    </span>
                    <span
                      className={
                        (idx < recentLocations.length - 1 &&
                          `pb-[22px] w-[300px] border-0 border-b border-dashed border-[#767676bb]`) ||
                        `pb-[22px] w-[300px]`
                      }>
                      <p className="font-nun font-[500] hover:text-[#FC8019]">
                        {x.split(",")[0]}
                      </p>
                      <p className="text-xs text-slate-400">
                        {x.split(",").map((place, idx) => {
                          if (idx > 0 && idx < x.split(",").length - 1)
                            return place + ", ";
                          else if (idx === x.split(",").length - 1)
                            return place;
                        })}
                      </p>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div>
            {suggesstions &&
              typing &&
              suggesstions.map((ele) => {
                return (
                  <div
                    className=" group cursor-pointer"
                    onClick={() => setLocation(ele.description)}
                    key={ele.description}>
                    <div className="ml-[24px] mt-[22px] flex">
                      <span className="mr-[10px]">
                        <i className="material-symbols-outlined text-[22px]">
                          location_on
                        </i>
                      </span>
                      <span className="pb-[22px] w-[300px] border-0 border-b border-dashed border-[#767676bb]">
                        <p className="font-nun font-[500] group-hover:text-[#FC8019]">
                          {ele.terms[0].value}
                        </p>
                        <p className="text-xs text-slate-400">
                          {ele.terms.map((x, idx) => {
                            if (idx > 0 && idx < ele.terms.length - 1)
                              return x.value + ", ";
                            else if (idx === ele.terms.length - 1)
                              return x.value;
                          })}
                        </p>
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Location };
