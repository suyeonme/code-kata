// Multiple Pointer
const averagePairFunc = (arr, avg) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let math = (arr[left] + arr[right]) / 2;
    if (math === avg) {
      console.log(arr[left], arr[right]);
      return true;
    } else if (math > 0) {
      right--;
    } else if (math < 0) {
      left++;
    }
  }
};

averagePairFunc([1, 2, 3, 4, 5], 2.5);
