import md5 from 'js-md5';
import {
  REACT_APP_MARVEL_PUBLIC_KEY,
  REACT_APP_MARVEL_PRIVATE_KEY,
} from '@env';

const generateHash = () => {
  const hash = md5.create();
  const timestamp = Number(new Date());
  hash.update(
    timestamp + REACT_APP_MARVEL_PRIVATE_KEY + REACT_APP_MARVEL_PUBLIC_KEY
  );

  return {
    hash,
    timestamp,
  };
};

export default generateHash;
