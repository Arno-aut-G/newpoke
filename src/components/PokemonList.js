import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const PokemonList = ({data}) => {
      
    const [search, setSearch] = useState("");

    useEffect(() => {
        setSearch("");
      }, []);

    return(
        <div>
                <div>
                  <h3>List of pokemon</h3>
                </div>
                <input
                  type="text"
                  placeholder="Search.."
                  onChange={(event) => setSearch(event.target.value)}
                />
                {data &&
                  data
                    .filter((e) => {
                      if (search === "") {
                        return e;
                      } else if (
                        e.name.english
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      ) {
                        return search;
                      }
                    })
                    .map((e, index) => {
                      return (
                        <p key={index}>
                          <Link exact to={`/pokemon/${e.id}`}>
                            {" "}
                            {e.name.english}{" "}
                          </Link>
                        </p>
                      );
                    })}
              </div>
    )
}

export default PokemonList;