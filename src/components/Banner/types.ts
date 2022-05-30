export type BannerProps = {
  image: string;
  type: 'comic' | 'character' | 'event';
  name: string;
  onPress?: () => void;
  onSlider?: boolean;
};

export type WrapperProps = Pick<BannerProps, 'onSlider'>;
