import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import FavoriteButton from '.';
import { renderWithTheme } from '../../util/tests/helper';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('<FavoriteButton/>', () => {
  it('should render element with default label and icon', () => {
    const onPressMock = jest.fn();
    const LABEL_TEXT = 'Add Your Character';

    const { getByLabelText, getByText } = renderWithTheme(
      <FavoriteButton onPress={onPressMock} />
    );

    const touchableElement = getByLabelText(LABEL_TEXT);

    fireEvent.press(touchableElement);

    expect(onPressMock).toBeCalled();
    expect(getByLabelText(LABEL_TEXT)).toBeTruthy();
    expect(getByLabelText(`click add Character icon`)).toBeTruthy();
    expect(getByText(LABEL_TEXT)).toBeTruthy();
  });

  it('should render element with props', () => {
    const onPressMock = jest.fn();
    const LABEL_TEXT = 'Hero Mock';

    const { getByLabelText, getByText } = renderWithTheme(
      <FavoriteButton title={LABEL_TEXT} onPress={onPressMock} />
    );

    expect(getByText(LABEL_TEXT)).toBeTruthy();
    expect(getByLabelText(`click ${LABEL_TEXT} icon`)).toBeTruthy();
  });

  it('should wait animation', () => {
    const onPressMock = jest.fn();
    const LABEL_TEXT = 'Hero Mock';

    const { getByLabelText } = renderWithTheme(
      <FavoriteButton title={LABEL_TEXT} onPress={onPressMock} withAnimation />
    );

    const touchableElement = getByLabelText(LABEL_TEXT);

    fireEvent.press(touchableElement);

    expect(setTimeout).toHaveBeenLastCalledWith(onPressMock, 500);
  });
});
