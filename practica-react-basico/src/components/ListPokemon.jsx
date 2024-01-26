import { getPokemonById } from "@/api/pokemonFetch";
import React, { useEffect, useState } from "react";

export default function ListPokemon(props) {
  const { pokemonId } = props;
  const [pokemonList, setPokemonList] = useState({});

  useEffect(() => {
    const pokemonAux = getPokemonById(pokemonId);
    setPokemonList(pokemonAux);
  }, [pokemonId]);

  return (
    <div>
      <h1>Pokemon Details</h1>
      <br />
      <div>
        <span>Id: {pokemonList.id}</span>
      </div>
      <br />
      <div>
        <span>Name: {pokemonList.name}</span>
      </div>
      <br />
      <div>
        <span>Url: {pokemonList.url}</span>
      </div>
      <br />
    </div>
  );
}
