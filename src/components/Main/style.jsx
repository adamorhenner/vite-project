import styled from 'styled-components';


export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImageContainer = styled.div`

`;

export const CardContainer = styled.div`
    opacity: 0.7;
    background-color: black;
    align-self: center;
    justify-self: center;
    height: 75%;
    width: 75%;

`;

export const MainSection = styled.section`
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #b52323;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

export const MainTitle = styled.h2`
  font-size: 24px;
  margin: 10px 10px 20px;
  text-align: center;
`;

export const MainText = styled.p`
  line-height: 1.5;
  margin: 0 10px 10px;
`;