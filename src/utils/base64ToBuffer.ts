export const handleOnBase64ToBuffer = (imageBase64: string): Buffer => {
  const base64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(base64, 'base64');
  return buffer;
};
