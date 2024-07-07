import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            setIsLoading(false);
            throw Error(`failed to get resources from ${url}`);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err.name == "AbortError") {
            console.log("abort");
          } else {
            console.error(err);
            setError(err);
            setIsLoading(false);
          }
        });
    }, 1000);

    return () => {
      abortCont.abort();
    };
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
