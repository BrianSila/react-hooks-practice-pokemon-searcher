import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [FormData, setFormData] = useState({
    name: "",
    hp: "",
    "Front Image URL": "",
    "Back Image URL": "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };

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

  function handlesubmit(evt) {
    evt.preventDefault();
    const newPokemon = {
      name: FormData.name,
      hp: FormData.hp,
      sprites: {
        front: FormData["Front Image URL"],
        back: FormData["Back Image URL"],
      },
    };

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((response) => response.json())
      .then((data) => {
        setPokemons([...pokemons, data]);
        setFormData({
          name: "",
          hp: "",
          "Front Image URL": "",
          "Back Image URL": "",
        });
      })
      .catch((error) => console.error("Error adding Pokémon:", error));
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        handlesubmit={handlesubmit}
        handleChange={handleChange}
        formdata={FormData}
      />
      <br />
      <Search onSearch={handleSearch} value={searchTerm} />
      <br />
      <PokemonCollection pokemons={filteredPokemons} />
    </Container>
  );
}

export default PokemonPage;
