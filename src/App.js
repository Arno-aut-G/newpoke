import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import PokemonInfo from "./components/PokemonInfo";
import PokemonList from "./components/PokemonList";

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
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <PokemonList data={data} />
            </Route>
            <Route exact path="/pokemon/:id">
              <Pokemon />
            </Route>
            <Route exact path="/pokemon/:id/:info">
              <PokemonInfo />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </>
  );
};

export default App;
