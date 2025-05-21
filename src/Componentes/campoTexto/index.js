import './campoTexto.css' // com o uso de index
const CampoTexto = (props) => {

    return (
        <div className="campo-texto">
             <label>
                {props.label}
            </label>
            <input type="text" placeholder= {props.placeholder} />
        </div>
    )
}

export default CampoTexto;