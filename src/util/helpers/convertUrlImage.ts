const convertUrlImage = (url: string) => {
  const URL_PATTERN = 's://';

  if (url.includes(URL_PATTERN)) {
    return url;
  }

  return url.replace('://', URL_PATTERN);
};

export default convertUrlImage;
