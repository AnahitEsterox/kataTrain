// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript
// sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.
// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.


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
