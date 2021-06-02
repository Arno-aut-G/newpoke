import { useContext } from "react"
import { PokeContext } from "./PokeContext"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Pokemon.css";
import "../App.css";



const Pokefight = ({ data }) => {
    const { poke } = useContext(PokeContext)
    console.log(poke)
    const [pokeData2, setPokeData2] = useState([]);
    const [loading2, setLoading2] = useState(true);

    let id2 = Math.floor(Math.random() * data.length);

    const getImageURL = (pokeId) =>
        `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;

    const fetchPokemon2 = async () => {
        await axios
            .get(`https://quiet-falls-70006.herokuapp.com/pokemon/${id2}`)
            .then((response) => setPokeData2(response.data))
            .catch((err) => console.log(err));
        setLoading2(false);
    };

    const handleFightBtn = () => {
        if (poke.base.HP === '' && pokeData2.base.Attack === '') {
            alert('hit play button')
        }
        else if (
            poke.base.HP > pokeData2.base.HP &&
            poke.base.Attack > pokeData2.base.Attack
        ) {
            alert("Player 1 Win");
        } else {
            alert("player  2 won");
        }
    };

    useEffect(() => {
        fetchPokemon2()
    }, []);

    return (

        <div className="main-container">
            <div className="pokefight-battle">
                <div className="btn">
                    <button type="button" onClick={fetchPokemon2}>
                        {" "}
            Play{" "}
                    </button>
                </div>

                <div className="poke-field">
                    <div className='poke-info'>
                        <div className="selected-poke">
                            <div>
                                <h4>Player: 1</h4>
                            </div>
                            <div>
                                <img alt="image" src={getImageURL(poke.id)} width="150" />
                            </div>

                            <div>
                                <p>
                                    <Link exact to={`/pokemon/${poke.id}/name`}>
                                        <h2>{poke.name.english}</h2>
                                    </Link>
                                </p>
                                <p>
                                    <Link exact to={`/pokemon/${poke.id}/type`}>
                                        <h6>Type</h6>
                                    </Link>
                                </p>
                                <p>
                                    <Link exact to={`/pokemon/${poke.id}/base`}>
                                        <h6>Base</h6>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='poke-info'>
                        {loading2 ? (
                            <h1>Hit play</h1>
                        ) : (
                            <div className="random-poke">
                                <div>
                                    <div>
                                        <h4>Player: 2</h4>
                                    </div>

                                    <div>
                                        <img alt="image" src={getImageURL(id2)} width="150" />
                                    </div>

                                    <div>
                                        <p>
                                            <h2>{pokeData2.name.english} </h2>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="btn">
                    <button type="button" onClick={handleFightBtn}>
                        {" "}
            Fight{" "}
                    </button>
                </div>
                <div>
                    <p>
                        <Link exact to={`/pokelist`}>
                            Goback
            </Link>
                    </p>
                </div>
            </div>
        </div>

    )

}

export default Pokefight;

//=================================================

// import { useParams } from "react-router";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./Pokemon.css";
// import "../App.css";

// const Pokemon = ({ data }) => {
//     console.log(data.length);
//     let { id } = useParams();

//     const [pokeData1, setPokeData1] = useState([]);
//     const [pokeData2, setPokeData2] = useState([]);
//     const [loading1, setLoading1] = useState(true);
//     const [loading2, setLoading2] = useState(true);

//     console.log(pokeData1);
//     console.log(pokeData2);

//     let id2 = Math.floor(Math.random() * data.length);

//     const getImageURL = (pokeId) =>
//         `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;

//     const fetchPokemon1 = async () => {
//         await axios
//             .get(`https://quiet-falls-70006.herokuapp.com/pokemon/${id}`)
//             .then((response) => setPokeData1(response.data))
//             .catch((err) => console.log(err));
//         setLoading1(false);
//     };

//     const fetchPokemon2 = async () => {
//         await axios
//             .get(`https://quiet-falls-70006.herokuapp.com/pokemon/${id2}`)
//             .then((response) => setPokeData2(response.data))
//             .catch((err) => console.log(err));
//         setLoading2(false);
//     };

//     useEffect(() => {
//         fetchPokemon1();
//         /* fetchPokemon2(); */
//     }, []);

//     const handleFightBtn = () => {
//         if (pokeData2.base.HP === '' && pokeData2.base.Attack === '') {
//             alert('hit play button')
//         }
//         else if (
//             pokeData1.base.HP > pokeData2.base.HP &&
//             pokeData1.base.Attack > pokeData2.base.Attack
//         ) {
//             alert("Player 1 Win");
//         } else {
//             alert("player  2 won");
//         }
//     };

//     return (
//         <div className="main-container">
//             <div className="pokefight-battle">
//                 <div className="btn">
//                     <button type="button" onClick={fetchPokemon2}>
//                         {" "}
//             Play{" "}
//                     </button>
//                 </div>

//                 <div className="poke-field">
//                     <div className='poke-info'>
//                         {loading1 ? (
//                             <h1>Loading</h1>
//                         ) : (
//                             <div className="selected-poke">
//                                 <div>
//                                     <h4>Player: 1</h4>
//                                 </div>
//                                 <div>
//                                     <img alt="image" src={getImageURL(id)} width="150" />
//                                 </div>

//                                 <div>
//                                     <p>
//                                         <Link exact to={`/pokemon/${id}/name`}>
//                                             <h2>{pokeData1.name.english}</h2>
//                                         </Link>
//                                     </p>
//                                     <p>
//                                         <Link exact to={`/pokemon/${id}/type`}>
//                                             <h6>Type</h6>
//                                         </Link>
//                                     </p>
//                                     <p>
//                                         <Link exact to={`/pokemon/${id}/base`}>
//                                             <h6>Base</h6>
//                                         </Link>
//                                     </p>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     <div className='poke-info'>
//                         {loading2 ? (
//                             <h1>Hit play</h1>
//                         ) : (
//                             <div className="random-poke">
//                                 <div>
//                                     <div>
//                                         <h4>Player: 2</h4>
//                                     </div>

//                                     <div>
//                                         <img alt="image" src={getImageURL(id2)} width="150" />
//                                     </div>

//                                     <div>
//                                         <p>
//                                             <h2>{pokeData2.name.english} </h2>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 <div className="btn">
//                     <button type="button" onClick={handleFightBtn}>
//                         {" "}
//             Fight{" "}
//                     </button>
//                 </div>
//                 <div>
//                     <p>
//                         <Link exact to={`/pokelist`}>
//                             Goback
//             </Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Pokemon;