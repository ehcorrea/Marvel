import React from 'react';
import SearchInput from '../../components/SearchInput';
import Layout from '../../styles/Layout';

import * as S from './styles';

const Home = () => (
  <Layout>
    <S.Wrapper>
      <SearchInput />
    </S.Wrapper>
  </Layout>
);

export default Home;
