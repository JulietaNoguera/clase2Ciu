import React from "react";

const VistaP=({contador, incrementar,incrementarx2})=> {
    return(
        <>
        <div>{contador}</div>        
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={incrementarx2}>Incrementar x2</button>
        </>
    )}
;
export default VistaP;