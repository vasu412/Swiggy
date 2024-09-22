import { useEffect, useState } from "react";

const useFetch = (url = "") => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const ans = await response.json();
        setData(ans);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, [url]);

  return { data };
};

export default useFetch;
