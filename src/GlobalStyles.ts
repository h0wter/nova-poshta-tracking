import { css } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const GlobalStyles = css`
  :root {
    font-family: Roboto, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  figure,
  form,
  ol,
  ul,
  dl {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  a,
  em,
  small,
  code,
  sub,
  sup,
  i,
  b,
  u,
  strike,
  del,
  mark,
  ins,
  q {
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button,
  input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    display: block;
    padding: 0;
    margin: 0;
    cursor: pointer;
    font-family: inherit;
    border: none;
    outline: none;
    background-color: transparent;
  }

  input,
  textarea,
  select,
  button {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    color: var(--color-blue-400);
    font-size: var(--font-size-200);
    font-style: normal;
    line-height: 1.5;
    text-rendering: optimizespeed;

    background: #141e30;
    background: -webkit-linear-gradient(to right, #243b55, #141e30);
    background: linear-gradient(to right, #243b55, #141e30);

    /* background: #1d4350;
    background: -webkit-linear-gradient(to right, #a43931, #1d4350);
    background: linear-gradient(to right, #a43931, #1d4350); */
  }
`;
