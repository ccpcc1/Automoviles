import React, { Component } from 'react';
import axios from 'axios';
import { URI_BASE } from "../constantes";

class FormularioAutomovil extends Component{
    constructor()
    {
        super(props);
        this.state={
            Automovil:
            {
                automovil:{
                    nombre:"",
                    modelo: "",
                    precio: "",            
                    esta_reparado: "",
                },
                error:''
            }
        }
    }

    crearAutomovil=(e)=>
    {
        e.preventDefault();
        const datos=
        {
          "Nombre": e.target.children[1].value,
          "modelo":  e.target.children[3].value,
          "Marca":  e.target.children[5].value,
          "Estado":  e.target.children[7].value
        }
        axios.post(`${URI_BASE}/automoviles/create`,datos)
       .then(()=>window.location.reload())
    }
    render()
    {
        return(
            <>
                         

                <form onSubmit={(e)=>this.crearAutomovil(e)}>
                
                    <label >Nombre:</label>
                    <input  />
                    <label >modelo:</label>
                    <input  />
                    <label >Marca:</label>
                    <input  />
                    <label >Estado:</label>
                    <input  />
                
                    <button className="btn btn-primary" type="submit">Crear</button>
                </form>
            </>
        );
    }

}
export default FormularioAutomovil;