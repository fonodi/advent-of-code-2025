import { data } from "./data.mjs";

const getAllZeroStops = () => {
  const rotationResults = data.reduce(
    (acc, rotation) => {
      if (rotation.startsWith("R")) {
        const number = Number(rotation.split("R")[1]);
        const lastStop = Math.abs(acc[acc.length - 1])
          .toString()
          .slice(-2);
        const sum = Number(lastStop) + number;
        return [...acc, sum];
      } else {
        const number = Number(rotation.split("L")[1]);
        const lastStop = Math.abs(acc[acc.length - 1])
          .toString()
          .slice(-2);
        const diff = Number(lastStop) - number;
        return [...acc, diff];
      }
    },
    [50]
  );

  const zeroPasses = rotationResults.reduce((acc, num) => {
    let passes = Math.floor(Math.abs(num) / 100);
    if (num <= 0) {
      passes + 1;
    }

    return acc + passes;
  }, 0);
  console.log(zeroPasses);
};

getAllZeroStops();
