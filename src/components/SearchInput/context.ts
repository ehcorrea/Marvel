import { createContext } from 'react';
import { SearchInputProps } from './types';

export const SearchInputContext = createContext<SearchInputProps>({
  focused: false,
  handleChangeFocus: () => null,
});
