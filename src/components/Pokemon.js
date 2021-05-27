import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Pokemon.css";

const Pokemon = ({ data }) => {
  console.log(data.length);
  let { id } = useParams();

  const [pokeData1, setPokeData1] = useState([]);
  const [pokeData2, setPokeData2] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  console.log(pokeData1);
  console.log(pokeData2);

  let id2 = Math.floor(Math.random() * data.length);

  const getImageURL = (pokeId) =>
    `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;

  const fetchPokemon1 = async () => {
    await axios
      .get(`https://quiet-falls-70006.herokuapp.com/pokemon/${id}`)
      .then((response) => setPokeData1(response.data))
      .catch((err) => console.log(err));
    setLoading1(false);
  };

  const fetchPokemon2 = async () => {
    await axios
      .get(`https://quiet-falls-70006.herokuapp.com/pokemon/${id2}`)
      .then((response) => setPokeData2(response.data))
      .catch((err) => console.log(err));
    setLoading2(false);
  };

  useEffect(() => {
    fetchPokemon1();
    /* fetchPokemon2(); */
  }, []);


  const handleFightBtn = () => {
    if(pokeData1.base.HP > pokeData2.base.HP && pokeData1.base.Attack > pokeData2.base.Attack) {
       alert('Player 1 Win')
    }
    else {
      alert('player  2 won')
    }
  }


  return (
    <div className="pokefight-battle">
      <div className="play-btn">
        <button type='button' onClick={fetchPokemon2} > Play </button>
      </div>

      <div className="poke-info">
        <div>
          {loading1 ? (
            <h1>Loading</h1>
          ) : (
            <div>
              <div className="selected-poke">
                <div>
                  <h4>Player: 1</h4>
                </div>
                <div>
                  <img alt="image" src={getImageURL(id)} width="150" />
                </div>

                <div>
                  <p>
                    <Link exact to={`/pokemon/${id}/name`}>
                      <h4>{pokeData1.name.english}</h4>
                    </Link>
                  </p>
                  <p>
                    <Link exact to={`/pokemon/${id}/type`}>
                      Type
                    </Link>
                  </p>
                  <p>
                    <Link exact to={`/pokemon/${id}/base`}>
                      Base
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          {loading2 ? (<h1>Hit play</h1>) :
          ( <div className="random-poke">
          <div>
            <div>
              <h4>Player: 2</h4>
            </div>

            <div>
              <img alt="image" src={getImageURL(id2)} width="150" />
            </div>

            <div>
              <p>
                <h4>{pokeData2.name.english} </h4>
              </p>
            </div>
          </div>
        </div> )}
        </div>

      </div>
      <div className="play-btn">
      <button type='button' onClick={handleFightBtn} > Fight </button>
      </div>
    </div>
  );
};

export default Pokemon;
