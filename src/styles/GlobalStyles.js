// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f7f6;
    margin: 0;
    padding: 20px;
    color: #333;
    line-height: 1.6;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }

  input, textarea, button {
    font-family: inherit;
    font-size: inherit;
  }
`;

export default GlobalStyles;