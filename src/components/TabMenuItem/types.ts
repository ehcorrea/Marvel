import { ImageSourcePropType } from 'react-native';

export type TabMenuItemProps = {
  focused?: boolean;
  iconSource: ImageSourcePropType;
  accessibilityLabel?: string;
};

export type WrapperProps = Pick<TabMenuItemProps, 'focused'>;
