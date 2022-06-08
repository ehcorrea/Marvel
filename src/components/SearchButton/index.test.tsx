import React from 'react';

import { renderWithTheme } from '../../util/tests/helper';

import SearchButton from '.';
import { fireEvent } from '@testing-library/react-native';

const mockedUsedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedUsedNavigate,
    }),
  };
});

describe('<SearchButton/>', () => {
  it('should render component and call navigation ', () => {
    const { getByLabelText } = renderWithTheme(<SearchButton />);
    const touchableElement = getByLabelText(`search button`);

    fireEvent.press(touchableElement);

    expect(mockedUsedNavigate).toBeCalled();
  });
});
