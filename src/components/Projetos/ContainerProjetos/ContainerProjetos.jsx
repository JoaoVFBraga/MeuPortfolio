import "./ContainerProjetos.css"

export default function ContainerProjetos(props) {
  return (
    <div className="container-projeto">
      <h3>{props.titulo}</h3>
      <div className={`container-info-projeto ${props.classe}`}>
        <div className="img-projeto">
          <img src={props.imagem} alt="" />
        </div>
        <div className="sobre-projeto">
          <p>{props.texto}</p>
          <div className="tecnologias-usadas">
            <img src="/icones/html-icone.png" alt="" />
            <img src="/icones/css-icone.png" alt="" />
            <img src="/icones/js-icone.png" alt="" />
            {props.tecnologia ? <img src="/icones/react-icone.png" alt="" /> : ''}
          </div>
          <div className="btn-sobre-projeto">
            <div className="btn-acessar">
              <a href={props.site} target="_blank">Acesse o site</a>
            </div>
            <a className="btn-repositorio" target="_blank" href={props.repositorio}>&lt;Repositório /&gt;</a>
          </div>
        </div>
      </div>
    </div>
  )
}