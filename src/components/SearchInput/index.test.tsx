import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';

import { renderWithTheme } from '../../util/tests/helper';

import SearchInput from '.';

describe('<SearchInput/>', () => {
  it('should render component button when focused is false', async () => {
    let inputValue = false;
    const handleChangeInputValue = jest.fn(() => {
      inputValue = !inputValue;
    });

    const unfocusedComponent = renderWithTheme(
      <SearchInput
        focused={inputValue}
        handleChangeFocus={handleChangeInputValue}
      />
    );

    const animatedElement = unfocusedComponent.getByTestId('animated-wrapper');
    const button = unfocusedComponent.getByLabelText('focus to search field');
    let input = unfocusedComponent.queryByLabelText('search field');

    expect(animatedElement).toHaveStyle({ borderRadius: 4, margin: 8 });
    expect(button).toBeTruthy();
    expect(input).toBeFalsy();

    fireEvent.press(button);
    expect(handleChangeInputValue).toBeCalled();

    const foscusedComponent = renderWithTheme(
      <SearchInput
        focused={inputValue}
        handleChangeFocus={handleChangeInputValue}
      />
    );

    input = foscusedComponent.getByLabelText('search field');
    const animatedElementFocusedComponent =
      foscusedComponent.getByTestId('animated-wrapper');
    const focusedComponentButton = foscusedComponent.queryByLabelText(
      'focus to search field'
    );

    expect(input).toBeTruthy();
    expect(focusedComponentButton).toBeFalsy();

    await waitFor(() => {
      expect(animatedElementFocusedComponent).toHaveStyle({
        borderRadius: 0,
        margin: 0,
      });
    });
  });
});
