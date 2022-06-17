export type SearchInputProps = {
  focused: boolean;
  handleChangeFocus: (value?: boolean, forceValue?: boolean) => void;
  onChangeText?: (text: string) => void;
};
