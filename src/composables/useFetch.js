import { useState, useEffect } from "react";

const useFetch = (suc) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const singel = controller.signal;
    setTimeout(() => {
      fetch("http://localhost:8000/tasks")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
          // setError("data was not fetch...");
        });
    }, 1000);
    return () => {
      controller.abort();
    };
  }, [suc]);

  return { data };
};

export default useFetch;
