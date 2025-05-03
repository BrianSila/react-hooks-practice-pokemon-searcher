import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [flipimg, setFlipImg] = useState(false);

  function handleImgFlip() {
    setFlipImg((prevState) => !prevState);
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleImgFlip}>
          <img
            src={flipimg ? pokemon.sprites.back : pokemon.sprites.front}
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
  );
}

export default PokemonCard;
