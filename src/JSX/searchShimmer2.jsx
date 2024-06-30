const SearchShimmer2 = () => {
  return (
    <>
      <div className="mx-[290px] ">
        <div className="border w-[820px] h-[44px] mt-[48px] px-[20px]animate-pulse bg-gray-200"></div>
        <div>
          <div className="h-[20px] w-[250px] bg-gray-200 mt-[50px] animate-pulse"></div>
          <div className="h-[20px] w-[200px] bg-gray-200 mt-[20px] mb-[50px] animate-pulse"></div>
          <div className="flex">
            {Array(10)
              .fill("")
              .map((e, index) => (
                <div className="rounded-[100%] bg-gray-200 animate-pulse h-[80px] mr-[15px] w-[75px]"></div>
              ))}
          </div>
          <div className="h-[20px] w-[250px] bg-gray-200 mt-[50px] animate-pulse"></div>
          <div className="h-[20px] w-[600px] bg-gray-200 mt-[20px] mb-[50px] animate-pulse"></div>{" "}
          <div className="h-[20px] w-[450px] bg-gray-200 mt-[50px] animate-pulse"></div>
          <div className="h-[20px] w-[100px] bg-gray-200 mt-[20px] mb-[50px] animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export default SearchShimmer2;
