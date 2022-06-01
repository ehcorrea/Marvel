import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { fireEvent } from '@testing-library/react-native';

import { renderWithTheme } from '../../util/tests/helper';
import InfoCard from '.';
import INFO_CARD_MOCK from './mock';

describe('<CharacterCard', () => {
  it('should render small component by default and elements', () => {
    const onPressMock = jest.fn();

    const { getByLabelText, getByText } = renderWithTheme(
      <InfoCard {...INFO_CARD_MOCK} onPress={onPressMock} />
    );

    const imageElement = getByLabelText(`${INFO_CARD_MOCK.name} image`);
    fireEvent.press(imageElement);

    expect(onPressMock).toHaveBeenCalled();
    expect(getByText(INFO_CARD_MOCK.name)).toBeTruthy();
    expect(imageElement).toHaveStyle({
      width: 45,
      height: 45,
    });
  });

  it('should render large component when size is large and subtitle', () => {
    const { getByLabelText, getByText } = renderWithTheme(
      <InfoCard {...INFO_CARD_MOCK} subTitle="Hero Subtitle" size="large" />
    );

    expect(getByLabelText(`${INFO_CARD_MOCK.name} image`)).toHaveStyle({
      width: 120,
      height: 120,
    });
    expect(getByText('Hero Subtitle')).toBeTruthy();
  });

  it('should render comic style when type is comic', () => {
    const { getByLabelText } = renderWithTheme(
      <InfoCard {...INFO_CARD_MOCK} subTitle="Hero Subtitle" type="comic" />
    );

    expect(getByLabelText(`${INFO_CARD_MOCK.name} image`)).toHaveStyle({
      width: 45,
      height: 75,
    });
  });
});
