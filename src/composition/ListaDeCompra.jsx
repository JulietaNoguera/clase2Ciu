import React from "react";
import ItemDeCompra from "./ItemDeCompras";

const ListaDeCompra =(props)=>{
    return(
        <ul>
            {
                props.items.map((item, index)=>(
                    <ItemDeCompra
                    key={indexedDB}
                    nombre={item.nombre}
                    cantidad= {item.cantidad}
                    />
                ))
            }
        </ul>
    )
}

export default ListaDeCompra;