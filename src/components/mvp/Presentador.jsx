import React from "react";
import Vista from './VistaP';
import { useState } from "react";
import ModeloP from "./ModeloP";

const Presentador = () =>{
    const [contador, setcContador]= useState(ModeloP.contador);
    const incrementar=()=>{
        ModeloP.incrementar();
        setcContador(ModeloP.contador)
    }
    const incrementarx2=()=>{
        ModeloP.incrementarx2();
        setcContador(ModeloP.contador)
    }
    return(
        <>
            <Vista
                contador={contador}
                incrementar={incrementar}
                incrementarx2={incrementarx2}
                >
            </Vista>
        </>
    );
}
export default Presentador;