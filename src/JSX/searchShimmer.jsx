const SearchShimmer = () => {
  return (
    <div className="w-[846px] h-[80vh] bg-[#edeeee] mx-[290px] pt-[5px] overflow-scroll ml-[300px]">
      <div className="bg-[#fff] w-[825px] h-[60px] my-[8px] mx-[10px] flex items-center pl-[10px]">
        <div className="rounded-3xl w-[80px] h-[35px] bg-gray-200 mr-[10px] animate-pulse"></div>
        <div className="rounded-3xl w-[80px] h-[35px] border animate-pulse"></div>
      </div>
      {Array(8)
        .fill("")
        .map((e, index) => (
          <div className="h-[150px] bg-[#fff] w-[825px] mt-[50px] my-[8px] mx-[10px] pl-[15px] flex flex-col justify-center">
            <div className="w-[30px] bg-gray-200 h-[15px] mb-[15px] animate-pulse"></div>
            <div className="w-[520px] bg-gray-200 h-[15px] mb-[15px] animate-pulse"></div>
            <div className="w-[400px] bg-gray-200 h-[15px] mb-[15px] animate-pulse"></div>
            <div className="w-[200px] bg-gray-200 h-[15px] animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default SearchShimmer;
