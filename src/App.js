import Banner from './Componentes/Banner'; // sem o uso de index
import Formulario from './Componentes/Formulario';
import { useState } from 'react';
import Time from './Componentes/Time';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado = {aoNovoColaboradorAdicionado}/>
      <Time nome="Programação"/>
      <Time nome= "Frontend"/>
      <Time nome="Data Science"/>
      <Time nome="Devops"/>
      <Time nome="UX e Design"/>
      <Time nome="Mobile"/>
      <Time nome="Inovação e Gestão"/>
    </div>
  );
}

export default App;
