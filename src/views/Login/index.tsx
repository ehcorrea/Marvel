import React from 'react';
import { useDispatch } from 'react-redux';

import { loginFake } from '../../store/auth';
import { AppDispatch } from '../../store';

import * as S from './styles';
import { Button } from 'react-native';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = () => {
    dispatch(loginFake());
  };

  return (
    <S.Wrapper>
      <Button title="login" onPress={handleLogin} />
    </S.Wrapper>
  );
};

export default Login;
