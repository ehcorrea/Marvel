import md5 from 'js-md5';

const PUBLIC_KEY = 'e3994a792dc014808f0156407a19164e';
const PRIVATE_KEY = 'd2e28cfd7d89053444c7a14df31eeff162aa3041';

const generateHash = () => {
  const hash = md5.create();
  const timestamp = Number(new Date());
  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

  return {
    hash,
    timestamp,
    PUBLIC_KEY,
  };
};

export default generateHash;
