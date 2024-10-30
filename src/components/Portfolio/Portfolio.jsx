import './Portfolio.css';
import Header from '../Header/Header.jsx';
import Menu from '../Menu/Menu.jsx';
import SobreMim from '../SobreMim/SobreMim.jsx';
import BackgroundAnimado from '../BackgroundAnimado/BackgroundAnimado.jsx';
import Tecnologias from '../Tecnologias/Tecnologias.jsx';
import { useState } from 'react';
import Habilidades from '../Habilidades/Habilidades.jsx';

export default function Portfolio() {

  const [topoDoQuadrado, setTopoDoQuadrado] = useState(0);

  return (
    <div className='container-portfolio'>
      <Header />
      {topoDoQuadrado === 0 ? <SobreMim /> : null}
      {topoDoQuadrado === 2 ? <Habilidades /> : null}
      {topoDoQuadrado === 3 ? <Tecnologias /> : null}
      <BackgroundAnimado />
      <Menu topoDoQuadrado={topoDoQuadrado} setTopoDoQuadrado={setTopoDoQuadrado} />
    </div>
  )
}