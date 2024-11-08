import './SobreMim.css';

export default function SobreMim({ idiomaPT, temaLight }) {
  return (
    <div className='formatacao-container'>
      <h2>{idiomaPT ? 'Sobre Mim' : 'About Me'}</h2>
      <div className='grid-sobre-mim'>
        <div className='sobre-mim-informacoes'>
          <p>{idiomaPT ? "Olá, me chamo João Braga! Tenho 22 anos, estou cursando Análise e Desenvolvimento de Sistemas e paralelamente ao curso, estudo sobre desenvolvimento web. Meu foco é criar sites com beleza e responsividade." : "Hi there, my name is João Braga! I am 22 years old, currently studying Systems Analysis and Development, and alongside my course, I’m learning about web development. My focus is on creating beautiful and responsive websites."}</p>
          <div className='container-links'>
            <div>
              <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-furlan-braga-2b54a7282/" target='blank'>Linkedin <img src={"/icones/seta-diagonal-icone.png"} alt="" /></a>
            </div>
            <div>
              <a href="https://github.com/JoaoVFBraga" target='blank'>GitHub <img src={"/icones/seta-diagonal-icone.png"} alt="" /></a>
            </div>
            <div>
              <a href="https://wa.me/5519994371982" target='blank'>WhatsApp <img src={"/icones/seta-diagonal-icone.png"} alt="" /></a>
            </div>
          </div>
          <div className='botao-sobre-mim'>
            <a href='/cv/cv-joao-braga.pdf' download={'cv-joao-braga.pdf'} type='application/pdf' className='btn-cv'>{idiomaPT ? 'Baixar CV' : "Download CV"}<img src={"/icones/documento-icone.png"} alt="" /></a>
          </div>
        </div>
        <div className='sobre-mim-imagens'>
          <div className='container-img'>
            <img src="/photo.jpeg" alt="" />
            <div className='quadrado-foto quadrado-foto1'></div>
            <div className='quadrado-foto quadrado-foto2'></div>
            <div className='quadrado-foto quadrado-foto3'></div>
          </div>
        </div>
      </div>
    </div>
  )
}