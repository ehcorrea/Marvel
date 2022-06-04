import { ContentType } from '../../types/enum';

export type BannerProps = {
  image: string;
  type: ContentType;
  name: string;
  onPress?: () => void;
  onSlider?: boolean;
};

export type WrapperProps = Pick<BannerProps, 'onSlider'>;
