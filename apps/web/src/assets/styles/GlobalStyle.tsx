import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: ${({ theme }) => theme.fontFamily};
    color-scheme: light;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Removes default margins and resets all the font styles */
  * {
    margin: 0;
    padding:0;
    font: inherit;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizespeed;
    line-height: 1.5;
  }

  /* Set the default cursor */
  a, button {
    cursor: pointer;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture,
  svg,
  video {
    max-width: 100%;
    display: block;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
