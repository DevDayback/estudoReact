import './listaSuspensa.css'

const listaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor} >
                <option value="">Selecione um item</option>
            {props.itens.map(item => {
                return <option key={item}>{item}</option>
            })}
            </select>
        </div>

    )
}

export default listaSuspensa;