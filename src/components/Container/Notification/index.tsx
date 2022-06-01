import { useEffect } from 'react';
import OneSignal from 'react-native-onesignal';
import { REACT_APP_ONESIGINAL_APP_ID } from '@env';

import { NotificationProps } from './types';

const Notification = ({ children }: NotificationProps) => {
  useEffect(() => {
    OneSignal.setAppId(REACT_APP_ONESIGINAL_APP_ID);
  }, []);

  return children;
};

export default Notification;
