import Link from "next/link";
import React from "react";

export default function Contact() {
  let user = {
    name: "Miguel",
    surname: "López",
    city: "Málaga",
  };

  return (
    <div>
      <h1>Contacto</h1>
      <h3>Nombe: {user.name}</h3>
      <h3>Apellidos: {user.surname}</h3>
      <h3>Ciudad: {user.city}</h3>
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
