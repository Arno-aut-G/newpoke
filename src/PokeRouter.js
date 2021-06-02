import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import PokemonInfo from "./components/PokemonInfo";
import PokemonList from "./components/PokemonList";
import Pokefight from "./components/Pokefight"
import Home from "./components/Home"
import { PokeContext } from "./components/PokeContext"
import { useState } from "react"


const PokeRouter = ({ data }) => {
    const [pokeData, setPoke] = useState({})

    return (
        <>
            <div className="App">
                <Router>
                    <NavBar />
                    <PokeContext.Provider value={{ pokeData, setPoke }}>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/pokelist">
                                <PokemonList data={data} />
                            </Route>
                            <Route exact path="/pokemon/:id">
                                <Pokemon />
                            </Route>
                            <Route exact path="/pokemon/:id/:info">
                                <PokemonInfo />
                            </Route>
                            <Route exact path="/pokefight">
                                <Pokefight data={data} />
                            </Route>
                        </Switch>
                    </PokeContext.Provider>
                </Router>

            </div>
        </>
    );
};

export default PokeRouter;

 // <div className='app'>
    //   <Router>
    //     <NavBar />
    //     <Switch>
    //     <Route exact path="/">
    //       <Home />
    //       </Route>
    //       <Route exact path="/pokelist">
    //         <PokemonList data={data} />
    //       </Route>
    //       <Route exact path="/pokemon/:id">
    //         <Pokemon data={data}/>
    //       </Route>
    //       <Route exact path="/pokemon/:id/:info">
    //         <PokemonInfo />
    //       </Route>
    //       <Route exact path="/pokemon2/:id/:info">
    //         <PokemonInfo />
    //       </Route>
    //     </Switch>
    //   </Router>
    //   <Footer />
    // </div>


