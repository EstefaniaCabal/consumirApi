import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Productos(){
    const [dataProductos, setDataProductos] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/api/mostrarProductos")
        .then((response)=>{
            //console.log(response);
            setDataProductos(response.data);
        })
        .catch((err)=>{
            console.log(err)
        });
    }, []);
    const listaProductos=dataProductos.map((producto)=>{
        var editar = "/editar/"+producto.id;
        var borrar = "/borrar/"+producto.id;

        var foto="http://localhost:3000/images/"+ producto.foto;
        return(
            <tr className="align-middle">
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.costo}</td>
                <td>{producto.brand}</td>
                <td><img src={foto} width="100px" height="100" alt="OLA"></img></td>                
                <td>
                    <Link to={editar}>Editar</Link> / 
                    <Link to={borrar}>Borrar</Link>
                </td>
            </tr>
        );
    });
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Costo</th>
                    <th>Marca</th>
                    <th>Foto</th>
                    <th>Editar / Borrar</th>
                </tr>
            </thead>
            <tbody>
                {listaProductos}
            </tbody>
        </table>
    )
}