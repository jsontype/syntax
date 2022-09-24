import React, { useState, useEffect } from "react";
import axios from "axios";

function App () {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState({});

  const fetchData = async () => {
    setError(false);
    setLoading(true);

    try {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = JSON.stringify(response.data);
      setData(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>React Query</h1>
      {isError && <div>Error</div>}
      {isLoading ? <div>Loading</div> : <div>{data}</div>}
    </div>
  );
}
export default App;