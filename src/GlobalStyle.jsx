import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 공통 스타일 */
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #f5f5f5;
  }
`;

export default GlobalStyle;
