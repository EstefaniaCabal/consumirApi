import { useState } from "react";

export function Texto(){
//   var texto="Encendido";

    var [texto, setTexto] = useState ("encendido");
    function switch2(){
        if(texto==="encendido"){
            setTexto("Apagado");
        }
        else{
            setTexto("encendido")
        }
    }
    return (
        <>
        <div>{texto}</div>
        <button onClick={switch2}>Apagar</button>
        </>
    );
}