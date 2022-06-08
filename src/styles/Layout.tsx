import styled, { css } from 'styled-components/native';

export default styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.mainBg};
    padding-bottom: ${theme.spacings.huge};
  `}
`;
