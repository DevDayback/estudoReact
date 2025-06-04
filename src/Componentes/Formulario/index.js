import CampoTexto from "../campoTexto";
import './Formulario.css'; // com o uso de index
import ListaSuspensa from "../listaSuspensa"; // com o uso de index
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {


    const[Nome, setNome] = useState('');
    const[Cargo, setCargo] = useState('');
    const[Imagem, setImagem] = useState('');
    const[Time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault(); // previne o comportamento padrão do form de recarregar a página
        props.aoColaboradorCadastrado({
            Nome,
            Cargo,
            Imagem,
            Time
        });
        setNome(''); // Limpa o campo Nome após o envio
        setCargo(''); // Limpa o campo Cargo após o envio
        setImagem(''); // Limpa o campo Imagem após o envio
        setTime(''); // Limpa o campo Time após o envio
    }


    return (
        <section className="Formulario">       
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                     obrigatorio ={true} 
                     label="Nome" 
                     placeholder="Digite seu Nome"
                     valor={Nome}
                     aoAlterado={valor => setNome(valor)} // Atualiza o estado Nome com o valor digitado
                />
                <CampoTexto
                 obrigatorio ={true}
                 label="Cargo" 
                 placeholder="Digite seu Cargo" 
                    valor={Cargo}
                    aoAlterado={valor => setCargo(valor)}  // Atualiza o estado Cargo com o valor digitado
                />
                <CampoTexto
                 label="Imagem"
                 placeholder="Digite o endereço da imagem"
                 valor={Imagem}
                 aoAlterado={valor => setImagem(valor)} // Atualiza o estado Imagem com o valor digitado
                />
                <ListaSuspensa
                 obrigatorio ={true}
                 label="Time"
                 itens={props.nomeDosTimes} // Recebe a lista de times como propriedade
                 placeholder= "Escolha o seu time"
                 aoAlterado={valor => setTime(valor)} // Atualiza o estado Time com o valor selecionad
                />
                <Botao texto = "Criar Card"/>
            </form>
        </section>
    );
}
 

export default Formulario;
