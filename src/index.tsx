import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import App from './App';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Root = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <App />
    </Provider>
  );
};

export default Root;
