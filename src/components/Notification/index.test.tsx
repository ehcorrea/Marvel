import React from 'react';
import { render } from '@testing-library/react-native';

import OneSignal from 'react-native-onesignal';
import { Text } from 'react-native';

import Notification from '.';

jest.mock('react-native-onesignal', () => ({
  setAppId: jest.fn(),
}));

describe('<InfoCardSlider/>', () => {
  it('should render component, elements ', () => {
    const { getByTestId } = render(
      <Notification>
        <Text testID="children">Notification</Text>
      </Notification>
    );

    expect(OneSignal.setAppId).toBeCalled();
    expect(getByTestId('children')).toBeTruthy();
  });
});
