import './Tecnologias.css';

export default function Tecnologias({ idiomaPT }) {

  return (
    <div className='formatacao-container'>
      <h2>{idiomaPT ? 'Tecnologias' : 'Technologies'}</h2>
      <p className='texto-tecnologias'>{idiomaPT ? "O foco dos meus estudos está no desenvolvimento web, então adquiri conhecimentos em HTML, CSS, JavaScript e React. Também tenho conhecimentos em ferramentas como Git e VSCode." : "My studies focus on web development, so I have acquired knowledge in HTML, CSS, JavaScript, and React. I also have experience with tools like Git and VSCode."
      }</p>
      <div className='container-tecnologias'>
        <div className='tecnologia-item'>
          <img src="/tecnologias/html.png" alt="" />
          <span>HTML</span>
        </div>
        <div className='tecnologia-item'>
          <img src="/tecnologias/css.png" alt="" />
          <span>CSS</span>
        </div>
        <div className='tecnologia-item'>
          <img src="/tecnologias/javascript.png" alt="" />
          <span>JavaScript</span>
        </div>
        <div className='tecnologia-item'>
          <img src="/tecnologias/react.png" alt="" />
          <span>React</span>
        </div>
        <div className='tecnologia-item'>
          <img src="/tecnologias/git.png" alt="" />
          <span>Git</span>
        </div>
        <div className='tecnologia-item'>
          <img src="/tecnologias/vscode.png" alt="" />
          <span>VS Code</span>
        </div>
      </div>
    </div>
  )
}