import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import PokemonInfo from "./components/PokemonInfo";
import PokemonList from "./components/PokemonList";
import Pokefight from "./components/Pokefight"
import { PokeContext } from "./components/PokeContext"
import { useState } from "react"


const PokeRouter = ({ data }) => {
    const [poke, setPoke] = useState({})

    return (
        <>
            <div className="App">
                <Router>
                    <NavBar />
                    <PokeContext.Provider value={{ poke, setPoke }}>
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
                            <Route exact path="/pokefight" component={Pokefight} />
                        </Switch>
                    </PokeContext.Provider>
                    <Footer />
                </Router>

            </div>
        </>
    );
};

export default PokeRouter;

