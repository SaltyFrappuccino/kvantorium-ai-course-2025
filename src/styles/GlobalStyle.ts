import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #0d0c1d; /* Более глубокий, темный фон */
    color: #c5c8d2; /* Мягкий, светло-серый цвет текста */
    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden; 
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: 
      linear-gradient(45deg, rgba(90, 0, 128, 0.15) 0%, rgba(90, 0, 128, 0) 70%),
      linear-gradient(135deg, rgba(75, 0, 130, 0.1) 10%, rgba(75, 0, 130, 0) 80%),
      linear-gradient(225deg, rgba(200, 0, 255, 0.1) 10%, rgba(200, 0, 255, 0) 80%),
      linear-gradient(315deg, rgba(148, 0, 211, 0.15) 100%, rgba(148, 0, 211, 0) 70%);
    animation: gradient-animation 25s ease infinite;
    background-size: 400% 400%;
  }

  @keyframes gradient-animation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  a {
    color: #ad94ff; /* Слегка приглушенный цвет ссылок */
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #c7b3ff;
    }
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #e0e2e8; /* Более нейтральный цвет заголовков */
    text-shadow: 0 0 8px rgba(199, 146, 234, 0.3); /* Мягкое свечение */
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #0d0c1d;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4a4a68;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #6a6a8b;
  }
`; 