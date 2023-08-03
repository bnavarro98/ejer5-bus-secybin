function findMaxNumber(arr) {
    return Math.max(...arr);
  }
  
  const inputArray = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
  const maxNumber = findMaxNumber(inputArray);
  console.log("Número más grande:", maxNumber);
  