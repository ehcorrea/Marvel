import React from 'react';

import { renderWithTheme } from '../../util/tests/helper';

import BannerSlider from '.';
import INFO_CARD_SLIDER_MOCK from './mock';

describe('<InfoCardSlider/>', () => {
  it('should render component, elements ', () => {
    const { getAllByText, getByLabelText } = renderWithTheme(
      <BannerSlider {...INFO_CARD_SLIDER_MOCK} />
    );

    const slider = getByLabelText('info card slider');
    expect(slider.props.showsHorizontalScrollIndicator).toEqual(false);
    expect(getAllByText(/hero mock/i).length).toEqual(3);
  });
});
