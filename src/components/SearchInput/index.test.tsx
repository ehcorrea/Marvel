import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { renderWithTheme } from '../../util/tests/helper';
import SearchInput from '.';

describe('<SearchInput/>', () => {
  it('shound render component', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = renderWithTheme(
      <SearchInput onChangeText={onChangeMock} />
    );

    const textInput = getByLabelText('search input');
    fireEvent.changeText(textInput, 'onChangeText');

    expect(onChangeMock).toHaveBeenCalledWith('onChangeText');
  });

  it('shound focus icon', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = renderWithTheme(
      <SearchInput onChangeText={onChangeMock} />
    );

    expect(getByLabelText('search icon')).toBeTruthy();
  });
});
