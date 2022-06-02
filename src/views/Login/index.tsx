import React from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import { loginFake } from '../../store/auth';
import { AppDispatch } from '../../store';

import * as S from './styles';

const iconLock = require('../../assets/images/icon-lock.png');

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = () => {
    dispatch(loginFake());
  };

  return (
    <S.Wrapper>
      <S.Button onPress={handleLogin}>
        <S.IconWrapper>
          <Image source={iconLock} />
        </S.IconWrapper>
        <S.ButtonContent>Fake Login</S.ButtonContent>
      </S.Button>
    </S.Wrapper>
  );
};

export default Login;
