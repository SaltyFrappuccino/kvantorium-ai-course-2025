import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import HomePage from './pages/HomePage';

const theme = {
  colors: {
    primary: '#c792ea',
    background: '#1a0a2e',
    text: '#e0e0e0',
    card: 'rgba(26, 10, 46, 0.8)',
    border: '#c792ea',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 