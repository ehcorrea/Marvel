import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { renderWithTheme } from '../../util/tests/helper';
import SearchInput from '.';

describe('<SearchInput/>', () => {
  it('shound render component and elements, change and clear input value', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText, queryByLabelText } = renderWithTheme(
      <SearchInput onChangeText={onChangeMock} />
    );

    const textInput = getByLabelText('search input');

    expect(getByLabelText('search input')).toHaveStyle({
      flex: 1,
      color: 'white',
    });

    //test icons
    expect(getByLabelText('search icon')).toBeTruthy();
    expect(queryByLabelText('clear icon')).toBeFalsy();

    //input text
    fireEvent.changeText(textInput, 'onChangeText');
    expect(textInput.props.value).toEqual('onChangeText');
    expect(queryByLabelText('search icon')).toBeFalsy();
    expect(queryByLabelText('clear icon')).toBeTruthy();

    //clear input
    fireEvent.press(getByLabelText('clear icon'));
    expect(textInput.props.value).toEqual('');
  });
});
