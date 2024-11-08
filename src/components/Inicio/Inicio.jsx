import { useState } from 'react';
import './Inicio.css';
import BackgroundAnimado from '../BackgroundAnimado/BackgroundAnimado';

export default function Inicio(props) {

  const [escondeInicio, setEscondeInicio] = useState(false);
  const handleInicio = () => {
    setEscondeInicio(true);
    setTimeout(() => {
      props.setExibePortfolio(true)
    }, 1500)
  }

  return (
    <div className='container-background'>
      <BackgroundAnimado />
      <div className={`container-inicio ${escondeInicio ? 'retiraContainer' : ''}`}>
        <div className='conteudo-centralizado'>
          <div className='container-nome'>
            <span>J</span>
            <span>O</span>
            <span>Ã</span>
            <span>O</span>
            <span>B</span>
            <span>R</span>
            <span>A</span>
            <span>G</span>
            <span>A</span>
          </div>
          <div className='container-desenvolvedor'>
            <p>&lt;Desenvolvedor Front-End/&gt;</p>
          </div>
        </div>
        <div className='btn-portfolio-container'>
          <button className='btn-portfolio' onClick={handleInicio}>Portfólio</button>
          <div className='quadrado-btn quadrado1'></div>
          <div className='quadrado-btn quadrado2'></div>
          <div className='quadrado-btn quadrado3'></div>
          <div className='quadrado-btn quadrado4'></div>
          <div className='quadrado-btn quadrado5'></div>
        </div>
      </div>
    </div>
  )
}