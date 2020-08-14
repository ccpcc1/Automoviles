import React, { Component } from 'react';
import axios from 'axios';
import { URI_BASE } from "../constantes";



class detalleAutomovil extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            automovil:{
                id:"",
                nombre:"",
                modelo: "",
                precio: "",            
                esta_reparado: "",
            },
            error:''
        }
    }

    componentDidMount=()=>
    {
        const { match: { params: { id } } } = this.props;
        axios.get(`${URI_BASE}/automoviles/${id}`)
        .then(response => {
            this.setState({
                automovil: response.data,
            })
        })
        .catch(error =>
        {
            this.setState(
                {
                    error: error.message
                }
            )
        })
    }

    deleteEmploye=(id)=>
    { 
        axios.delete(`${URI_BASE}/automoviles/${id}`)
        .then(()=>this.props.history.push('/automoviles'))
          
    }


    render()
    {
        const {automovil,error} = this.state;
        if(error)
        {
        return <div>sucedio un error al llamar la aplicacion: {error} </div>
        } 
        return(
       
            <div className="">
                <h1>{automovil.nombre}</h1>
                <h5>Modelo: {automovil.modelo}</h5>
                <h5>Precio: {automovil.precio}</h5>               
                <h5>Estado: {(automovil.esta_reparado)?"esta reparado":"En reparación"}</h5>
                <button className="btn-danger" onClick={()=>this.deleteEmploye(automovil.id)} >Eliminar</button>
                <link className="btn btn-primary btn-Change" path="/automoviles/actualizar" >Modificar</link>
            </div>
        );
    }
}

export default detalleAutomovil;