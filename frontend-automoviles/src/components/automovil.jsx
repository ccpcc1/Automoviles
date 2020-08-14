import React from "react";


//los props que recibe son nombre,precio,modelo,esta_reparado y img
const Automovil=({nombre,precio,modelo,esta_reparado,evento})=>
{
    return(
        <div className="row">
            <div className="card rounded col-sm-3 shadow-sm my-3 mx-3">
                <div className="card-body">
                    <h1 className="card-title">{nombre}</h1>
                    <p  className="card-title">{modelo}</p>
                    <p  className="card-title">{precio}</p>
                    <p><strong>{esta_reparado}</strong></p>
                    <button onClick={evento} >ver más</button>
                </div>
            </div>
        </div>
    )
}

export default Automovil;