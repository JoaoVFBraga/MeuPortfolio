import './Habilidades.css'

export default function Habilidades() {
  return (
    <div className='formatacao-container habilidades-geral'>
      <h2>Habilidades</h2>
      <p className='texto-habilidades'>Sei que, além dos conhecimentos técnicos, as habilidades interpessoais são essenciais na área de desenvolvimento. Por isso, busco aprimorar continuamente minhas soft skills. Abaixo, destaco algumas das habilidades que considero fundamentais para agregar valor aos projetos e ao ambiente de trabalho.</p>
      <div className='habilidades-container'>
        <div className='habilidade'>
          <h3>Trabalho em equipe <img src="icones/grupo-icone.png" alt="" /></h3>
          <p>Valorizo o trabalho em equipe e acredito que a colaboração é essencial para o sucesso de qualquer projeto.</p>
        </div>
        <div className='habilidade'>
          <h3>Criatividade <img src="icones/lampada-icone.png" alt="" /></h3>
          <p>Sou uma pessoa criativa, com facilidade para pensar fora da caixa e encontrar soluções inovadoras para desafios.</p>
        </div>
        <div className='habilidade'>
          <h3>Aprendizagem <img src="icones/aprender-icone.png" alt="" /></h3>
          <p>Tenho facilidade para aprender rapidamente e me adaptar a novas situações e tecnologias.</p>
        </div>
      </div>
    </div>
  )
}