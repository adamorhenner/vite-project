import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const HeaderTitle = styled.h1`
  font-size: 36px;
  margin: 0;
  margin-bottom: 10px;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    display: inline-block;
    margin-right: 20px;
  }

  ul li a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }

  ul li a:hover {
    color: #ccc;
  }
`;
