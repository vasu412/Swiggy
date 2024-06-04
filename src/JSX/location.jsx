import { useContext, useState, useEffect } from "react";
import location from "../APIs/context";
import { getAddress, getCurrentLocation } from "../APIs/currLocation";
import getCoordinates, { place } from "../APIs/coordinates";
import loadMoreRestaurants from "../APIs/data";

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

  useEffect(() => {
    if (coordinates.lng !== "" && coordinates.lat !== "") {
      localStorage.setItem(
        "coordinates",
        coordinates.lat + "," + coordinates.lng
      );

      localStorage.setItem("currLocation", locationCurr);
    }
  }, [coordinates]);

  useEffect(() => {
    if (coordinates) {
      async function fetchData() {
        try {
          const cardData = await loadMoreRestaurants(
            coordinates.lat,
            coordinates.lng
          );
          setCards(cardData);
        } catch {
          console.log("error");
        }
      }
      fetchData();
    }
  }, [coordinates]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const address = e.target[0].value;
    const cord = await getCoordinates(address);
    const cord2 = await place(address);
    setCoordinates((prev) => {
      return {
        lat: cord.lat,
        lng: cord.lng,
      };
    });
    // console.log(localStorage.getItem("coordinates"));
    setCurrLocation(cord2);
    e.target[0].value = "";
    setDis("none");
  };

  return (
    <div
      className="h-[100vh] w-[100vw] bg-[#282c3fb3] fixed z-[999] top-0"
      style={{ display: dis }}>
      <div
        className="w-[522px] h-[100vh] flex flex-col bg-white  justify-between fixed  loc "
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
            <form action="#" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search for area, street name.."
                className="w-[360px] h-[50px] pl-[20px] pr-[72px] border-[1px] border-[rgb(118, 118, 118)] font-nun"
                // onKeyUp={(e) => autoComplete(e.target.value)}
              />
              <button type="submit" className="none"></button>
            </form>
          </div>
          <div
            className="mt-[28px] group cursor-pointer"
            onClick={async () => {
              const loc = getAddress();
              const locData = await loc;
              setCurrLocation(locData);
              const position = await getCurrentLocation();
              const { latitude, longitude } = position.coords;
              setCoordinates(() => {
                return {
                  [coordinates.lat]: latitude,
                  [coordinates.lng]: longitude,
                };
              });
              setDis("none");
            }}>
            <div className="px-[24px] py-[22px] border-[rgb(118, 118, 118)] border-[1px] flex">
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
        </div>
      </div>
    </div>
  );
};

export { Location };
