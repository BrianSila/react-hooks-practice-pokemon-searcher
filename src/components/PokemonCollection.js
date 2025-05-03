import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection() {
  return (
    <Card.Group itemsPerRow={6}>
      <PokemonCard />
    </Card.Group>
  );
}

export default PokemonCollection;
