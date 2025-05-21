import CampoTexto from "../campoTexto";
import './Formulario.css'; // com o uso de index
import ListaSuspensa from "../listaSuspensa"; // com o uso de index

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className="Formulario">       
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Times" itens={times} placeholder= "Escolha o seu time"/>
            </form>
        </section>
    );
}
 

export default Formulario;
