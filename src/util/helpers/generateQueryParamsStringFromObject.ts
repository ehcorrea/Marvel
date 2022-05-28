const generateQueryParamsStringFromObject = <T>(
  data: Record<string, number | string | undefined> | T
) => {
  const params = new URLSearchParams();

  Object.entries(data).forEach(
    ([key, value]) => !!value && params.append(key, String(value))
  );

  return `&${params.toString()}`;
};

export default generateQueryParamsStringFromObject;
