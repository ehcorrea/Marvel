import { User } from '@react-native-google-signin/google-signin';

export type AuthState = {
  loading: boolean;
  user?: User['user'];
  error: boolean;
};
