import { useState } from "react"

const Item = ({nombre, deleteItem}) => {
    const [marcado, setMarcado] = useState(false)
    return(
        <div> 
            <p>{nombre}</p>
            <button onClick={() => deleteItem(nombre)}>Borrar</button>
            <button onClick={() => setMarcado(!marcado)}>
                {marcado ? `Desmarcar` : `Marcar`}
            </button>

        </div> 
    )
 }


export default Item