import React from 'react';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, Text } from 'react-native';

import { AppDispatch, RootState } from './redux/store';
import { login } from './redux/auth';

const App = () => {
  const { user, error } = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async () => {
    dispatch(login());
  };

  console.log(error);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleLogin}
      />
      <Text>{user?.email}</Text>
    </SafeAreaView>
  );
};

export default App;
