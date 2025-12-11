import { data } from "./data.mjs";

const getIsInvalidId = (string) => {
  for (let i = 1; i <= string.length; i++) {
    const firstPart = string.substring(0, i);
    const secondPart = string.substring(i);
    if (firstPart === secondPart) {
      return true;
    }
  }
  return false;
};

const getInvalidIdSum = () => {
  const finalArray = [];
  data.forEach((range) => {
    const split = range.split("-");
    for (let i = Number(split[0]); i <= Number(split[1]); i++) {
      if (getIsInvalidId(i.toString())) {
        finalArray.push(i);
      }
    }
  });
  const finalSum = finalArray.reduce((acc, invalidId) => acc + invalidId, 0);
  console.log(finalSum);
};

getInvalidIdSum();
