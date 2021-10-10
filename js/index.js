/* Sorting: Bubble Sort
 * isNoSwap: It prevent an unnecessary loop if an array is nearly sorted. (optimization)
 * Time Complexity: O(n²)
 */

const bubbleSort = arr => {
  let isNoSwap;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    let isNoSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap(arr, j, j + 1);
        let isNoSwap = true;
      }
    }

    if (isNoSwap) break;
  }
  console.log(arr);
  return arr;
};

bubbleSort([1, 6, 3, 2, 10, 8]);
