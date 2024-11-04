import './Habilidades.css'

export default function Habilidades({ idiomaPT }) {
  return (
    <div className='formatacao-container habilidades-geral'>
      <h2>{idiomaPT ? 'Habilidades' : 'Skills'}</h2>
      <p className='texto-habilidades'>{idiomaPT ? "Sei que, além dos conhecimentos técnicos, as habilidades interpessoais são essenciais na área de desenvolvimento. Por isso, busco aprimorar continuamente minhas soft skills. Abaixo, destaco algumas das habilidades que considero fundamentais para agregar valor aos projetos e ao ambiente de trabalho." : "I understand that, beyond technical knowledge, interpersonal skills are essential in the development field. Therefore, I continuously strive to improve my soft skills. Below, I highlight some of the skills I consider fundamental for adding value to projects and the workplace environment."}</p>
      <div className='habilidades-container'>
        <div className='habilidade'>
          <h3>{idiomaPT ? 'Trabalho em equipe' : 'Teamwork'}<img src="icones/grupo-icone.png" alt="" /></h3>
          <p>{idiomaPT ? "Valorizo o trabalho em equipe e acredito que a colaboração é essencial para o sucesso de qualquer projeto." : "I value teamwork and believe that collaboration is essential for the success of any project."}</p>
        </div>
        <div className='habilidade'>
          <h3>{idiomaPT ? 'Criatividade' : 'Creativity'}<img src="icones/lampada-icone.png" alt="" /></h3>
          <p>{idiomaPT ? "Sou uma pessoa criativa, com facilidade para pensar fora da caixa e encontrar soluções inovadoras para desafios." : "I am a creative person, skilled at thinking outside the box and finding innovative solutions to challenges."}</p>
        </div>
        <div className='habilidade'>
          <h3>{idiomaPT ? 'Aprendizagem' : 'Learning'}<img src="icones/aprender-icone.png" alt="" /></h3>
          <p>{idiomaPT ? "Tenho facilidade para aprender rapidamente e me adaptar a novas situações e tecnologias." : "I am quick to learn and adapt to new situations and technologies."}</p>
        </div>
      </div>
    </div>
  )
}