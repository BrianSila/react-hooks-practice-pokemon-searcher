import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard() {
  const [Pokemon, SetPokemon] = useState([]);
  const [flipimg, Setflipimg] = useState({});
  
  function handleimgflip(id) {
    Setflipimg((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then((data) => SetPokemon(data))
      .catch((error) => {
        console.log(`error fetching`, error);
      });
  }, []);

  return Pokemon.map((pokemon) => (
    <Card key={pokemon.id}>
      <div>
        <div className="image" onClick={() => handleimgflip(pokemon.id)}>
          <img
            src={
              flipimg[pokemon.id] ? pokemon.sprites.back : pokemon.sprites.front
            }
            alt={`${pokemon.name} sprite`}
          />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  ));
}

export default PokemonCard;
