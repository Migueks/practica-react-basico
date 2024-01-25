import { getPokemons } from "@/api/pokemonFetch";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let pokemonAux = getPokemons();
    setPokemons(pokemonAux);
  }, []);

  return (
    <>
      <h1>Pokémon</h1>
      <ul>
        <li>
          <Link
            href={{
              pathname: "/PokemonGenerator",
            }}
          >
            Generar un Pokémon
          </Link>
        </li>
        <br />
        <li>
          <Link
            href={{
              pathname: "/Contact",
            }}
          >
            {" "}
            Página de contacto
          </Link>
        </li>
      </ul>
      <hr />
      <h1>Todos los Pokémons</h1>
      {pokemons.map((pokemon, index) => {
        return (
          <div key={index}>
            <span>{pokemon.id}</span>
            <br />
            <span>{pokemon.nombre} </span>
            <br />
            <span>{pokemon.url} </span>
            <br />
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
            <hr />
          </div>
        );
      })}
    </>
  );
}
