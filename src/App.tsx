import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import theme from './styles/theme';
import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
