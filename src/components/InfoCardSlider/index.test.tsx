import React from 'react';

import { renderWithTheme } from '../../util/tests/helper';

import BannerSlider from '.';
import INFO_CARD_SLIDER_MOCK from './mock';

describe('<InfoCardSlider/>', () => {
  it('should render component, elements ', () => {
    const { getAllByText } = renderWithTheme(
      <BannerSlider {...INFO_CARD_SLIDER_MOCK} />
    );

    expect(getAllByText(/hero mock/i).length).toEqual(3);
  });
});
