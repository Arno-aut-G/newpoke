import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import PokemonInfo from "./components/PokemonInfo";
import PokemonList from "./components/PokemonList";
import Home from './components/Home';

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
      <div className='app'>
        <Router>
          <NavBar />
          <Switch>
          <Route exact path="/">
            <Home />
            </Route>
            <Route exact path="/pokelist">
              <PokemonList data={data} />
            </Route>
            <Route exact path="/pokemon/:id">
              <Pokemon data={data}/>
            </Route>
            <Route exact path="/pokemon/:id/:info">
              <PokemonInfo />
            </Route>
            <Route exact path="/pokemon2/:id/:info">
              <PokemonInfo />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    
  );
};

export default App;
