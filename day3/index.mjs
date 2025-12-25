import { data } from "./data.mjs";

const getHighestJoltSum = () => {
  const jolts = [];

  for (let i = 0; i < data.length; i++) {
    const numberArr = data[i].split("");
    const numberArrLength = numberArr.length;
    let highestNumber = 0;
    let secondHighestNumber = 0;
    let highestNumberPositions = [];
    let finalJolt = 0;

    // Get the highest number with all its positions
    for (let j = 0; j < numberArrLength; j++) {
      const number = Number(numberArr[j]);

      if (number > highestNumber) {
        highestNumber = number;
        highestNumberPositions = [j];
        continue;
      }

      if (number === highestNumber) {
        highestNumberPositions.push(j);
        continue;
      }
    }

    // If the only highest number is last in the array
    if (
      highestNumberPositions.length === 1 &&
      highestNumberPositions[0] === numberArrLength - 1
    ) {
      highestNumberPositions = [];

      for (let j = 0; j < numberArrLength; j++) {
        const number = Number(numberArr[j]);

        if (number === highestNumber) {
          continue;
        }

        if (number > secondHighestNumber) {
          secondHighestNumber = number;
          highestNumberPositions = [j];
          continue;
        }

        if (number === secondHighestNumber) {
          highestNumberPositions.push(j);
          continue;
        }
      }

      highestNumber = secondHighestNumber;
    }

    // Find the highest number from all the positions of the highest possible number
    for (let j = 0; j < highestNumberPositions.length; j++) {
      for (let k = highestNumberPositions[j] + 1; k < numberArrLength; k++) {
        const currentNumber = Number([highestNumber, numberArr[k]].join(""));
        if (currentNumber > finalJolt) {
          finalJolt = currentNumber;
        }
      }
    }

    jolts.push(finalJolt);
  }

  const joltSum = jolts.reduce((acc, jolt) => acc + jolt, 0);
  console.log(joltSum);
};

getHighestJoltSum();
