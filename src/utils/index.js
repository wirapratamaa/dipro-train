export const elipsis = (a, b) => {
  return a.slice(0, b) + "...";
};

export const onlyNumber = (param) => {
  const re = /^[0-9\b]+$/;
  return param === "" || re.test(param);
};

export const mappingNumber = (param) => {
  return param.split(" ").map(Number);
};

export const mappingString = (param) => {
  return param.split(" ").map(String);
};

export const hiddenTag = (param) => {
  return param < 0 ? "hidden" : "";
};

export const coloring = (param) => {
  return param === true ? "red" : "";
};
