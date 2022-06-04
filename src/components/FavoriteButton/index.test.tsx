import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import FavoriteButton from '.';
import { renderWithTheme } from '../../util/tests/helper';

describe('<FavoriteButton/>', () => {
  it('should render element with default label and icon', () => {
    const { getByLabelText, getByText } = renderWithTheme(<FavoriteButton />);
    const labelText = 'Add Your Character';

    expect(getByLabelText(labelText)).toBeTruthy();
    expect(getByLabelText(`click add Character icon`)).toBeTruthy();
    expect(getByText(labelText)).toBeTruthy();
  });

  it('should render element with props', () => {
    const onPressMock = jest.fn();

    const { getByLabelText, getByText } = renderWithTheme(
      <FavoriteButton title="Hero Mock" onPress={onPressMock} />
    );
    const labelText = 'Hero Mock';
    const touchableElement = getByLabelText(labelText);

    fireEvent.press(touchableElement);

    expect(touchableElement).toBeTruthy();
    expect(onPressMock).toBeCalled();
    expect(getByLabelText(`click ${labelText} icon`)).toBeTruthy();
    expect(getByText(labelText)).toBeTruthy();
  });
});
