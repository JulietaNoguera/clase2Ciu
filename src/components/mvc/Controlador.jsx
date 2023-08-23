import React from "react";
import Vista from './Vista';
import { useState } from "react";
import Modelo from "./Modelo";

const Controlador = () =>{
    const [contador, setcContador]= useState(Modelo.contador);
    const incrementar=()=>{
        Modelo.incrementar();
        setcContador(Modelo.contador)
    }
    const incrementarx2=()=>{
        Modelo.incrementarx2();
        setcContador(Modelo.contador)
    }
    return(
        <>
            <Vista
                contador={contador}></Vista>
                <button onClick={incrementar}>Incrementar</button>
                <button onClick={incrementarx2}>Incrementar x2</button>
            
        </>
    );
}
export default Controlador;

