import './SobreMim.css';

export default function SobreMim() {
  return (
    <div className='formatacao-container'>
      <h2>Sobre Mim</h2>
      <div className='grid-sobre-mim'>
        <div className='sobre-mim-informacoes'>
          <p>Olá, me chamo João Braga! Tenho 22 anos, estou cursando Análise e Desenvolvimento de Sistemas e paralelamente ao curso, estudo sobre desenvolvimento web. Meu foco é criar sites com beleza e responsividade.</p>
          <div className='container-links'>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-furlan-braga-2b54a7282/" target='blank'>Linkedin <img src="/icones/linkedin-icone.png" alt="" /></a>
            <a href="https://github.com/JoaoVFBraga" target='blank'>GitHub <img src="/icones/github-icone.png" alt="" /></a>
            <a href="https://wa.me/5519994371982" target='blank'>WhatsApp <img src="/icones/whatsapp-icone.png" alt="" /></a>
          </div>
          <button className='btn-cv'>Baixar CV <img src="/icones/documento-icone.png" alt="" /></button>
        </div>
        <div className='sobre-mim-imagens'>
          <div className='container-img'>
            <img src="/fotos/minha-foto.jpeg" alt="" />
            <div className='quadrado-foto quadrado-foto1'></div>
            <div className='quadrado-foto quadrado-foto2'></div>
            <div className='quadrado-foto quadrado-foto3'></div>
          </div>
        </div>
      </div>
    </div>
  )
}