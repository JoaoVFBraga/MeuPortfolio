import { useState } from 'react'
import './Menu.css'

export default function Menu({ idiomaPT, ...props }) {

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


  const opcoes = ['sobre-mim', 'projetos', 'habilidades', 'tecnologias'];
  const adicionaValorAoTopo = () => {
    if ((props.topoDoQuadrado + 1) > 3) {
      props.setTopoDoQuadrado(0);
    } else {
      props.setTopoDoQuadrado(topo => topo + 1);
    }
  }
  const removeValorDoTopo = () => {
    if ((props.topoDoQuadrado - 1) < 0) {
      props.setTopoDoQuadrado(3);
    } else {
      props.setTopoDoQuadrado(topo => topo - 1);
    }
  }

  return (
    <div className='menu-container'>
      <div className='container-setas'>
        <img className='seta-voltar' src={props.temaLight ? "icones/seta-dark.png" : "icones/seta-icone.png"} alt="" onClick={() => {
          subtrairRotacao();
          removeValorDoTopo();
        }} />
        <img className='seta-avancar' src={props.temaLight ? "icones/seta-dark.png" : "icones/seta-icone.png"} alt="" onClick={() => {
          adicionaValorAoTopo();
          adicionarRotacao();
        }} />
      </div>
      <div className='container-opcoes' style={{ transform: `rotate(${rotacao}deg)` }}>
        <div className={`opcao ${numeroDeCliques % 2 == 0 ? 'sobre-mim-espacado' : 'sobre-mim'} ${opcoes[props.topoDoQuadrado] == 'sobre-mim' ? 'opcao-selecionada' : ''}`} style={{ transform: `rotate(${rotacaoCalculada}deg)` }}>{idiomaPT ? 'Sobre Mim' : 'About Me'}</div>
        <div className={`opcao ${numeroDeCliques % 2 == 0 ? 'tecnologias-reduzido' : 'tecnologias'} ${opcoes[props.topoDoQuadrado] == 'tecnologias' ? 'opcao-selecionada' : ''}`} style={{ transform: `rotate(${rotacaoCalculada}deg)` }}>{idiomaPT ? 'Tecnologias' : 'Technologies'}</div>
        <div className={`opcao ${numeroDeCliques % 2 == 0 ? 'habilidades-espacado' : 'habilidades'} ${opcoes[props.topoDoQuadrado] == 'habilidades' ? 'opcao-selecionada' : ''}`} style={{ transform: `rotate(${rotacaoCalculada}deg)` }}>{idiomaPT ? 'Habilidades' : 'Skills'}</div>
        <div className={`opcao ${numeroDeCliques % 2 == 0 ? 'projetos-reduzido' : 'projetos'} ${opcoes[props.topoDoQuadrado] == 'projetos' ? 'opcao-selecionada' : ''}`} style={{ transform: `rotate(${rotacaoCalculada}deg)` }}>{idiomaPT ? 'Projetos' : 'Projects'}</div>
      </div>
    </div>
  )
}