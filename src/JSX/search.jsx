import { useContext, useEffect, useState } from "react";
import search, { submit1, submit2, suggestions } from "../APIs/search";
import Suggestions from "./suggestions";
import { Outlet } from "react-router-dom";
import location, { submittedData } from "../APIs/context";
import SearchShimmer2 from "./searchShimmer2";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typing, setTyping] = useState(false);
  const [searchPage, setSearchPage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [submitDish, setSubmitDish] = useState(false);
  const [submitDishData, setSubmitDishData] = useState("");
  const [submitRestaurantData, setSubmitRestaurantData] = useState("");
  const { coordinates } = useContext(location);
  const { lat, long } = coordinates;

  useEffect(() => {
    async function fetch() {
      const data = await search(lat, long);
      setSearchPage(data);
    }
    fetch();
  }, []);

  useEffect(() => {
    async function fetchSuggestions(query) {
      if (query.length > 1) {
        const data = await suggestions(query, lat, long);
        setSearchTerm(data.data.suggestions);
        setTyping(true);
      } else {
        setSearchTerm("");
        setTyping(false);
      }
    }
    if (inputValue) {
      fetchSuggestions(inputValue);
    }
  }, [inputValue]);

  function handleSubmit(text, link) {
    setInputValue(text);
    setSubmitDish(true);
    const val = link.substring(link.indexOf("=") + 1);
    const dish = val.split("&");
    async function fetch() {
      const data1 = await submit1(dish, lat, long);
      const data2 = await submit2(dish, lat, long);
      setSubmitDishData(data1?.data?.cards[0]);
      setSubmitRestaurantData(data2?.data?.cards[0]);
    }
    fetch();
  }

  function handleSuggestions(e) {
    setInputValue(e.target.value);
  }

  if (!searchPage || searchPage === "" || !lat || !long)
    return <SearchShimmer2 />;
  return (
    <div className="bg-[#f1f1f18c] h-[89vh]">
      <div className="pt-[48px] pb-[8px] flex justify-center">
        <form action="#" className="relative">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="border border-[#80808083] bg-[transparent] w-[858px] h-[46px] mb-[8px] placeholder:text-[14px] placeholder:text-[#02060C99] pl-[16px] pr-[12px] text-[14px] focus:outline-none rounded-[4px]"
            value={inputValue}
            onChange={(e) => handleSuggestions(e)}
          />
          <span
            className="absolute right-[10px] top-[12px] h-[20px] w-[20px] cursor-pointer"
            onClick={(e) => {
              typing &&
                (setSearchTerm(""),
                setTyping(false),
                setInputValue(""),
                setSubmitDish(false));
            }}>
            <i className="material-icons">{typing ? "close" : "search"}</i>
          </span>
        </form>
      </div>
      {console.log(searchPage)}
      {submitDish ? (
        <submittedData.Provider
          value={{ submitDishData, submitRestaurantData, inputValue }}>
          <Outlet />
        </submittedData.Provider>
      ) : searchTerm !== "" ? (
        <div className="flex flex-col items-center overflow-scroll h-[75vh]">
          <Suggestions searchTerm={searchTerm} handleSubmit={handleSubmit} />
        </div>
      ) : (
        <div className="mx-[290px]">
          {searchPage.data.cards.map((x, idx) => {
            if (idx === 1)
              return (
                <div key={idx}>
                  <h1 className="font-[600] pl-[16px] pt-[28px] text-[19px]">
                    {x?.card?.card?.header?.title}
                  </h1>
                  <div className="flex overflow-scroll hide my-[8px] py-[12px] px-[16px]">
                    {x?.card?.card?.gridElements?.infoWithStyle?.info.map(
                      (item) => {
                        return (
                          <img
                            src={
                              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
                              item.imageId
                            }
                            alt=""
                            className="w-[73px] h-[105px] mr-[10px] mix-blend-multiply"
                            key={item.id}
                            onClick={() => {
                              const val = item.entityId.split("=");
                              val[1].includes("%")
                                ? setInputValue(() => {
                                    const name = val[1].split("%20");
                                    return name[0] + " " + name[1];
                                  })
                                : setInputValue(val[1]);
                            }}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
