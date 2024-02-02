import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Inicio(){
    const [dataUsuarios, setDataUsuarios] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/api/mostrarUsuarios")
        .then((response)=>{
            //console.log(response);
            setDataUsuarios(response.data);
        })
        .catch((err)=>{
            console.log(err)
        });
    }, []);
    const listaUsuarios=dataUsuarios.map((usuario)=>{
        var editar = "/editar/"+usuario.id;
        var borrar = "/borrar/"+usuario.id;

        var foto="http://localhost:3000/images/"+ usuario.foto;
        return(
            <tr className="align-middle">
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.usuario}</td>
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
                    <th>Usuario</th>
                    <th>Foto</th>
                    <th>Editar / Borrar</th>
                </tr>
            </thead>
            <tbody>
                {listaUsuarios}
            </tbody>
        </table>
    )
}