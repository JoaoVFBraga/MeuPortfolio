import "./Projetos.css";
import ContainerProjetos from "./ContainerProjetos/ContainerProjetos";

export default function Projetos() {
  return (
    <div className="formatacao-container">
      <h2>Projetos</h2>
      <ContainerProjetos titulo={'Creatures TCG'} imagem={'/projetos/creaturesProject.png'} site={'https://creaturestcg.netlify.app/'} repositorio={'https://github.com/JoaoVFBraga/CreaturesTCG'} texto={'Sempre fui fã de jogos de cartas (TCG), então decidi criar um projeto que onde é possível criar sua própria coleção de cartas. É possível criar, salvar, pesquisar e excluir cartas da sua coleção.'} classe={''} tecnologia={true} />
      <ContainerProjetos titulo={'Switch Store'} imagem={'/projetos/switchProject.png'} site={'https://joaovfbraga.github.io/SwitchStoreProject/'} repositorio={'https://github.com/JoaoVFBraga/SwitchStoreProject'} texto={'Switch Store é um e-commerce baseado no universo de Nintendo Switch, é possível pesquisar por produtos, adicionar ao carrinho, exibir cada produto de forma individual ao clicar sobre ele, e também possui uma página de login.'} classe={'inverter-flex'} />
      <ContainerProjetos titulo={'Padaria Brigadeiro'} imagem={'/projetos/padariaProject.png'} site={'https://padariabrigadeiro.netlify.app/'} repositorio={'https://github.com/JoaoVFBraga/PadariaBrigadeiro'} texto={'Meu primeiro projeto com uso real. Foi desenvolvido para a Padaria Brigadeiro, localizada em Capivari-SP, possui um pouco da história dos sócios, apresentação dos produtos e área para contato.'} classe={''} />
      <ContainerProjetos titulo={'MyGym'} imagem={'/projetos/gymProject.png'} site={'https://my-gym-jvfb.netlify.app/'} repositorio={'https://github.com/JoaoVFBraga/MyGym'} texto={'MyGym é um projeto simples, consiste em um site de uma rede de academias, onde o foco foi o aprendizado de algumas animações baseadas em qual parte da página está sendo exibida.'} />
      <ContainerProjetos titulo={'JoKenPo na Web'} imagem={'/projetos/jokenpoProject.png'} site={'https://jokenpo-na-web.netlify.app/'} repositorio={'https://github.com/JoaoVFBraga/JoKenPoNaWeb'} texto={'Após um tempo de estudo sobre JavaScript, decidi criar um jogo usando o conhecimento que havia adquirido, criei então um jogo de pedra, papel ou tesoura. Possui também um botão que apresenta as regras.'} classe={''} />
      <ContainerProjetos titulo={'Descubra o número'} imagem={'/projetos/descubraProject.png'} site={'https://descubraonumero-jvfb.netlify.app/'} repositorio={'https://github.com/JoaoVFBraga/jogo-acerte-o-numero'} texto={'Usando os conhecimento adquiridos no livro "Lógica de Programação e Algoritmos com JavaScript", criei o jogo "Descubra o número", no qual você tem 5 chances para acertar um número aleatório.'} classe={'inverter-flex'} />
    </div>
  )
}