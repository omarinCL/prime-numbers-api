export const getPrimeNumbersService = (inputNumber: number) => {
  const accumulator = [];
  while (inputNumber > 0) {
    if (isPrimeNumber(inputNumber)) accumulator.push(inputNumber);
    inputNumber--;
  }
  return accumulator;
};

export const isPrimeNumber = (inputNumber: number) => {
  if (inputNumber < 1) return false;
  let numberToEvaluate = inputNumber - 1;
  while (numberToEvaluate > 1) {
    if (inputNumber % numberToEvaluate === 0) break;
    numberToEvaluate--;
  }
  return numberToEvaluate === 1;
};
