import { ContentType } from '../../types/enum';
import { BannerSliderProps } from './types';

const BANNER_MOCK: BannerSliderProps = {
  data: [
    {
      image: 'https://via.placeholder.com/150',
      name: 'Hero Mock 1',
      type: ContentType.character,
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Hero Mock 2',
      type: ContentType.character,
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Hero Mock 3',
      type: ContentType.character,
    },
  ],
};

export default BANNER_MOCK;
