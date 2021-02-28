/*
SumZero: Two pointer pattern
*/

function sumZero(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const arr = [-3, -2, -1, 0, 1, 4, 5];
sumZero(arr);
