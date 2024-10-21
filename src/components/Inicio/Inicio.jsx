import './Inicio.css';

export default function Inicio() {
  return (
    <div className='container-inicio'>
      <div className='container-quadrados'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
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
        <button className='btn-portfolio'>Portfólio</button>
        <div className='quadrado-btn quadrado1'></div>
        <div className='quadrado-btn quadrado2'></div>
        <div className='quadrado-btn quadrado3'></div>
        <div className='quadrado-btn quadrado4'></div>
      </div>

    </div>
  )
}