import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth';
import { AppDispatch } from '../../redux/store';

import * as S from './styles';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <S.Wrapper>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleLogin}
      />
    </S.Wrapper>
  );
};

export default Login;
