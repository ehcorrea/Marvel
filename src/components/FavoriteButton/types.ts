import { ContentType } from '../../types/enum';

export type FavoriteButtonProps = {
  contentType?: ContentType;
  onPress?: () => void;
  title?: string;
  withAnimation?: boolean;
};
