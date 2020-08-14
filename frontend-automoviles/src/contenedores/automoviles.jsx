import React, { Component } from 'react';
import axios from 'axios';
import { URI_BASE } from "../constantes";
import Automovil from "../components/automovil";

class Automoviles extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            automoviles:[],
            error: false
        }
    }

    componentDidMount = () => {
        this.obtenerAutomoviles();
    }

    obtenerAutomoviles= () => {
        axios.get(`${URI_BASE}/automoviles`)
        .then(response => {
            this.setState({
                automoviles:response.data,
                error:''
            })
            console.log(response.data)
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
            console.log(error.message)          
            
        })
    }

    render(){
        const {automoviles
            ,error} = this.state;
/*
        if(error)
        {
        return <div>sucedio un error al llamar la aplicación: {error} </div>
        } */   
        return(
            <>
            <div className="container-fluid">
                <h1>Automoviles</h1>
                <link to="/"></link>
                
                <link to="/"></link>
                {automoviles.map(({id,nombre,precio,modelo,esta_reparado }) => (
                    <Automovil  key={id} nombre={nombre} precio={precio} modelo={modelo} esta_reparado={esta_reparado}></Automovil>
                ))}
            </div>    
            </>
        );
    }
}


export default Automoviles;