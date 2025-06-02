import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria};
    return (
        <section className="time" style = {css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            {props.colaboradores.map(colaborador => <Colaborador nome = {colaborador.Nome} cargo = {colaborador.Cargo} imagem = {colaborador.Imagem}/>)
            }

        </section>
    );
}

export default Time;