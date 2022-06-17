import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';

import { renderWithTheme } from '../../../util/tests/helper';
import { SearchInputContext } from '../context';

import Input from '.';

const mockedHandleChangeFocus = jest.fn();
const mockedOnChangeText = jest.fn();

describe('<SearchInput/>', () => {
  it('should render input', async () => {
    const { getByLabelText, getByTestId, queryByLabelText } = renderWithTheme(
      <SearchInputContext.Provider
        value={{
          focused: true,
          handleChangeFocus: mockedHandleChangeFocus,
          onChangeText: mockedOnChangeText,
        }}
      >
        <Input />
      </SearchInputContext.Provider>
    );

    const animatedElement = getByTestId('animated-wrapper-input');
    const input = getByLabelText('search field');
    const backButton = getByLabelText('back button');
    let clearButton = queryByLabelText('clear search field button');

    expect(clearButton).toBeFalsy();
    expect(animatedElement).toHaveStyle({ opacity: 0 });
    await waitFor(() => {
      expect(animatedElement).toHaveStyle({ opacity: 1 });
    });

    fireEvent.changeText(input, 'changed text');
    expect(input.props.value).toEqual('changed text');
    expect(mockedOnChangeText).toBeCalledWith('changed text');

    clearButton = getByLabelText('clear search field button');

    fireEvent.press(clearButton);
    expect(input.props.value).toEqual('');
    expect(mockedOnChangeText).toBeCalledWith('');

    fireEvent.press(backButton);
    expect(mockedOnChangeText).toBeCalledWith('');
    expect(mockedHandleChangeFocus).toBeCalledWith(false, true);
  });
});
