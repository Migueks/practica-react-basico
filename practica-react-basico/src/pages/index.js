import { getPokemons } from "@/api/pokemonFetch";
import Link from "next/link";
import { useEffect, useState } from "react";
import pokemonImage from "@/api/pokemon-img";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let pokemonAux = getPokemons();
    setPokemons(pokemonAux);
  }, []);

  return (
    <>
      <ul className="header">
        <h1>Pokémon</h1>
        <img
          className="poke-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png"
        />
        <li className="header-list">
          <Link
            href={{
              pathname: "/PokemonGenerator",
            }}
          >
            Generar un Pokémon
          </Link>
        </li>
        <img
          className="poke-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png"
        />
        <br />
        <li className="header-list">
          <Link
            href={{
              pathname: "/Contact",
            }}
          >
            {" "}
            Página de contacto
          </Link>
        </li>
        <img
          className="poke-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png"
        />
      </ul>
      <hr />
      <h1 className="title-pokemon">Todos los Pokémons</h1>
      {pokemons.map((pokemon, index) => {
        return (
          <div className="list-pokemon" key={index}>
            <div className="header-nav">
              <span className="header-nav-list">Name: {pokemon.nombre} </span>
              <br />
              <span className="header-nav-list">Id: {pokemon.id}</span>
              <br />
              <span className="header-nav-list">URL: {pokemon.url} </span>
            </div>
            <br />
            <img className="image" src={pokemonImage[pokemon.nombre]} />
            <br />

            <div className="header-nav-list">
              <Link
                href={{
                  pathname: "PokemonProfile",
                  query: {
                    id: pokemon.id,
                  },
                }}
              >
                Ver perfil Pokémon
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
