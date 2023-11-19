function solve(arr){
  const frequencyMap = {};
  arr.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  arr.sort((a, b) => {
    if (frequencyMap[a] !== frequencyMap[b]) {
      return frequencyMap[b] - frequencyMap[a];
    } else {
      return a - b;
    }
  });

  return arr;
}
