import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-reanimated';

import theme from './styles/theme';
import Routes from './routes';
import { Notification } from './components/Container';

const App = () => {
  return (
    <Notification>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </Notification>
  );
};

export default App;
