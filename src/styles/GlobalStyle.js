import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf') format("truetype");
    font-display: swap;
}
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0 auto;
      padding: 0;
      font-family: 'Pretendard';
      max-width: 428px;
/*        @media screen and (max-width : 428px){
        width : 100%;        
      }  */
    }
    body{
    };
    button{
      cursor: pointer;
      outline: none;
    };
`;

export default GlobalStyle;
