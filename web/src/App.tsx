import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './assets/styles/global';
import light from './assets/styles/themes/light';
import dark from './assets/styles/themes/dark';

import Header from './components/Header';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  function handleToggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={{ ...theme, handleToggleTheme }}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
};

export default App;
