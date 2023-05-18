import { CardContainer, ImageContainer, MainContainer, MainSection, MainText, MainTitle } from "./style";
import welcomeImage from '../../assets/welcome.jpg';
import sobre from '../../assets/sobre.jpg';
import personagem from '../../assets/personagem.jpg';
import feitico from '../../assets/feitico.jpg';


export default function Main() {
  return (
    <MainContainer>
      <MainSection id="inicio" image={welcomeImage}>
        <CardContainer>
          <MainTitle>Bem-vindo ao mundo de Hogwarts Legacy</MainTitle>
          <MainText>Hogwarts Legacy é um jogo de RPG de ação que se passa no mundo mágico de Harry Potter. Os jogadores assumem o papel de um estudante recém-chegado à Escola de Magia e Bruxaria de Hogwarts, onde podem explorar o mundo aberto, aprender feitiços e habilidades, criar poções e se envolver em batalhas épicas contra criaturas mágicas e outros jogadores. O jogo será lançado em breve e estamos ansiosos para compartilhar mais informações com vocês!</MainText>
        </CardContainer>
        <ImageContainer/>
      </MainSection>

      <MainSection id="sobre" image={sobre}>
      <ImageContainer/>
        <CardContainer>
          <MainTitle>Mais sobre Hogwarts Legacy</MainTitle>
          <MainText>Com gráficos deslumbrantes, uma narrativa envolvente e uma trilha sonora cativante, Hogwarts Legacy promete transportar os fãs de Harry Potter para uma experiência imersiva e inesquecível. Esteja preparado para explorar um mundo mágico repleto de aventuras, mistérios e magia, e descubra o seu verdadeiro potencial como um bruxo ou bruxa em Hogwarts Legacy.</MainText>
        </CardContainer>
      </MainSection>

      <MainSection id="personagens" image={personagem}>
      <ImageContainer/>
        <CardContainer>
          <MainTitle>Conheça os personagens de Hogwarts Legacy</MainTitle>
          <MainText>Aqui você encontrará informações sobre os principais personagens do jogo Hogwarts Legacy. Descubra suas histórias, habilidades e participação na trama emocionante do mundo mágico de Harry Potter.</MainText>
        </CardContainer>
      </MainSection>

      <MainSection id="feitiços" image={feitico}>
      <ImageContainer/>
        <CardContainer>
          <MainTitle>Aprenda os feitiços de Hogwarts Legacy</MainTitle>
          <MainText>Explore o vasto sistema de feitiços de Hogwarts Legacy e aprenda poderosos encantamentos, poções e magias. Domine as artes mágicas para enfrentar desafios, desvendar segredos e proteger o mundo mágico da escuridão.</MainText>
        </CardContainer>
      </MainSection>
    </MainContainer>


  );
}