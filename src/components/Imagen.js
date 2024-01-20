import { useState } from "react";

export function Imagen() {
  const [estadoPuerta, setEstadoPuerta] = useState("cerrada");

  function open_door() {
    setEstadoPuerta("open_door");
  }

  function door() {
    setEstadoPuerta("door");
  }

  return (
    <>
      <h1>Puerta abierta o puerta cerrada</h1>
      <p>
        <img
          src={ process.env.PUBLIC_URL + "/imagenes/" +  estadoPuerta +  ".png" } 
          alt={`Puerta ${estadoPuerta}`}
        />
      </p>
      <p>
        <input type="button" value="<" onClick={open_door} />
        <input type="button" value=">" onClick={door} />
      </p>
      <div>{estadoPuerta === "open_door" ? "Puerta Abierta" : "Puerta Cerrada"}</div>
    </>
  );
}

