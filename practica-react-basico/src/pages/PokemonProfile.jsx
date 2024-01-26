import { deletePokemonById, modifyName } from "@/api/pokemonFetch";
import ListPokemon from "@/components/ListPokemon";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function PokemonProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [newName, setNewName] = useState("");
  const [hidden, setHidden] = useState(false);

  const hiddenHandler = () => {
    let hiddenAux = hidden;
    setHidden(!hiddenAux);
  };

  const deletePokemon = () => {
    deletePokemonById(id);
    router.back();
  };

  const modifyPokemonHandler = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h1>Perfil Pokémon</h1>
      <div hidden={hidden}>
        <ListPokemon pokemonId={id} />
      </div>
      <div>
        <button onClick={deletePokemon}>Eliminar Pokémon</button>
      </div>
      <br />
      <div hidden={!hidden}>
        <input value={newName} onChange={modifyPokemonHandler} />
        <button
          onClick={() => {
            modifyName(id, newName);
          }}
          onChange={hiddenHandler}
        >
          {" "}
          Cambiar nombre{" "}
        </button>
      </div>
      <div onClick={hiddenHandler}>
        <button>Editar Pokémon</button>
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
