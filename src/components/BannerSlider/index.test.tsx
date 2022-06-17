import React from 'react';

import { renderWithTheme } from '../../util/tests/helper';

import BannerSlider from '.';
import BANNER_SLIDER_MOCK from './mock';

describe('<Banner/>', () => {
  it('should render component and elements', () => {
    const { getAllByText, getByLabelText } = renderWithTheme(
      <BannerSlider {...BANNER_SLIDER_MOCK} />
    );

    const slider = getByLabelText('banner slider');
    expect(slider.props.showsHorizontalScrollIndicator).toEqual(false);
    expect(getAllByText('Character').length).toEqual(3);
  });
});
