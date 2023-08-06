import React, {useState } from "react";
import Item from "../item";

const ItemListContainer = () => {
    const [listaDeCompras, setListaDeCompras] = useState([])
    const [input, setInput] = useState(``)

    const addItem = () => {
            if (input !== ('')) {
                setListaDeCompras([...listaDeCompras,input])
                setInput(``)
            }
    } 

    const deleteItem = (nombre) => {
        const nuevaListaDeCompras = listaDeCompras.filter(prod => prod !== nombre)
        setListaDeCompras(nuevaListaDeCompras)
    }
    return(  
         <div>
                <input value={input} onChange={(event) => setInput(event.target.value)}/>
                <button onClick={addItem}>Guardar</button>
                {
                    listaDeCompras.length > 0 ? ( 
                    <>
                    {listaDeCompras.map(producto=><Item nombre={producto} deleteItem={deleteItem}/>)}
                    </>

                    

                    ): (
                        <p>No hay nada en la lista</p>
                    )
            }
         </div>
    )

}
export default ItemListContainer