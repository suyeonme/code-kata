/*
countUniqueValue: Multiple pointer pattern
*/

// My solution
// function countUniqueValue(arr) {
//   arr.sort();
//   let answer = [];
//   for (value of new Set(arr)) {
//     answer.push(value);
//   }
//   return answer.length;
// }

function countUniqueValue(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValue([1, 1, 2, 3, 4, 4, 5, 5, 5, 7]);
