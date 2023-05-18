import {HeaderContainer, HeaderTitle, Nav} from './style';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Hogwarts Legacy</HeaderTitle>
      <Nav>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#personagens">Personagens</a></li>
          <li><a href="#feitiços">Feitiços</a></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}
