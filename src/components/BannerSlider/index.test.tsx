import React from 'react';

import { renderWithTheme } from '../../util/tests/helper';

import BannerSlider from '.';
import BANNER_SLIDER_MOCK from './mock';

describe('<Banner/>', () => {
  it('should render component, elements and must be touchable ', () => {
    const { getAllByText } = renderWithTheme(
      <BannerSlider {...BANNER_SLIDER_MOCK} />
    );

    expect(getAllByText('character').length).toEqual(3);
  });
});
