function findMostRepeatedNumber(arr) {
    const counts = {};
    let mostRepeated = arr[0];
    let maxCount = 0;
  
    for (const num of arr) {
      if (counts[num]) {
        counts[num]++;
      } else {
        counts[num] = 1;
      }
  
      if (counts[num] > maxCount) {
        maxCount = counts[num];
        mostRepeated = num;
      }
    }
  
    return mostRepeated;
  }
  
  const inputArray = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];
  const mostRepeatedNumber = findMostRepeatedNumber(inputArray);
  console.log("Número más repetido:", mostRepeatedNumber);
  