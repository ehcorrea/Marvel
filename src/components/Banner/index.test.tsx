import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { renderWithTheme } from '../../util/tests/helper';

import Banner from '.';
import BANNER_MOCK from './mock';

describe('<Banner/>', () => {
  it('should render component, elements and must be touchable ', () => {
    const onPressMock = jest.fn();
    const { getByText, getByLabelText } = renderWithTheme(
      <Banner {...BANNER_MOCK} onPress={onPressMock} />
    );

    expect(getByText(BANNER_MOCK.name)).toBeTruthy();
    expect(getByText(BANNER_MOCK.type)).toBeTruthy();

    const touchableElement = getByLabelText(`${BANNER_MOCK.name} banner`);
    fireEvent.press(touchableElement);

    expect(touchableElement.props.source).toEqual({
      uri: BANNER_MOCK.image,
    });
    expect(onPressMock).toHaveBeenCalled();
  });
});
