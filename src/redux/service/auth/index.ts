import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { ErrorLoginGoogle } from './types';

export const loginByGoogle = async () => {
  try {
    GoogleSignin.configure();
    await GoogleSignin.hasPlayServices();
    const { user } = await GoogleSignin.signIn();
    return user;
  } catch (err) {
    const error = err as ErrorLoginGoogle;
    throw new Error(error.code);
  }
};
