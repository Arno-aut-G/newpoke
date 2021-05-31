import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

const PokemonInfo = () => {
  let { id } = useParams();
  let { info } = useParams();

  const [pokeData, setPokeData] = useState();
  const [loading, setLoading] = useState(true);

  const getImageURL = (pokeId) =>
    `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;

  const fetchPokemon2 = async () => {
    await axios
      .get(`https://quiet-falls-70006.herokuapp.com/pokemon/${id}/${info}`)
      .then((response) => setPokeData(response.data))
      .catch((err) => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon2();
  }, []);

  console.log(pokeData);

  return (
    <div className='main-container'>

      <div>
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              <div>
                <img alt="image" src={getImageURL(id)} width="150" />
              </div>

              <div>
                {info === "name" ? (
                  <div>
                    <h4>Name in Different Languages</h4>
                    <p>English Name: {pokeData.english}</p>
                    <p>Japanese Name: {pokeData.japanese}</p>
                    <p>Chinese Name: {pokeData.chinese}</p>
                    <p>French Name: {pokeData.french}</p>
                  </div>
                ) : info === "base" ? (
                  <div>
                    <h4>List of Base</h4>
                    <p>HP: {pokeData.HP}</p>
                    <p>Attack: {pokeData.Attack}</p>
                    <p>Defense: {pokeData.Defense}</p>
                    <p>Sp. Attack: {pokeData["Sp. Attack"]}</p>
                    <p>Sp. Defense: {pokeData["Sp. Defense"]}</p>
                    <p>Speed: {pokeData.Speed}</p>
                  </div>
                ) : info === "type" ? (
                  <div>
                    <h4>List of Type</h4>
                    <div>
                      {pokeData.map((e) => (
                        <p>{e}</p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div> Data not found </div>
                )}
              </div>

              <div>
                <p>
                  <botton>
                    <Link exact to={`/pokemon/${id}`}>
                      Goback
                    </Link>
                  </botton>
                </p>
              </div> 
              
            </div>
          )}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default PokemonInfo;
