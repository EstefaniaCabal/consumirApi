import React from "react";
import ReactDom from "react-dom/client";
import { Contador } from "./components/Contador";
import { Texto } from "./components/Texto";
import { Practica } from "./components/Practica";
import { ListaDoble } from "./components/ListaDoble"


const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
        <Contador/>
        <Texto/>
        <Practica/>
        <ListaDoble/>
    </>

)