export type InfoCardProps = {
  image: string;
  name: string;
  onPress?: () => void;
  size?: 'small' | 'large';
  subTitle?: string;
  type?: 'comic' | 'character' | 'event';
};

export type ModifierProps = Pick<InfoCardProps, 'size' | 'type'>;
