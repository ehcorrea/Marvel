import React from 'react';

import { fireEvent } from '@testing-library/react-native';

import { renderWithTheme } from '../../util/tests/helper';

import SearchInput from './';

jest.useFakeTimers();

const BUTTON_LABEL = 'button to focus search field';
const INPUT_LABEL = 'search field';
const ICON_CLEAR_LABEL = 'clear search field';
const ICON_ARROW_BACK = 'back button';

describe('<SearchInput/>', () => {
  it('should render component button', () => {
    const handleChangeFocusMock = jest.fn();

    const { getByLabelText, queryByLabelText } = renderWithTheme(
      <SearchInput focused={false} handleChangeFocus={handleChangeFocusMock} />
    );

    const button = getByLabelText(BUTTON_LABEL);
    const input = queryByLabelText(INPUT_LABEL);

    expect(input).toBeFalsy();

    fireEvent.press(button);

    expect(handleChangeFocusMock).toBeCalled();
  });

  it('should render input', () => {
    let newInputValue = '';

    const handleChangeFocusMock = jest.fn();
    const onChangeTexMock = jest.fn((value: string) => (newInputValue = value));
    const handleBackArrow = jest.fn();

    const { queryByLabelText, getByLabelText } = renderWithTheme(
      <SearchInput
        focused
        value={INPUT_LABEL}
        handleChangeFocus={handleChangeFocusMock}
        onChangeText={onChangeTexMock}
        handleBackArrow={handleBackArrow}
      />
    );

    const backButton = getByLabelText(ICON_ARROW_BACK);
    const button = queryByLabelText(BUTTON_LABEL);
    const clearButton = getByLabelText(ICON_CLEAR_LABEL);
    const input = getByLabelText(INPUT_LABEL);

    expect(backButton).toBeTruthy();
    expect(button).toBeFalsy();
    expect(clearButton).toBeTruthy();
    expect(input.props.value).toEqual(INPUT_LABEL);

    fireEvent.changeText(input, 'new value');
    fireEvent.press(backButton);

    expect(onChangeTexMock).toBeCalled();
    expect(handleBackArrow).toBeCalled();
    expect(newInputValue).toEqual('new value');

    fireEvent.press(clearButton);

    expect(onChangeTexMock).toBeCalledTimes(2);
    expect(newInputValue).toEqual('');
  });
});
