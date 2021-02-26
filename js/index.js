/*
두개의 array를 input으로 받아서, array1의 value가 array2의 squared value인지 확인하는 함수 
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyObj1 = {};
  let frequencyObj2 = {};

  for (let key of arr1) {
    frequencyObj1[key] = frequencyObj1[key] ? ++frequencyObj1[key] : 1;
  }
  for (let key of arr2) {
    frequencyObj2[key] = frequencyObj2[key] ? ++frequencyObj2[key] : 1;
  }
  for (let key in frequencyObj1) {
    if (frequencyObj1[key] !== frequencyObj2[key ** 2]) {
      return false;
    }
    if (!(key ** 2 in frequencyObj2)) {
      return false;
    }
  }
  return true;
}

// same([1, 2, 3, 2], [1, 4, 9, 4]); // true
same([1, 2, 3, 2], [1, 4, 9, 5]); // false
