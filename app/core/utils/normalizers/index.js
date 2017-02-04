// @flow
export const phoneCode = (value: string): string => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  return `${onlyNums.slice(0, 4)}`;
};

export const capitalize = (value: string): string => value.toUpperCase();
