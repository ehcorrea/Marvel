import { TextInputProps } from 'react-native';

export type SearchInputProps = {
  focused: boolean;
  handleChangeFocus: (focus?: boolean) => void;
  handleBackArrow?: () => void;
} & TextInputProps;
