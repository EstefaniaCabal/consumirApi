import React, { useState } from "react";

export const ListaDoble = () => {
  const luz = ["apagado", "encendido al 25%", "encendido en 50%", "encendido al 75%", "encendido al 100%"];
  const [intensidad, setIntensidad] = useState(0);

  const aumentarIntensidad = () => {
    setIntensidad((prevIntensidad) => (prevIntensidad + 1) % luz.length);
  };

  const disminuirIntensidad = () => {
    setIntensidad((prevIntensidad) => (prevIntensidad - 1 + luz.length) % luz.length);
  };

  const resetearIntensidad = () => {
    setIntensidad(0);
  };

  return (
    <>
      <div>La luz está: {luz[intensidad]}</div>
      <button onClick={aumentarIntensidad}>Aumentar</button>
      <button onClick={disminuirIntensidad}>Disminuir</button>
      <button onClick={resetearIntensidad}>Resetear</button>
    </>
  );
};
