import './Portfolio.css';
import Header from '../Header/Header.jsx';
import Menu from '../Menu/Menu.jsx';
import SobreMim from '../SobreMim/SobreMim.jsx';
import BackgroundAnimado from '../BackgroundAnimado/BackgroundAnimado.jsx';
import Tecnologias from '../Tecnologias/Tecnologias.jsx';
import { useState } from 'react';
import Habilidades from '../Habilidades/Habilidades.jsx';
import Projetos from '../Projetos/Projetos.jsx';

export default function Portfolio() {

  const [topoDoQuadrado, setTopoDoQuadrado] = useState(0);
  const [idiomaPT, setIdiomaPT] = useState(true);
  const [temaLight, setTemaLight] = useState(false);

  return (
    <div className={`container-portfolio ${temaLight ? 'tema-claro' : ''}`}>
      <Header setIdiomaPT={setIdiomaPT} setTemaLight={setTemaLight} />
      {topoDoQuadrado === 0 ? <SobreMim idiomaPT={idiomaPT} temaLight={temaLight} /> : null}
      {topoDoQuadrado === 1 ? <Projetos idiomaPT={idiomaPT} temaLight={temaLight} /> : null}
      {topoDoQuadrado === 2 ? <Habilidades idiomaPT={idiomaPT} /> : null}
      {topoDoQuadrado === 3 ? <Tecnologias idiomaPT={idiomaPT} /> : null}
      <BackgroundAnimado />
      <Menu temaLight={temaLight} idiomaPT={idiomaPT} topoDoQuadrado={topoDoQuadrado} setTopoDoQuadrado={setTopoDoQuadrado} />
      <div className='fundo-menu'></div>
    </div>
  )
}