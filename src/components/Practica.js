import { useState } from "react";

export function Practica() {
  const [contador, setContador] = useState(0);

  // Para incrementar el contador mientras NO llegue a cierto numero
  const incrementar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    } else {
      setContador(0);
    }
  };

  //Para decrremetno < 0 
  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      setContador(0);
    }
  };

  //Esto lo regresa a 0
  const regresarCero = () => {
    setContador(0);
  };

  return (
    <>
      <div>Contador: {contador}</div>
      <button onClick={regresarCero}>Regresar</button>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </>
  );
}
