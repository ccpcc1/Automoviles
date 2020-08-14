import React from "react";


//los props que recibe son nombre,precio,modelo,esta_reparado y img
const Automovil=({nombre,precio,modelo,esta_reparado})=>
{
    return(
        <div>
            <h1>{nombre}</h1>
            <p>{modelo}</p>
            <p>{precio}</p>
            <p><strong>{esta_reparado}</strong></p>
        </div>
    )
}

export default Automovil;