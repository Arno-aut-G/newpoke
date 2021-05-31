import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PokeRouter from "./PokeRouter"
import { PokeContext } from "./components/PokeContext"


const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get(`https://quiet-falls-70006.herokuapp.com/pokemon/`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PokeRouter data={data} />
    </>
  );
};

export default App;
