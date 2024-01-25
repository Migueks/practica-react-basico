import { addPokemon, deletePokemonById } from "@/api/pokemonFetch";
import Link from "next/link";
import React, { useState } from "react";

export default function PokemonGenerator() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [details, setDetails] = useState({
    height: "",
    weight: "",
    type: [""],
  });

  const idHandler = (e) => {
    setId(e.target.value);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const urlHandler = (e) => {
    setUrl(e.target.value);
  };
  const detailsHandler = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: name === "type" ? [value] : value,
    }));
  };

  const addPokemonClick = () => {
    alert(`${id}, ${name}, ${url}, ${JSON.stringify(details)}`);
    addPokemon(id, name, url, details);
  };

  return (
    <div>
      <h1>Página generadora de Pokémons</h1>
      <br />
      <div>
        <div>
          <span>Id</span>
          <input type="text" value={id} onChange={idHandler} />
        </div>
        <div>
          <span>Name</span>
          <input type="text" value={name} onChange={nameHandler} />
        </div>
        <div>
          <span>URL</span>
          <input type="text" value={url} onChange={urlHandler} />
        </div>
        <div>
          <span>Height</span>
          <input
            type="text"
            name="height"
            value={details.height}
            onChange={detailsHandler}
          />
        </div>
        <div>
          <span>Weight</span>
          <input
            type="text"
            name="weight"
            value={details.weight}
            onChange={detailsHandler}
          />
        </div>
        <div>
          <span>Type</span>
          <input
            type="text"
            name="type"
            value={details.type[0]}
            onChange={detailsHandler}
          />
        </div>

        <button onClick={addPokemonClick}>Añadir Pokémon</button>
      </div>
      <Link
        href={{
          pathname: "/",
        }}
      >
        {" "}
        Página principal
      </Link>
    </div>
  );
}
