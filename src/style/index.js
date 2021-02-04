import {createGlobalStyle} from "styled-components";
import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: auto;
`

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: var(--primary);
    overflow: hidden;
  }

  html, body {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;

    font-family: "Inter", sans-serif;
  }

  ::selection {
    background: #5405BC;
    color: #fff;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
  }

  p, span, strong {
    cursor: default;
  }

  :root {
    --primary: #1e1e1e;
    --secondary: #999;
    --box-background: #1A1237;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;