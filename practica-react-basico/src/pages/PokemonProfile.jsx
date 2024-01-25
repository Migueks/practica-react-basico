import { deletePokemonById } from "@/api/pokemonFetch";
import ListPokemon from "@/components/ListPokemon";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function PokemonProfile() {
  const router = useRouter();
  const { id } = router.query;

  const deletePokemon = () => {
    deletePokemonById(id);
    router.back();
  };

  return (
    <div>
      <h1>Perfil Pokémon</h1>
      <ListPokemon pokemonId={id} />
      <div>
        <button onClick={deletePokemon}>Eliminar Pokémon</button>
      </div>
      <Link
        href={{
          pathname: "/",
        }}
      >
        Página principal
      </Link>
    </div>
  );
}
