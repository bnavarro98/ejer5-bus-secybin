function findMinNumber(arr) {
    return Math.min(...arr);
  }
  
  const inputArray = [1, 4, 5, -1, -7, 2, 3, 9];
  const minNumber = findMinNumber(inputArray);
  console.log("Número más pequeño:", minNumber);
  