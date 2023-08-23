import React from "react";
import VistaM from './VistaM';
import { useState } from "react";
import ModeloM from "./ModeloM";

const ModeloDeVista = () =>{
    const [contador, setcContador]= useState(ModeloM.contador);
    const incrementar=()=>{
        ModeloM.incrementar();
        setcContador(ModeloM.contador)
    }
    const incrementarx2=()=>{
        ModeloM.incrementarx2();
        setcContador(ModeloM.contador)
    }
    return(
        <>
            <VistaM
                contador={contador}
                incrementar={incrementar}
                incrementarx2={incrementarx2}
                >
            </VistaM>
        </>
    );
}
export default ModeloDeVista;