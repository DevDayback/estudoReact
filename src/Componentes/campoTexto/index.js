import { useState } from 'react'
import './campoTexto.css' // com o uso de index
const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...` // Modifica o placeholder para incluir reticências

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value) // Chama a função aoAlterado passando o valor do input
        // console.log("Campo alterado =>", evento.target.value); // Log para verificar o valor digitado
    }

    return (
        <div className="campo-texto">
             <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder={placeholderModificado} />
        </div>
    )
}

export default CampoTexto;