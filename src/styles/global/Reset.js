import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fredoka One', cursive;
    letter-spacing: 1.4px;
  }

  label {
    color: var(--yellow-secondary);
    text-shadow: -1px 1px 0 var(--yellow-primary);
    font-size: 15px;
  }

  :root {
    --purple-primary: #6159C6;
    --purple-secondary: #423C96;
    --purple-tertiary: #1f1b52;
    --purple-border: #A099FF;
    --blue-primary: #2C2C9B;
    --blue-secondary: #312FAC;
    --blue-tertiary: #332d7a;
    --yellow-primary: #FFBE55;
    --yellow-secondary: #FFE05F;
    --green-primary: #88f0c0;
    --green-secondary: #389067;
    --red-primary: #E02D5C;
    --icon-disabled: #8684ce;
  }

  body {
    width: 100vw;
    height: 100vh;
    color: white;
    font-size: 14px;
    background-image: url('https://stopots.com/images/background.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
`;

export default Reset;
