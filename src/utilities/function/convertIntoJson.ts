export const handleOnConvertIntoJson = <T>(data: T) => {
  return JSON.parse(JSON.stringify(data));
};
