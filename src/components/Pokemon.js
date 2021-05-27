import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemon = ({ data }) => {
  console.log(data);
  let { id } = useParams();
  console.log(id);
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);

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
            <img alt="image" src={getImageURL(id)} width="150" />
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
            <p>
              <button>
                <Link exact to="/">
                  Goback
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
