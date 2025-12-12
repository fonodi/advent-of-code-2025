import { data } from "./data.mjs";

const getAllZeroStops = () => {
  const rotationDiffs = [];

  const rotationResults = data.reduce(
    (acc, rotation) => {
      const lastNumber = acc[acc.length - 1];

      if (rotation.startsWith("R")) {
        const ticksString = rotation.split("R")[1];
        const ticksNumber = Number(ticksString);
        const lastTwoDigits = Number(ticksString.slice(-2));
        const sum = lastNumber + lastTwoDigits;

        if (sum >= 100) {
          const newValue = lastNumber + ticksNumber;
          rotationDiffs.push(Math.floor(Math.abs(newValue) / 100));
          return [...acc, sum - 100];
        } else {
          return [...acc, sum];
        }
      } else {
        const ticksString = rotation.split("L")[1];
        const ticksNumber = Number(ticksString);
        const lastTwoDigits = Number(ticksString.slice(-2));
        const diff = lastNumber - lastTwoDigits;

        if (diff < 0) {
          const newValue = lastNumber - ticksNumber;
          rotationDiffs.push(Math.floor(Math.abs(newValue) / 100) + 1);
          return [...acc, diff + 100];
        } else {
          return [...acc, diff];
        }
      }
    },
    [50]
  );

  console.log(rotationDiffs);
  const sumOfPassings = rotationDiffs.reduce((acc, number) => acc + number, 0);
  const zeros = rotationResults.filter((number) => number === 0);
  console.log(zeros.length);
  console.log(sumOfPassings);
};

getAllZeroStops();
