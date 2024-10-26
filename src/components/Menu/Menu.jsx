import { useState, useEffect } from 'react'
import './Menu.css'

export default function Menu() {

  const [numeroDeCliques, setnumeroDeCliques] = useState(1);
  const [rotacao, setRotacao] = useState(0);
  const adicionarRotacao = () => {
    setRotacao(rotacao + 90);
    setnumeroDeCliques(numeroDeCliques + 1);
  }
  const subtrairRotacao = () => {
    setRotacao(rotacao - 90);
    setnumeroDeCliques(numeroDeCliques + 1);
  }
  const rotacaoCalculada = rotacao > 0 ? -rotacao : (rotacao * -2) / 2;

  return (
    <div className='menu-container'>
      <div className='container-setas'>
        <img className='seta-voltar' src="icones/seta-icone.png" alt="" onClick={subtrairRotacao} />
        <img className='seta-avancar' src="icones/seta-icone.png" alt="" onClick={adicionarRotacao} />
      </div>
      <div className='container-opcoes' style={{ transform: `rotate(${rotacao}deg)` }}>
        <div className={`opcao ${numeroDeCliques % 2 == 0 ? 'sobre-mim-espacado' : 'sobre-mim'}`} style={{ transform: `rotate(${rotacaoCalculada}deg)` }}>Sobre Mim</div>
        <div className={`opcao ${numeroDeCliques % 2 == 0 ? 'tecnologias-reduzido' : 'tecnologias'}`} style={{ transform: `rotate(${rotacaoCalculada}deg)` }}>Tecnologias</div>
        <div className={`opcao ${numeroDeCliques % 2 == 0 ? 'habilidades-espacado' : 'habilidades'}`} style={{ transform: `rotate(${rotacaoCalculada}deg)` }}>Habilidades</div>
        <div className={`opcao ${numeroDeCliques % 2 == 0 ? 'projetos-reduzido' : 'projetos'}`} style={{ transform: `rotate(${rotacaoCalculada}deg)` }}>Projetos</div>
      </div>
    </div>
  )
}