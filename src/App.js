import React, { useState, useEffect } from "react";
import { getAllData } from "./util/index";
import Home from "./component/Home/Home";

const URL = "http://localhost:8000/api/v1/";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
    })();

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <>
      <Home />

      <h1>{message}</h1>
    </>
  );
}

export default App;
