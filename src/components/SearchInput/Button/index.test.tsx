import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';

import { renderWithTheme } from '../../../util/tests/helper';
import { SearchInputContext } from '../context';

import Button from '.';

const mockedHandleChangeFocus = jest.fn();

describe('<SearchInput Button/>', () => {
  it('should render button', async () => {
    const { getByLabelText, getByTestId } = renderWithTheme(
      <SearchInputContext.Provider
        value={{ focused: false, handleChangeFocus: mockedHandleChangeFocus }}
      >
        <Button />
      </SearchInputContext.Provider>
    );

    const button = getByLabelText('focus to search field');
    const animatedElement = getByTestId('animated-wrapper-button');

    expect(animatedElement).toHaveStyle({ opacity: 0 });

    await waitFor(() => {
      expect(animatedElement).toHaveStyle({ opacity: 1 });
    });

    fireEvent.press(button);
    expect(mockedHandleChangeFocus).toBeCalled();
  });
});
