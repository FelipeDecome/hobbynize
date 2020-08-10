import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    font-size: 60%;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body, html, #root {
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

`;

export const Container = styled.div`
  display: flex;
`;

export default GlobalStyle;
