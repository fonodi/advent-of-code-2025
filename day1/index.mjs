import { data } from "./data.mjs";

const getAllZeroStops = () => {
  const rotationResults = data.reduce(
    (acc, rotation) => {
      if (rotation.startsWith("R")) {
        const number = Number(rotation.split("R")[1].slice(-2));
        const sum = acc[acc.length - 1] + number;
        return sum >= 100 ? [...acc, sum - 100] : [...acc, sum];
      } else {
        const number = Number(rotation.split("L")[1].slice(-2));
        const diff = acc[acc.length - 1] - number;
        return diff < 0 ? [...acc, diff + 100] : [...acc, diff];
      }
    },
    [50]
  );
  const zeros = rotationResults.filter((number) => number === 0);
  console.log(zeros.length);
};

getAllZeroStops();
