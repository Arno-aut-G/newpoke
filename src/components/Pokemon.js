import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { PokeContext } from "./PokeContext"

const Pokemon = () => {
  let history = useHistory()
  let { id } = useParams();
  console.log(id);
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setPoke } = useContext(PokeContext)

  const handleClick = () => {
    setPoke(pokeData)
    history.push("/pokefight")
  }

  const getImageURL = (pokeId) =>
    `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;

  const fetchPokemon2 = async () => {
    await axios
      .get(`https://quiet-falls-70006.herokuapp.com/pokemon/${id}`)
      .then((response) => setPokeData(response.data))
      .catch((err) => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon2();
  }, []);



  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <div>
            <img alt="pokemon" src={getImageURL(id)} width="150" />
          </div>

          <div>
            <p>
              <Link exact to={`/pokemon/${id}/name`}>
                {pokeData.name.english}
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
          <div>
            <button type="button" onClick={handleClick}>
              POKEFIGHT
              </button>
          </div>
          <div>
            <p>
              <button>
                <Link exact to="/">
                  Go back
                </Link>
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;


// import { useHistory } from "react-router-dom";

// function HomeButton() {
//   let history = useHistory();

//   function handleClick() {
//     history.push("/home");
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       Go home
//     </button>
//   );
// }
