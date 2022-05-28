import React from 'react';

import { ThemeProvider } from 'styled-components/native';

import theme from './styles/theme';

const App = () => {
  return <ThemeProvider theme={theme}></ThemeProvider>;
};

export default App;
