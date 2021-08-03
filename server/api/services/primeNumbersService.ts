export const getPrimeNumbersService = (inputNumber: number) => {
  const list = [];
  while (inputNumber > 0) {
    if (isPrimeNumber(inputNumber)) list.push(inputNumber);
    inputNumber--;
  }
  return list.join();
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
