import React from 'react';
import TabMenuItem from '.';
import theme from '../../styles/theme';

import { renderWithTheme } from '../../util/tests/helper';

describe('<TabMenuItem/>', () => {
  it('should render component with default style', () => {
    const { getByLabelText, getByRole } = renderWithTheme(
      <TabMenuItem
        iconSource={require('../../assets/images/icon-home.png')}
        accessibilityLabel="tab mock icon"
      />
    );
    const iconWrapper = getByLabelText('tab mock icon');
    const icon = getByRole('image');

    expect(iconWrapper).toHaveStyle({
      backgroundColor: 'transparent',
    });
    expect(icon).toHaveStyle({ tintColor: theme.colors.gray });
  });

  it('should render component with focused style', () => {
    const { getByLabelText, getByRole } = renderWithTheme(
      <TabMenuItem
        iconSource={require('../../assets/images/icon-home.png')}
        accessibilityLabel="tab mock icon"
        focused
      />
    );
    const iconWrapper = getByLabelText('tab mock icon');
    const icon = getByRole('image');

    expect(iconWrapper).toHaveStyle({
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      borderRadius: 100,
      display: 'flex',
      height: 50,
      justifyContent: 'center',
      top: -13,
      width: 50,
    });
    expect(icon).toHaveStyle({ tintColor: theme.colors.white });
  });
});
