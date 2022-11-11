export const checkInput = (input) => {
  const regExp = new RegExp([a - zA - Z0 - 9], { 3: 40 });
  return !!input.match(regExp);
};
