import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemons(data))
      .catch((error) => console.error("Error fetching Pokémon:", error));
  }, []);

  function handleSearch(evt) {
    setSearchTerm(evt.target.value);
  }

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search onSearch={handleSearch} value={searchTerm} />
      <br />
      <PokemonCollection pokemons={filteredPokemons} />
    </Container>
  );
}

export default PokemonPage;
